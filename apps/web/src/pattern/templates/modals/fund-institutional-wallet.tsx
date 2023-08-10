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
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useToggle } from "@emtech/utils";
import ModalCard from "../../organisms/modal-card";
import WalletCard from "@/pattern/organisms/wallets/wallet-card";

const FundInstitutionalWalletModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
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
              className='w-[1118px]'
            >
              <div className='space-y-[52px]'>
                <div className='w-full flex items-center justify-between'>
                  <RadioGroup.Root
                    className='w-full flex items-center justify-between'
                    aria-label='Select Wallet'
                  >
                    <div className='flex items-center'>
                      {/* Reserve Wallet */}
                      <RadioGroup.Item
                        className='bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default'
                        value='default'
                        id='reserve-wallet'
                      >
                        <WalletCard
                          title='Reserve Wallet'
                          description='The reserve wallet holds all major balances that would be made available the FSP. It shows the FSP major fund.'
                          htmlFor='reserve-wallet'
                        />
                      </RadioGroup.Item>
                      {/* Reserve Wallet End */}

                      {/* Wholesale Wallet */}
                      <RadioGroup.Item
                        className='bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default'
                        value='default'
                        id='wholesale-wallet'
                      >
                        <WalletCard
                          title='Wholesale Wallet'
                          description='The wholesale wallet holds balances that FSPs use to conduct transactions with other FSPs. This is their wholesale wallet.'
                          htmlFor='wholesale-wallet'
                        />
                      </RadioGroup.Item>
                      {/* Wholesale Wallet End */}

                      {/* Retail Wallet */}
                      <RadioGroup.Item
                        className='bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default'
                        value='default'
                        id='retail-wallet'
                      >
                        <WalletCard
                          title='Retail Wallet'
                          description='The retail wallet holds balances FSPs would use to conduct transactions with end-users on their platforms.'
                          htmlFor='retail-wallet'
                        />
                      </RadioGroup.Item>
                      {/* Retail Wallet End */}
                    </div>
                  </RadioGroup.Root>
                </div>
                <IconButton size='lg' className='!w-[127px]' disabled>
                  Send Fund
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

export default FundInstitutionalWalletModal;
