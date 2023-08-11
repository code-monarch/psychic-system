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
} from "@/ui";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../organisms/modal-card";
import FundWalletFrom from "../../organisms/wallets/fund-wallet-from";
import FundWalletTo from "../../organisms/wallets/fund-wallet-to";

const FundDistributionWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines transfer amount
  const [amount, setAmount] = useState<string>("");

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <IconButton variant='primary' lefticon={<PlusIcon />}>
          Fund Distribution Wallet
        </IconButton>
      </AlertDialogueTrigger>

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay
          className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
          isopen={isOpen}
        >
          <AlertDialogueContent>
            <ModalCard
              title='Fund Distribution Wallet'
              closeModal={() => setIsOpen()}
            >
              <div className='space-y-[52px]'>
                <div className='space-y-[32px]'>
                  <FundWalletFrom
                    transferWallet="Master"
                    balance='₦140,000,000,000,000'
                  />
                  <FundWalletTo
                    amount={amount}
                    setAmount={setAmount}
                    receiverWallet='Distribution'
                  />
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

export default FundDistributionWalletModal;
