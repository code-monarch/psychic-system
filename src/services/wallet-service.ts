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
  timestamp: number;
}

interface UserWalletsResponse {
  userId: string;
  wallets: Wallet[];
}

export class WalletService {
  /**
   * @description
   * Get list of wallet token summary details.

   */

  static async getWalletTokenDetails(): Promise<WalletTokenDetailsResponse> {
    const response = await secureMainApi
      .get(`/token/details`)
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
      .get(`/tokenReport/${tokenId}`)
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

  static async getAllUserWallets(): Promise<UserWalletsResponse> {
    const response = await secureMainApi
      .get(`/wallet/all`)
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

  static async getTransactionHistory(walletId): Promise<Transaction[]> {
    const response = await secureMainApi
      .get(`/transactionHistory/${walletId}`)
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
      .get(`/wallet/institution`)
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
      .post(`/token/mint`, {
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

    const response = await secureMainApi.post(`/transfer/`, {
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
}
