"use client";
import React, { FC, ReactElement, useState } from "react";
import { PlusIconButton } from "@emtech/ui";
import { WalletIcon } from "@emtech/icons";
import { useToggle } from "@emtech/utils";
import SelectRequestWalletTypeModal from "./modals/select-request-wallet-type-modal";
import Hidden from "@/pattern/common/atoms/hidden";

interface IProps {
  description: string;
  actionText: string; // Button that changes route to the create request form
  Icon?: ReactElement;
}

const MakeRequest: FC<IProps> = ({
  description,
  actionText,
  Icon,
}) => {
  //Determine whether Fund wallet modal is visible
  const [isOpen, toggleFundWalletModal] = useToggle(false);

  const [wallet, setWallet] = useState<string>("");

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[413px] flex flex-col items-center gap-y-[52px]'>
        <div className='w-full flex flex-col items-center gap-y-[16px]'>
          {/* Icon */}
          <span>
            {Icon ?? <WalletIcon width='90' height='90' />}
          </span>
          {/* Icon End */}

          {/* Deescription */}
          <p className='w-full font-sans font-[500] text-base text-center text-primaryText leading-normal'>
            {description}
          </p>
          {/* Deescription End */}
        </div>

        {/* Action */}
        <PlusIconButton
          size='md'
          className='capitalize'
          onClick={() => toggleFundWalletModal()}
        >
          {actionText}
        </PlusIconButton>
        {/* Action End */}
      </div>
      {/* Show burn details modal when row table row is clicked */}
      <Hidden visible={isOpen ? true : false}>
        <SelectRequestWalletTypeModal
          isOpen={isOpen}
          closeModal={toggleFundWalletModal}
          wallet={wallet}
          setWallet={setWallet}
        />
      </Hidden>
    </div>
  );
};

export default MakeRequest;
