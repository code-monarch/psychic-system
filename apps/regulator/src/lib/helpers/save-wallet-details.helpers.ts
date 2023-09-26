import { IWalletsSummaryResponse } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import {
  CURRENCY_DECIMALS,
  DISTRIBUTION_WALLET_ID,
  INSTITUTIONAL_WALLET_ID,
  MASTER_WALLET_ID,
  TOKEN_ID,
  TOKEN_SYMBOL,
  WALLET_ID,
} from "../constants/index.constants";
import LocalStore from "./session-manager.helpers";

type Currency = {
  tokenSymbol: string;
  currencyDecimals: number;
};

export type WalletDetailsType = Partial<
  Pick<
    IWalletsSummaryResponse,
    | "walletId"
    | "tokenId"
    | "masterWalletId"
    | "distributionWalletId"
    | "institutionalWalletId"
  > &
    Currency
>;


/**
 * 
 * @description
 * Helper function that saves regulator wallet details to local storage
 * @param WalletDetailsType wallet params
 */
export const saveWalletDetails = ({
  walletId,
  tokenId,
  tokenSymbol,
  currencyDecimals,
  masterWalletId,
  distributionWalletId,
  institutionalWalletId,
}: WalletDetailsType) => {
  // Save Token Symbol
  LocalStore.setItem({
    key: TOKEN_SYMBOL,
    value: tokenSymbol,
  });

  // Save Currency decimals
  LocalStore.setItem({
    key: CURRENCY_DECIMALS,
    value: String(currencyDecimals),
  });

  // Save Token ID
  LocalStore.setItem({
    key: TOKEN_ID,
    value: tokenId,
  });
  // Save wallet ID
  LocalStore.setItem({
    key: WALLET_ID,
    value: walletId,
  });
  // Save master wallet ID
  LocalStore.setItem({
    key: MASTER_WALLET_ID,
    value: masterWalletId,
  });
  // Save distribution wallet ID
  LocalStore.setItem({
    key: DISTRIBUTION_WALLET_ID,
    value: distributionWalletId,
  });
  // Save institutional wallet ID
  LocalStore.setItem({
    key: INSTITUTIONAL_WALLET_ID,
    value: institutionalWalletId,
  });
};
