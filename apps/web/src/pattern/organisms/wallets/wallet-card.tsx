"use client";
import React, { FC } from "react";
import WalletIcon from "@/pattern/atoms/icons/wallet-icon";
import { RadioIndicator } from "@emtech/ui";

interface IProps {
  title: string;
  description: string;
  htmlFor: string;
}

const WalletCard: FC<IProps> = ({ title, description, htmlFor }) => {
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='relative w-[330px] h-[236px] space-y-[24px] px-4 py-8 border border-borderColor rounded-lg'
    >
      <div className='flex flex-col items-center gap-y-[16px]'>
        <WalletIcon />
        <h3 className='text-primaryText text-2xl font-sans font-extrabold'>
          {title}
        </h3>
      </div>
      <p className='text-primaryText text-center text-sm font-sans font-medium'>
        {description}
      </p>

      {/* Absolute radio button */}
      <div className='absolute top-4 right-4'>
        <RadioIndicator />
      </div>
    </label>
  );
};

export default WalletCard;
