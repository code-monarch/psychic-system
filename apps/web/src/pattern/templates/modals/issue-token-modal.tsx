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
} from "@/ui";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../organisms/modal-card";
import InsertMintAmount from "../../organisms/insert-mint-amount";
import MintDestination from "../../organisms/mint-destination";

const IssueTokenModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <IconButton size='sm' lefticon={<PlusIcon />} fullwidth>
          Issue Token
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
                  <InsertMintAmount />
                  <MintDestination />
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
