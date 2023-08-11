"use client";
import React, { FC } from "react";
import WalletIcon from "@/pattern/atoms/icons/wallet-icon";

interface IProps {
  title: string;
  description: string;
  htmlFor: string;
}

const WalletCard: FC<IProps> = ({ title, description, htmlFor }) => {
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='absolute inset-0 w-full h-full space-y-[24px] pt-8 cursor-pointer -z-10'
    >
      <div className='flex flex-col items-center gap-y-[16px]'>
        <WalletIcon />
        <h3 className='text-primaryText text-2xl font-sans font-extrabold'>
          {title}
        </h3>
      </div>
      <div className='max-w-[298px] text-primaryText text-center text-sm font-sans font-medium !mx-auto'>
        {description}
      </div>
    </label>
  );
};

export default WalletCard;
