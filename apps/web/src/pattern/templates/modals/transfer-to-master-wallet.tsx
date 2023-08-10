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
import ModalCard from "../../organisms/modal-card";
import FundWalletFrom from "../../organisms/wallets/fund-wallet-from";
import FundWalletTo from "../../organisms/wallets/fund-wallet-to";

const TransferToMasterWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines transfer amount
  const [amount, setAmount] = useState<string>("");

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      {/* Trigger */}
      <AlertDialogueTrigger>
        <IconButton variant='primary' lefticon={<PlusIcon />}>
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
                    balance='₦140,000,000,000,000'
                    transferWallet='Distribution'
                  />
                  <FundWalletTo amount={amount} setAmount={setAmount} receiverWallet="Master" />
                </div>
                <IconButton size='xl' fullwidth>
                  Send Fund to Distribution Wallet
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
