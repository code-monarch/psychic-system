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

export const useGetTransactionHistory = (walletId, page = 0, pageSize = 6) => {
  const result = useQuery({
    queryKey: [cacheKey.transactionHistory, page],
    queryFn: () => WalletService.getTransactionHistory(walletId, page, pageSize),
    enabled: Boolean(walletId),
    keepPreviousData: true,
  });
  return result;
};

export const useGetCBTransactionHistory = (transactionType, page = 0, pageSize = 10) => {
  const result = useQuery({
    queryKey: [cacheKey.cbTransactionsHistory, transactionType, page, pageSize],
    queryFn: () => WalletService.getAllCBTransactionHistory(transactionType, page, pageSize),
    keepPreviousData: true,
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
