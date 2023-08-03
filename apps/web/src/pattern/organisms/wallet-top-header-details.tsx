import React, { FC } from "react";
import { Hstack, Vstack } from "@emtech/ui";
import * as Separator from "@radix-ui/react-separator";

interface IProps {
  walletType: string;
  id: string;
  balance: string;
}

const WalletTopHeaderDetails: FC<IProps> = ({ walletType, id, balance }) => {
  return (
    <div className='flex items-center gap-[24px]'>
      {/* Wallet Id */}
      <Vstack gap='sm'>
        <div className='text-black text-[12px] uppercase font-sans font-[800]'>
          {walletType}&nbsp; wallet id
        </div>
        {/* Id */}
        <div className='text-black text-[24px] uppercase font-sans font-[800]'>
          {id}
        </div>
        {/* Id End */}
      </Vstack>
      {/* Wallet Id End */}

      <Separator.Root
        className='bg-red-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]'
        decorative
        orientation='vertical'
      />

      {/* Balance */}
      <Hstack gap='sm'>
        <div className='gradient-text uppercase font-[900] text-[14px]'>
          BALANCE:
        </div>
        {/* Balance */}
        <div className='text-black text-[24px] uppercase font-sans font-[800]'>
          {balance}
        </div>
        {/* Balance End */}
      </Hstack>
      {/* Balance End */}
    </div>
  );
};

export default WalletTopHeaderDetails;
