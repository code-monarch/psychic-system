import { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { cacheKey } from '../hooks/cacheStateKey';
import { AuthenticationService, FeatureFlagsResponse } from '../services/authentication-service';

type FeatureFlagsContextProps = {
  featureFlags: FeatureFlagsResponse[];
  featureFlagsNormalized: {
    TOKEN_TRANSFER_FLAG: boolean;
  };
};
const FeatureFlagsContext = createContext<Partial<FeatureFlagsContextProps>>({});
FeatureFlagsContext.displayName = 'FeatureFlagsContext';

const FeatureFlagsProvider = (props: any) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagsResponse[]>([]);
  // const [featureFlagsDataLocal] = useLocalStorage<FeatureFlagsResponse[]>(LOCAL_STORAGE_KEYS.FEATURE_FLAGS, []);

  const TOKEN_TRANSFER_FLAG = Boolean(
    featureFlags.find((flag) => flag.feature_name === 'TOKEN_TRANSFER_FLAG')?.feature_enabled,
  );

  const featureFlagsNormalized = {
    TOKEN_TRANSFER_FLAG,
  };

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
    featureFlagsNormalized,
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
