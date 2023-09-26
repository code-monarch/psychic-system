"use client";
import React, { FC } from "react";
import { IconButton, Portal } from "@emtech/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import WalletCard from "@/pattern/common/organisms/cards/wallet-card";
import RequestFormRenderModal from "../../templates/request-form-modal";
import { useToggle } from "@emtech/utils";

const styles = {
  radioGroupItem: `relative bg-white w-[330px] h-[236px] border border-borderColor shadow-lg rounded-lg cursor-pointer z-50`,
  radioGroupIndicator: `absolute top-4 right-4 flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#000] data-[state=checked]:border data-[state=checked]:border-semanticGreen after:content-[''] after:block after:w-[7.5px] after:h-[7.5px] after:rounded-[50%] after:bg-semanticGreen z-50`,
};

interface IProps {
  isOpen: boolean;
  closeModal: any;
  wallet: string;
  setWallet: any; // Determine which institutional wallet is chosen
}

const SelectRequestWalletTypeModal: FC<IProps> = ({
  isOpen,
  closeModal,
  wallet,
  setWallet,
}) => {
  const [requestFormModalIsOpen, toggleRequestFormModal] = useToggle(false);
  return (
    <Portal
      isOpen={isOpen}
      onOpenChange={closeModal}
      className='!flex !items-center !justify-center'
    >
      <ModalCard
        title='Select a Wallet Type'
        description='Pick the type of institutional wallet you are making a request for.'
        closeModal={() => closeModal()}
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
                description='The reserve wallet holds all major balances that would be made available to you, as a Financial Service Provider, by the Regulator.'
                htmlFor='reserve-wallet'
              />
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
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
                description='The wholesale wallet holds balances that would be made available by you from the Reserve wallet.'
                htmlFor='wholesale-wallet'
              />
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
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
                description='The retail wallet holds balances that would be made available by you from the Reserve wallet.'
                htmlFor='retail-wallet'
              />
              <RadioGroup.Indicator className={styles.radioGroupIndicator} />
            </RadioGroup.Item>
            {/* Retail Wallet End */}
          </RadioGroup.Root>

          <IconButton
            size='lg'
            className='!w-[127px]'
            variant={wallet !== "" ? "primary" : "disabled"}
            onClick={() => toggleRequestFormModal()}
          >
            Send Request
          </IconButton>
          {/* Action Button End */}
        </div>
      </ModalCard>

      {/* Request Form Render Widget */}
      <RequestFormRenderModal
        isOpen={requestFormModalIsOpen}
        closeModal={toggleRequestFormModal}
      />
    </Portal>
  );
};

export default SelectRequestWalletTypeModal;
