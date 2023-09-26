import React, { FC } from "react";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import { Button, Portal } from "@emtech/ui";
import Image from "next/image";
import mintSuccessfulIcon from "@/public/mint-successful.png";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface IMintSuccessfulModalProps {
  amount: string;
  wallet: string;
  closeModal: any;
  isOpen: boolean;
  closeMintModal?: () => void;
}

const MintSuccessfulModal: FC<IMintSuccessfulModalProps> = ({
  amount,
  wallet,
  isOpen,
  closeModal,
  closeMintModal,
}) => {
  return (
    <Portal isOpen={isOpen} onOpenChange={closeModal}>
      <ModalCard title='' closeModal={() => closeModal()}>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[297px] flex flex-col items-center gap-y-10'>
            <div>
              <Image
                width={232}
                height={186}
                src={mintSuccessfulIcon}
                alt='Mint successful Icon'
              />
            </div>
            <h2 className='text-4xl font-sans font-black'>Congratulations</h2>
            <p className='text-sm text-center'>
              You have minted{" "}
              <span className='text-primaryText font-extrabold'>{amount}</span>{" "}
              to your{" "}
              <span className='text-secondaryText font-extrabold'>
                {wallet}&nbsp;Wallet
              </span>
              . Now you can easily distribute tokens to other wallets.
            </p>
            <Button
              className='!flex !items-center gap-x-1'
              onClick={() => {
                closeMintModal();
                closeModal();
              }}
            >
              <span>Go to Currency Management</span>
              <ChevronRightIcon fill='#FFF' width={16} height={16} />
            </Button>
          </div>
        </div>
      </ModalCard>
    </Portal>
  );
};

export default MintSuccessfulModal;
