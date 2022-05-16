import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocalStorage } from 'react-use';
import { cacheKey } from '../hooks/cacheStateKey';
import { AuthenticationService, FeatureFlagsResponse } from '../services/authentication-service';
import { LOCAL_STORAGE_KEYS } from '../lib/constants';
import { useGetDashboardGraphData } from '../hooks/useWallets';

type FeatureFlagsContextProps = {
  featureFlags: FeatureFlagsResponse[];
};
const FeatureFlagsContext = createContext<Partial<FeatureFlagsContextProps>>({});
FeatureFlagsContext.displayName = 'FeatureFlagsContext';

const FeatureFlagsProvider = (props: any) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagsResponse[]>([]);
  const [featureFlagsDataLocal] = useLocalStorage<FeatureFlagsResponse[]>(LOCAL_STORAGE_KEYS.FEATURE_FLAGS, []);

  const { mutate: getGraphData, isLoading: isLoadingGraph, data } = useGetDashboardGraphData();
  useEffect(() => {
    // if (featureFlagsDataLocal) {
    //   setFeatureFlags(featureFlagsDataLocal);
    // }
  }, [featureFlagsDataLocal]);

  useQuery({
    queryKey: [cacheKey.featureFlags],
    queryFn: AuthenticationService.getFeatureFlags,
    onSuccess: async (data) => {
      if (data) {
        setFeatureFlags(data);
      }
    },
  });

  const values: FeatureFlagsContextProps = {
    featureFlags,
  };
  return <FeatureFlagsContext.Provider value={values} {...props} />;
};

/**
 * @description
 * A hook responsible for interacting with and retrieving data from FeatureFlagsContext.
 */
function useFeatureFlags(): FeatureFlagsContextProps {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error(`useFeatureFlags must be used within a FeatureFlagsProvider`);
  }
  return context as FeatureFlagsContextProps;
}

export { FeatureFlagsProvider, useFeatureFlags };
