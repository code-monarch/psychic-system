"use client";
import React, { FC, useState } from "react";
import InsertAmount from "@/pattern/common/molecules/insert-amount-widget";
import MintDestination from "@/pattern/currency/molecules/mint-destination-widget";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import { BurnBtnIcon } from "@emtech/icons";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  Button,
  IconButton,
  toastError,
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import { toastSuccess } from "@/pattern/common/atoms/toast";
import MintSuccessfulModal from "./mint-successful-modal";
import { useBurnTokenMutation } from "@/redux/services/tokens/burn-token.api-slice";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import Hidden from "@/pattern/common/atoms/hidden";

interface IBurnTokenModalProps {
  // determines size of modal trigger
  btnSize?: "xs" | "sm" | "md" | "lg" | "2xl";
}

const BurnTokenModal: FC<IBurnTokenModalProps> = ({ btnSize }) => {
  // Determines BurnedTokenModal visibility
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines BurnedTokenModal visibility
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useToggle(false);

  // Determines value of token to be burned
  const [burnAmount, setBurnAmount] = useState<string>();

  // API query that for wallet summary
  // We will get the burn tokenId from the response
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  // Burn Token Mutation
  const [
    burn, // This is the mutation trigger
    { isLoading }, // This is the destructured mutation result
  ] = useBurnTokenMutation();

  // Function that calls the burn Token mutation
  const burnToken = () => {
    burn({
      amount: burnAmount,
      tokenId: `${walletSummary?.tokenId}`,
    })
      .unwrap()
      .then(() => {
        setIsSuccessModalOpen();
        toastSuccess("Tokens burned successfully");
      })
      .catch((err) => {
        toastError(`${err} FAILED`);
        console.log("Errorrr: ", err);
      });
  };

  return (
    <>
      <Hidden visible={isSuccessModalOpen}>
        <MintSuccessfulModal
          amount={burnAmount as string}
          closeModal={setIsSuccessModalOpen}
          isOpen={isSuccessModalOpen}
          wallet='Master'
        />
      </Hidden>
      <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
        <AlertDialogueTrigger>
          <IconButton
            size={btnSize ?? "md"}
            lefticon={<BurnBtnIcon color='#fff' />}
            fullwidth
          >
            Burn Token
          </IconButton>
        </AlertDialogueTrigger>

        {/* Alert Dialogue Portal */}
        <AlertDialoguePortal>
          <AlertDialogueOverlay
            className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
            isopen={isOpen}
          >
            <AlertDialogueContent>
              <ModalCard title='Burn Token' closeModal={() => setIsOpen()}>
                <div className='space-y-[52px]'>
                  <div className='space-y-[32px]'>
                    <InsertAmount
                      type='burn'
                      amount={burnAmount}
                      setAmount={setBurnAmount}
                    />
                    {/* Burn balance */}
                    <MintDestination
                      type='burn'
                      wallet='Master'
                      balance={walletSummary?.masterWalletBalance}
                    />
                  </div>

                  {/* Form Actions */}
                  <div className='w-full flex items-cente justify-between'>
                    <IconButton
                      size='xl'
                      className='!w-[270px]'
                      onClick={() => burnToken()}
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      Burn Token
                    </IconButton>
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

export default BurnTokenModal;
