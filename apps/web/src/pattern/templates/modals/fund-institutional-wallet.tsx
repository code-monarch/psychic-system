"use client";
import React, { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  Button,
  IconButton,
  VisuallyHidden,
} from "@/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../organisms/modal-card";
import WalletCard from "@/pattern/organisms/cards/wallet-card";
import InstitutionalWalletsModal from "./institutional-wallets-modal";

const styles = {
  radioGroupItem: `relative bg-white w-[330px] h-[236px] border border-borderColor shadow-lg rounded-lg cursor-pointer z-50`,
  radioGroupIndicator: `absolute top-4 right-4 flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#000] data-[state=checked]:border data-[state=checked]:border-semanticGreen after:content-[''] after:block after:w-[7.5px] after:h-[7.5px] after:rounded-[50%] after:bg-semanticGreen z-50`,
};

const FundInstitutionalWalletModal = () => {
  // Determines whether modal is open
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines which wallet is chosen
  const [wallet, setWallet] = useState<string>("");

  return (
    <>
      <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
        <AlertDialogueTrigger>
          <IconButton variant='transparent' lefticon={<PlusIcon />}>
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
                title='Select a Institutional Wallet Type'
                description='Pick the type of institutional wallet you are funding'
                closeModal={() => setIsOpen()}
                className='!w-[1118px]'
              >
                <div className='w-full space-y-[52px]'>
                  <RadioGroup.Root
                    className='w-full flex items-center justify-between'
                    aria-label='Select Wallet'
                    value={wallet}
                    onValueChange={setWallet}
                  >
                    {/* Reserve Wallet */}
                    <RadioGroup.Item
                      className={styles.radioGroupItem}
                      value='reserve'
                      id='reserve-wallet'
                    >
                      <WalletCard
                        title='Reserve Wallet'
                        description='The reserve wallet holds all major balances that would be made available the FSP. It shows the FSP major fund.'
                        htmlFor='reserve-wallet'
                      />
                      <RadioGroup.Indicator
                        className={styles.radioGroupIndicator}
                      />
                    </RadioGroup.Item>
                    {/* Reserve Wallet End */}

                    {/* Wholesale Wallet */}
                    <RadioGroup.Item
                      className={styles.radioGroupItem}
                      value='wholesale'
                      id='wholesale-wallet'
                    >
                      <WalletCard
                        title='Wholesale Wallet'
                        description='The wholesale wallet holds balances that FSPs use to conduct transactions with other FSPs. This is their wholesale wallet.'
                        htmlFor='wholesale-wallet'
                      />
                      <RadioGroup.Indicator
                        className={styles.radioGroupIndicator}
                      />
                    </RadioGroup.Item>
                    {/* Wholesale Wallet End */}

                    {/* Retail Wallet */}
                    <RadioGroup.Item
                      className={styles.radioGroupItem}
                      value='retail'
                      id='retail-wallet'
                    >
                      <WalletCard
                        title='Retail Wallet'
                        description='The retail wallet holds balances FSPs would use to conduct transactions with end-users on their platforms.'
                        htmlFor='retail-wallet'
                      />
                      <RadioGroup.Indicator
                        className={styles.radioGroupIndicator}
                      />
                    </RadioGroup.Item>
                    {/* Retail Wallet End */}
                  </RadioGroup.Root>

                  {/* Action Button */}
                  {/* Institutional Wallets Modal */}
                  <VisuallyHidden visible={wallet !== "" ? true : false}>
                    <InstitutionalWalletsModal walletType={wallet} />
                  </VisuallyHidden>
                  {/* Institutional Wallets Modal End */}

                  <VisuallyHidden visible={wallet === "" ? true : false}>
                    <Button size='lg' className='!w-[127px]' disabled={true}>
                      Send Fund
                    </Button>
                  </VisuallyHidden>
                  {/* Action Button End */}
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

export default FundInstitutionalWalletModal;
