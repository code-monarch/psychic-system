import { secureMainApi } from '../lib/apis';

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

export interface WalletAndTokenDetailsResponse {
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

export interface WalletSummaryResponse {
  notInCirculation: number;
  inCirculation: number;
  id: string;
  supply: number;
  name: string;
  symbol: string;
  wallets: Wallet[];
  decimals: number;
  currencyCode: string;
}

export interface Token {
  decimals: number;
  name: string;
  symbol: string;
  id?: string;
  supply: number;
}

interface TokenReportSummary {
  id: string;
  symbol: string;
  decimals: number;
  totals: {
    minted: number;
    burned: number;
    transferred: number;
    distributed: number;
  };
}

interface MintOrBurnTokenResponse {
  tokenId: string;
  totalSupply: number;
  timestamp: number;
}

export interface MintOrBurnTokenRequest {
  tokenId: string;
  amount: number;
}

export interface TransferTokensRequest {
  tokenId: string;
  sourceWalletId: string;
  destinationWalletId: string;
  transactionType: string;
  amount: number;
  longitude?: string;
  latitude?: string;
}

export interface WalletGraphRequest {
  tokenId: string;
  data: {
    walletId: string;
    numDays?: number;
    startDate?: string;
    endDate?: string;
  };
}

export interface DashboardGraphRequest {
  tokenId: string;
  data: {
    transactionType?: string;
    numDays?: number;
    startDate?: string;
    endDate?: string;
  };
}

export interface WalletGraphResponse {
  credit: number;
  debit: number;
  creditData: {
    [key: number]: number;
  };
  debitData: {
    [key: number]: number;
  };
}

export interface DashboardGraphResponse {
  graphData: {
    [key: number]: number;
  };
}

interface Wallet {
  id: string;
  clientId: string;
  owner?: string;
  userId: string;
  category: string;
  balances: [
    {
      amount: number;
      token: Token;
    },
  ];
}

export interface Transaction {
  token: Token;
  id: string;
  wallet: string;
  type: string;
  entity: string;
  hash: string;
  amount: number;
  entry: string;
  status: string;
  fundingType: string;
  createdAt: string;
}

interface TransactionSummaryReportResponse {
  totals: {
    amount: number;
    internalAmount: number;
    externalAmount: number;
    volume: number;
  };
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
   * Get currency tokens
   */

  static async getTokens(): Promise<Token[]> {
    const response = await secureMainApi
      .get(`/tokens`, {
        params: {
          list: 'managed',
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
   * Get wallet summary
   */

  static async getWalletSummary(tokenId: string): Promise<WalletSummaryResponse> {
    const response = await secureMainApi
      .get(`/tokens/${tokenId}/wallets-summary`)
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
      .get(`/tokens/${tokenId}/extended`)
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
      .get(`/transactions`, {
        params: {
          walletId,
          offset: page,
          limit: pageSize,
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
      .get(`/transactions`, {
        params: {
          type: transactionType,
          offset: page,
          limit: pageSize,
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
  static async getTransactionSummary(tokenId: string, start?: string): Promise<TransactionSummaryReportResponse> {
    const response = await secureMainApi
      .get(`/tokens/${tokenId}/transactions-summary`, {
        params: {
          start,
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
   * Get list of wallets for the central banks institutions.
   */

  static async getAllInstitutionWallets(): Promise<Wallet[]> {
    const response = await secureMainApi
      .get(`/wallets`, {
        params: {
          category: 'Institutional',
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
   * Mint new tokens.
   */

  static async mintTokens(data: MintOrBurnTokenRequest): Promise<MintOrBurnTokenResponse> {
    const { tokenId, amount } = data;
    const response = await secureMainApi.post(`/tokens/${tokenId}/mint`, {
      amount,
    });

    return response.data;
  }

  /**
   * @description
   * Burn tokens.
   */

  static async burnTokens(data: MintOrBurnTokenRequest): Promise<MintOrBurnTokenResponse> {
    const { tokenId, amount } = data;
    const response = await secureMainApi.post(`/tokens/${tokenId}/burn`, {
      amount,
    });

    return response.data;
  }

  /**
   * @description
   * transfer currency from one wallet to another.
   */

  static async transferTokens(data: TransferTokensRequest): Promise<MintOrBurnTokenResponse> {
    const { tokenId, destinationWalletId, sourceWalletId, transactionType, amount, longitude, latitude } = data;

    const response = await secureMainApi.post(`/transfers`, {
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
    const response = await secureMainApi.get(`/tokens/${request.tokenId}/transactions-timeseries/`, {
      params: request.data,
    });
    return response.data;
  }

  static async getDashboardBalanceChartData(request: DashboardGraphRequest): Promise<DashboardGraphResponse> {
    const response = await secureMainApi.post(`/cb/dashGraphData`, request);
    return response.data;
  }

  static async getTrendedChartData(request: any): Promise<WalletGraphResponse> {
    const response = await secureMainApi.get(`/tokens/${request.tokenId}/transactions-timeseries/`, {
      params: request.data,
    });
    return response.data;
  }
}
