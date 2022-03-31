import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
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
    enabled: Boolean(tokenId),
  });
  return result;
};

export const useGetTransactionHistory = (walletId) => {
  const result = useQuery({
    queryKey: cacheKey.transactionHistory,
    queryFn: () => WalletService.getTransactionHistory(walletId),
    enabled: Boolean(walletId),
  });
  return result;
};

export const useGetInternalTransactionHistory = () => {
  const result = useQuery({
    queryKey: cacheKey.internalHistory,
    queryFn: () => WalletService.getInternalTransactionHistory(),
  });
  return result;
};

export const useGetTransactionSummary = () => {
  const result = useQuery({
    queryKey: cacheKey.transactionSummary,
    queryFn: () => WalletService.getTransactionSummary(),
  });
  return result;
};

export const useGetExternalTransactionHistory = () => {
  const result = useQuery({
    queryKey: cacheKey.externalHistory,
    queryFn: () => WalletService.getExternalTransactionHistory(),
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
  const queryClient = useQueryClient();
  const result = useMutation(WalletService.transferTokens, {
    onSuccess: () => {
      queryClient.invalidateQueries(cacheKey.walletTokenDetails);
      queryClient.invalidateQueries(cacheKey.tokenReportSummary);
      queryClient.invalidateQueries(cacheKey.userWallets);
      queryClient.invalidateQueries(cacheKey.transactionHistory);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
  return result;
};
