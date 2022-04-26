import { mainApi, secureMainApi } from '../lib/apis';

/**
 * @description
 * Our wallet service.
 */
interface WalletTokenDetailsResponse {
  circulatingSupply: number;
  clientId: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
}

interface WalletAndTokenDetailsResponse {
  circulatingSupply: number;
  notInCirculation: number;
  clientId: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
  walletBalance: Wallet[];
  decimals: number;
  currencyCode: string;
}

interface TokenReportSummary {
  tokenId: string;
  tokenSymbol: string;
  totalDistributed: number;
  totalMinted: number;
  totalTransferred: number;
}

interface MintTokenResponse {
  tokenId: string;
  totalSupply: number;
  timestamp: number;
}

export interface MintTokenRequest {
  tokenId: string;
  tokenOwnerMasterWalletId: string;
  amount: number;
}

export interface TransferTokensRequest {
  tokenId: string;
  sourceWalletId: string;
  destinationWalletId: string;
  transactionType: string;
  amount: number;
  longitude: string;
  latitude: string;
}

export interface WalletGraphRequest {
  tokenId: string;
  walletType: string;
  distributionWalletId: string;
  period?: number;
  startDate?: string;
  endDate?: string;
}

export interface WalletGraphResponse {
  credit: number;
  debit: number;
  graphDataCredit: {
    [key: number]: number;
  };
  graphDataDebit: {
    [key: number]: number;
  };
}

interface Wallet {
  walletId: string;
  clientId: string;
  userId: string;
  walletType: string;
  balances: [
    {
      name: string;
      symbol: string;
      balance: string;
    },
  ];
}

export interface Transaction {
  tokenId: string;
  tokenName: string;
  sourceWalletId: string;
  sourceWalletCategory: string;
  destinationWalletId: string;
  destinationWalletCategory: string;
  transactionType: string;
  entity: string;
  transactionHash: string;
  amount: number;
  credit: boolean;
  debit: boolean;
  createdAt: string;
  fundingType: string;
  timestamp: number;
}

interface TransactionSummaryReportResponse {
  totalAmount: number;
  totalInternalTransactionAmount: number;
  totalExternalTransactionAmount: number;
  totalExternalTrendingTransactionAmount: number;
}

export class WalletService {
  /**
   * @description
   * Get list of wallet token summary details.

   */

  static async getWalletTokenDetails(): Promise<WalletTokenDetailsResponse> {
    const response = await secureMainApi
      .get(`/token/cb/getTokenDetails`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get list of wallet balance and token summary details.
   GET
   */

  static async getWalletAndTokenDetails(): Promise<WalletAndTokenDetailsResponse> {
    const response = await secureMainApi
      .get(`/wallet/cb/getWalletAndTokenDetails`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get currency token summary
   */

  static async getTokenReportSummary(tokenId): Promise<TokenReportSummary> {
    const response = await secureMainApi
      .get(`/cb/tokenReport/${tokenId}`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get list of wallets accessible to a user.

   */

  static async getAllUserWallets(): Promise<Wallet[]> {
    const response = await secureMainApi
      .get(`/wallet/cb/getCBWallets`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get list of wallet transactions
   */

  static async getTransactionHistory(walletId, page, pageSize): Promise<Transaction[]> {
    const response = await secureMainApi
      .get(`/transactionHistory`, {
        params: {
          walletId,
          pageNo: page,
          pageSize,
        },
      })
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get all transactions history
   */
  static async getAllCBTransactionHistory(transactionType, page, pageSize): Promise<Transaction[]> {
    const response = await secureMainApi
      .get(`/cb/getTransactionHistory`, {
        params: {
          transactionType,
          pageNo: page,
          pageSize,
        },
      })
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description GET
   * Get transaction summary report
   */
  static async getTransactionSummary(): Promise<TransactionSummaryReportResponse> {
    const response = await secureMainApi
      .get(`/cb/getTransactionSummaryReport`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Get list of wallets for the central banks institutions.
   */

  static async getAllInstitutionWallets(): Promise<Wallet[]> {
    const response = await secureMainApi
      .get(`/wallet/cb/getAllIntegratorWallets`)
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * Mint new tokens.
   */

  static async mintTokens(data: MintTokenRequest): Promise<MintTokenResponse> {
    const { tokenId, tokenOwnerMasterWalletId, amount } = data;
    const response = await secureMainApi
      .post(`/token/cb/mintToken`, {
        tokenId,
        tokenOwnerMasterWalletId,
        amount,
      })
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        // throw Error(err.response);
      });
    return response;
  }

  /**
   * @description
   * transfer currency from one wallet to another.
   */

  static async transferTokens(data: TransferTokensRequest): Promise<MintTokenResponse> {
    const { tokenId, destinationWalletId, sourceWalletId, transactionType, amount, longitude, latitude } = data;

    const response = await secureMainApi.post(`/transfer`, {
      tokenId,
      destinationWalletId,
      sourceWalletId,
      transactionType,
      amount,
      longitude,
      latitude,
    });

    return response.data;
  }

  /**
   * @description
   * Get wallet chart data.
   */

  static async getWalletBalanceChartData(request: WalletGraphRequest): Promise<WalletGraphResponse> {
    const response = await secureMainApi.post(`/cb/graphData`, request);
    return response.data;
  }
}
