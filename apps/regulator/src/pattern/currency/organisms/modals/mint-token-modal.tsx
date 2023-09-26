"use client";
import React, { FC, useState } from "react";
import MintDestination from "@/pattern/currency/molecules/mint-destination-widget";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  Button,
  IconButton,
  PlusIconButton,
  VisuallyHidden,
  toastError,
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import { useMintTokenMutation } from "@/redux/services/tokens/mint-token.api-slice";
import { toastSuccess } from "@/pattern/common/atoms/toast";
import MintSuccessfulModal from "./mint-successful-modal";
import InsertAmount from "@/pattern/common/molecules/insert-amount-widget";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";

interface IMintTokenModalProps {
  // determines size of modal trigger
  btnSize?: "xs" | "sm" | "md" | "lg" | "2xl";
}

const MintTokenModal: FC<IMintTokenModalProps> = ({ btnSize }) => {
  // Determines MintTokenModal visibility
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines MintTokenModal visibility
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useToggle(false);

  // Determines value of token to be minted
  const [mintAmount, setMintAmount] = useState<string>();

  // API query that for wallet summary
  // We will get the miint tokenId from the response
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  // Mint Token Mutation
  const [
    mint, // This is the mutation trigger
    { isLoading }, // This is the destructured mutation result
  ] = useMintTokenMutation();

  // Function that calls the mint Token mutation
  const mintToken = () => {
    mint({
      amount: mintAmount,
      tokenId: `${walletSummary?.tokenId}`,
    })
      .unwrap()
      .then(() => {
        setIsSuccessModalOpen();
        toastSuccess("Token minted successfully");
      })
      .catch((err) => {
        toastError(`${err} FAILED`);
        console.log("Errorrr: ", err);
      });
  };

  return (
    <>
      <VisuallyHidden visible={isSuccessModalOpen}>
        <MintSuccessfulModal
          amount={mintAmount as string}
          isOpen={isSuccessModalOpen}
          closeModal={setIsSuccessModalOpen}
          wallet='Master'
          closeMintModal={setIsOpen}
        />
      </VisuallyHidden>
      <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
        <AlertDialogueTrigger>
          <PlusIconButton
            size={btnSize ?? "md"}
            fullwidth
          >
            Mint Token
          </PlusIconButton>
        </AlertDialogueTrigger>

        {/* Alert Dialogue Portal */}
        <AlertDialoguePortal>
          <AlertDialogueOverlay
            className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
            isopen={isOpen}
          >
            <AlertDialogueContent>
              <ModalCard title='Mint Token' closeModal={() => setIsOpen()}>
                <div className='space-y-[52px]'>
                  <div className='space-y-[32px]'>
                    {/* Insert Mint amount */}
                    <InsertAmount
                      type='mint'
                      amount={mintAmount}
                      setAmount={setMintAmount}
                    />
                    {/* Insert Mint amount End */}
                    <MintDestination
                      wallet='Master'
                      balance={walletSummary?.masterWalletBalance}
                    />
                  </div>

                  {/* Form Actions */}
                  <div className='w-full flex items-cente justify-between'>
                    {/* Mint Token Button */}
                    <IconButton
                      size='xl'
                      className='!w-[270px]'
                      onClick={() => mintToken()}
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      Mint Token
                    </IconButton>
                    {/* Mint token Button End */}
                    <Button
                      variant='blue_outline'
                      size='xl'
                      className='!w-[270px]'
                      onClick={() => setIsOpen()}
                    >
                      Cancel
                    </Button>
                  </div>
                  {/* Form Actions End */}
                </div>
              </ModalCard>
            </AlertDialogueContent>
          </AlertDialogueOverlay>
        </AlertDialoguePortal>
        {/* Alert Dialogue Portal End */}
      </AlertDialogue>
    </>
  );
};

export default MintTokenModal;
