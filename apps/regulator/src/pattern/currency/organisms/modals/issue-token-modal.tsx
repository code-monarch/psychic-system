"use client";
import React, { useState } from "react";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  IconButton,
  PlusIconButton,
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../../common/organisms/cards/modal-card";
import InsertAmountWidget from "../../../common/molecules/insert-amount-widget";
import MintDestinationWidget from "../../molecules/mint-destination-widget";

const IssueTokenModal = () => {
  // Determines whether Modal is visible
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines amount of tokens to be issued
  const [amount, setAmount] = useState<string>();

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <PlusIconButton size='sm' fullwidth>
          Issue Token
        </PlusIconButton>
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
                  <InsertAmountWidget
                    type='mint'
                    amount={amount}
                    setAmount={setAmount}
                  />
                  <MintDestinationWidget wallet='Master' balance='0' />
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

export default IssueTokenModal;
