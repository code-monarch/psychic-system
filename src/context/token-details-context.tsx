import { createContext, useContext } from 'react';
import { useGetWalletAndTokenDetails } from '../hooks/useWallets';
import { WalletAndTokenDetailsResponse } from '../services/wallet-service';

type TokenDetailsContextProps = {
  tokenDetails: WalletAndTokenDetailsResponse;
  isLoadingWalletTokenDetails: boolean;
};
const TokenDetailsContext = createContext<Partial<TokenDetailsContextProps>>({});
TokenDetailsContext.displayName = 'TokenDetailsContext';

const TokenDetailsProvider = (props: any) => {
  const { data: walletBalanceAndTokenDetails, isLoading: isLoadingWalletTokenDetails } = useGetWalletAndTokenDetails();

  const values: TokenDetailsContextProps = {
    tokenDetails: walletBalanceAndTokenDetails,
    isLoadingWalletTokenDetails,
  };
  return <TokenDetailsContext.Provider value={values} {...props} />;
};

/**
 * @description
 * A hook responsible for getting the system wide token details
 */
function useTokenDetails(): TokenDetailsContextProps {
  const context = useContext(TokenDetailsContext);
  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error(`useTokenDetails must be used within a TokenDetailsProvider`);
  }
  return context as TokenDetailsContextProps;
}

export { TokenDetailsProvider, useTokenDetails };
