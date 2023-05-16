import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { WalletGraphRequest, WalletService } from '../services/wallet-service';

import { cacheKey } from './cacheStateKey';

export const useGetWalletAndTokenDetails = () => {
  const result = useQuery({
    queryKey: cacheKey.walletBalanceAndTokenDetails,
    queryFn: () => WalletService.getWalletAndTokenDetails(),
  });
  return result;
};

export const useGetAllTokens = (disableApiCall = false) => {
  const result = useQuery({
    queryKey: cacheKey.tokens,
    queryFn: () => WalletService.getTokens(),
    enabled: !disableApiCall,
  });
  return result;
};

export const useGetWalletSummary = (tokenId: string) => {
  const result = useQuery({
    queryKey: cacheKey.walletSummary,
    queryFn: () => WalletService.getWalletSummary(tokenId),
    enabled: Boolean(tokenId),
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

export const useGetDashboardTransactionHistory = (page = 0, pageSize = 6) => {
  const result = useQuery({
    queryKey: [cacheKey.dashboardTransactionHistory, page],
    queryFn: () => WalletService.getTransactionHistory(undefined, page, pageSize),
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

export const useGetTransactionSummary = (tokenId: string) => {
  const result = useQuery({
    queryKey: cacheKey.transactionSummary,
    queryFn: () => WalletService.getTransactionSummary(tokenId),
    enabled: Boolean(tokenId),
  });
  return result;
};

export const useGetTransactionSummaryWithStartDate = (tokenId: string, start: string) => {
  const result = useQuery({
    queryKey: [cacheKey.transactionSummary, start],
    queryFn: () => WalletService.getTransactionSummary(tokenId, start),
    enabled: Boolean(tokenId),
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

export const useGetWalletGraphData = (request: WalletGraphRequest, enableChart: boolean) => {
  const result = useQuery({
    queryKey: cacheKey.walletGraphData,
    queryFn: () => WalletService.getWalletBalanceChartData(request),
    enabled: enableChart,
  });
  return result;
};

export const useGetDashboardGraphData = () => {
  const result = useMutation(WalletService.getDashboardBalanceChartData);
  return result;
};

export const useMintTokens = () => {
  const result = useMutation(WalletService.mintTokens);
  return result;
};

export const useBurnTokens = () => {
  const result = useMutation(WalletService.burnTokens);
  return result;
};

export const useTransferTokens = () => {
  const queryClient = useQueryClient();
  const result = useMutation(WalletService.transferTokens, {
    onSuccess: () => {
      queryClient.invalidateQueries(cacheKey.walletBalanceAndTokenDetails);
      queryClient.invalidateQueries(cacheKey.tokenReportSummary);
      queryClient.invalidateQueries(cacheKey.transactionHistory);
      queryClient.invalidateQueries(cacheKey.tokens);
      queryClient.invalidateQueries(cacheKey.walletSummary);
      queryClient.invalidateQueries(cacheKey.institutionWallets);
      queryClient.invalidateQueries(cacheKey.walletGraphData);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
  return result;
};

export const useGetFSPDashboardGraphData = () => {
  const result = useMutation(WalletService.getTrendedChartData);
  return result;
};
