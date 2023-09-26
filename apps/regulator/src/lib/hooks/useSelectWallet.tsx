"use client";
import { useCallback, useState } from "react";
import { ISelectWalletOutputProps, ISelectWalletProps } from "../types";

/**
 * @description Custom hook that helps us store a list of selected wallets from an array of wallets
 * @returns handleSelectWallet, selectedWallets
 */
export const useSelectWallet = (): ISelectWalletOutputProps => {
  const [selectedWallets, setSelectedWallets] = useState<ISelectWalletProps[]>(
    []
  );

  /**
   *
   * @description
   * Stores wallet selected from an array of available wallets
   * @param wallet
   */
  const handleSelectWallet = useCallback(
    (wallet: ISelectWalletProps) => {
      const notAlreadySelected = selectedWallets.filter((w) => {
        wallet.walletId !== w.walletId;
      });
      if (notAlreadySelected) {
        setSelectedWallets([...selectedWallets, wallet]);
      }
    },
    [selectedWallets]
  );
  return { handleSelectWallet, selectedWallets };
};
