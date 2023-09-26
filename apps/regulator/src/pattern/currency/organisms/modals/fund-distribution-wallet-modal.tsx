"use client";
import React, { FC, useState } from "react";
import { IconButton, Portal } from "@emtech/ui";
import ModalCard from "../../../common/organisms/cards/modal-card";
import FundWalletFrom from "../../../wallets/molecules/fund-wallet-from-widget";
import FundWalletTo from "../../../wallets/molecules/fund-wallet-to-widget";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import { useTransferTokenMutation } from "@/redux/services/transfers/transfer-token.api-slice";
import { useToggle } from "@emtech/utils";
import { toastError, toastSuccess } from "@/pattern/common/atoms/toast";
import DistributeTokenSuccessModal from "./distribute-token-success-modal";

interface IProps {
  closeModal: any;
  isOpen: boolean;
}

const FundDistributionWalletModal: FC<IProps> = ({ closeModal, isOpen }) => {
  // Determines fund amount
  const [amount, setAmount] = useState<string>("");

  // Determines whether success modal is visible
  const [successModal, toggleSuccessModal] = useToggle(false);

  // API query for wallet summary
  // We will get distribution wallet balance and WalletIds from the query response
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  const [
    transferToken, // mutation trigger
    { isLoading }, // This are destructured mutation result
  ] = useTransferTokenMutation();

  // fund distribution wallet
  const fundDistributionWallet = () => {
    transferToken({
      tokenId: `${walletSummary?.tokenId}`,
      sourceWalletId: `${walletSummary?.masterWalletId}`,
      destinationWalletId: `${walletSummary?.distributionWalletId}`,
      amount: `${amount}`,
    })
      .unwrap()
      .then(() => {
        toggleSuccessModal();
        toastSuccess("Distribute token successful");
      })
      .catch((err) => {
        toastError(`${err} FAILED`);
        console.log("Errorrr: ", err);
      });
  };

  return (
    <>
      <Portal isOpen={isOpen} onOpenChange={closeModal}>
        <ModalCard
          title='Fund Distribution Wallet'
          closeModal={() => closeModal()}
        >
          <div className='space-y-[52px]'>
            <div className='space-y-[32px]'>
              <FundWalletFrom
                sourceWallet='Master'
                balance={walletSummary?.masterWalletBalance}
              />
              <FundWalletTo
                amount={amount}
                setAmount={setAmount}
                destinationWallet='Distribution'
              />
            </div>
            <IconButton
              size='xl'
              onClick={() => fundDistributionWallet()}
              loading={isLoading}
              disabled={isLoading}
              fullwidth
            >
              Send Fund to Distribution Wallet
            </IconButton>
          </div>
        </ModalCard>
      </Portal>
      <DistributeTokenSuccessModal
        amount={amount}
        destinationWallet='Distribution'
        isOpen={successModal}
        closeModal={toggleSuccessModal}
        closeDistributeModal={closeModal}
      />
    </>
  );
};

export default FundDistributionWalletModal;
