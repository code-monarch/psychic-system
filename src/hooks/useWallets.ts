import { useMutation, useQuery } from 'react-query';
import { WalletService } from '../services/wallet-service';

import { cacheKey } from './cacheStateKey';

export const useGetWalletTokenDetails = () => {
  const result = useQuery({
    queryKey: cacheKey.walletTokenDetails,
    queryFn: () => WalletService.getWalletTokenDetails(),
  });
  return result;
};

export const useGetTokenSummary = (tokenId) => {
  const result = useQuery({
    queryKey: cacheKey.tokenReportSummary,
    queryFn: () => WalletService.getTokenReportSummary(tokenId),
  });
  return result;
};

export const useGetUserWallets = () => {
  const result = useQuery({
    queryKey: cacheKey.userWallets,
    queryFn: () => WalletService.getAllUserWallets(),
  });
  return result;
};

export const useGetInstitutionWallets = () => {
  const result = useQuery({
    queryKey: cacheKey.institutionWallets,
    queryFn: () => WalletService.getAllInstitutionWallets(),
  });
  return result;
};

export const useMintTokens = () => {
  const result = useMutation(WalletService.mintTokens);
  return result;
};

export const useTransferTokens = () => {
  const result = useMutation(WalletService.transferTokens);
  return result;
};
