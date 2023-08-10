"use client";
import React from "react";
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
import FundWalletFrom from "../../organisms/fund-wallet/fund-wallet-from";
import FundWalletTo from "../../organisms/fund-wallet/fund-wallet-to";

const FundDistributionWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

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
                  <FundWalletFrom />
                  <FundWalletTo />
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
