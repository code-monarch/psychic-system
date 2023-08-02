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

const FundDistributionWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <IconButton lefticon={<PlusIcon />}>
          Fund Distribution Wallet
        </IconButton>
      </AlertDialogueTrigger>

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay className='bg-[#27272B]/50' isopen={isOpen}>
          <AlertDialogueContent>
            <ModalCard
              title='Fund Distribution Wallet'
              closeModal={() => setIsOpen()}
            >
              <IconButton size="xl" fullwidth>
                Send Fund to Distribution Wallet
              </IconButton>
            </ModalCard>
          </AlertDialogueContent>
        </AlertDialogueOverlay>
      </AlertDialoguePortal>
      {/* Alert Dialogue Portal End */}
    </AlertDialogue>
  );
};

export default FundDistributionWalletModal;
