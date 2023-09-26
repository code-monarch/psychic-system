"use client";
import React, { useState } from "react";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  Button,
  PlusIconButton,
} from "@emtech/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useToggle } from "@emtech/utils";
import ModalCard from "../../../common/organisms/cards/modal-card";
import WalletCard from "@/pattern/common/organisms/cards/wallet-card";
import InstitutionalWalletsModal from "../../../wallets/organisms/modals/pick-institutional-wallet-modal";
import Hidden from "@/pattern/common/atoms/hidden";

const styles = {
  radioGroupItem: `relative bg-white w-[330px] h-[236px] border border-borderColor shadow-lg rounded-lg cursor-pointer z-50`,
  radioGroupIndicator: `absolute top-4 right-4 flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#000] data-[state=checked]:border data-[state=checked]:border-semanticGreen after:content-[''] after:block after:w-[7.5px] after:h-[7.5px] after:rounded-[50%] after:bg-semanticGreen z-50`,
};

const FundInstitutionalWalletModal = () => {
  // Determines whether modal is fund-institution-wallet modal visible
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines which institutional wallet is chosen
  const [wallet, setWallet] = useState<string>("");

  return (
    <>
      <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
        <AlertDialogueTrigger>
          <PlusIconButton variant='blue_outline' iconColor='#174CFF' size='md'>
            Fund Institutional Wallet
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
                  <Hidden visible={wallet !== "" ? true : false}>
                    <InstitutionalWalletsModal walletType={wallet} />
                  </Hidden>
                  {/* Institutional Wallets Modal End */}

                  <Hidden visible={wallet === "" ? true : false}>
                    <Button size='lg' className='!w-[127px]' disabled={true}>
                      Send Fund
                    </Button>
                  </Hidden>
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
