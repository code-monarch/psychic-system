"use client";
import React, { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  IconButton,
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../../common/organisms/cards/modal-card";
import FundWalletFrom from "../../molecules/fund-wallet-from-widget";
import FundWalletTo from "../../molecules/fund-wallet-to-widget";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";

const TransferToMasterWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines transfer amount
  const [amount, setAmount] = useState<string>("");

  // API query for wallet summary
  // We will get distribution wallet balance and WalletIds from the query response
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      {/* Trigger */}
      <AlertDialogueTrigger>
        <IconButton variant='primary' lefticon={<PlusIcon color='#fff' />}>
          Transfer to Master Wallet
        </IconButton>
      </AlertDialogueTrigger>
      {/* Trigger End */}

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay
          className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
          isopen={isOpen}
        >
          <AlertDialogueContent>
            <ModalCard
              title='Transfer to Master Wallet'
              closeModal={() => setIsOpen()}
            >
              <div className='space-y-[52px]'>
                <div className='space-y-[32px]'>
                  <FundWalletFrom
                    balance={walletSummary?.masterWalletBalance}
                    sourceWallet='Distribution'
                  />
                  <FundWalletTo
                    amount={amount}
                    setAmount={setAmount}
                    destinationWallet='Master'
                  />
                </div>
                <IconButton size='xl' fullwidth>
                  Transfer to Master Wallet
                </IconButton>
              </div>
            </ModalCard>
          </AlertDialogueContent>
        </AlertDialogueOverlay>
      </AlertDialoguePortal>
      {/* Alert Dialogue Portal End */}
    </AlertDialogue>
  );
};

export default TransferToMasterWalletModal;
