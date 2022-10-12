import { createContext, useContext } from 'react';
import { useGetAllTokens, useGetWalletSummary } from '../hooks/useWallets';
import { Token, WalletSummaryResponse } from '../services/wallet-service';

type TokenDetailsContextProps = {
  tokenDetails: Token[];
  walletSummaryDetails: WalletSummaryResponse;
  isLoadingWalletTokenDetails: boolean;
};
const TokenDetailsContext = createContext<Partial<TokenDetailsContextProps>>({});
TokenDetailsContext.displayName = 'TokenDetailsContext';

const TokenDetailsProvider = (props: any) => {
  const { data: tokens, isLoading: isFetchingTokens } = useGetAllTokens();

  const tokenId = tokens?.[0].id;
  const { data: walletSummary, isLoading: isFetchingSummary } = useGetWalletSummary(tokenId);

  const values: TokenDetailsContextProps = {
    tokenDetails: tokens,
    walletSummaryDetails: walletSummary,
    isLoadingWalletTokenDetails: isFetchingSummary || isFetchingTokens,
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
