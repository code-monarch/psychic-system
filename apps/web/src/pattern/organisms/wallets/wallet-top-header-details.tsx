import React, { FC } from "react";
import { Vstack } from "@emtech/ui";

interface IProps {
  walletType: string;
  id: string;
  balance: string | number;
}

const WalletTopHeaderDetails: FC<IProps> = ({ walletType, id, balance }) => {
  return (
    <div className='w-full flex items-center justify-between gap-[24px]'>
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

      {/* Balance */}
      <div className='flex flex-col desktop:flex-row gap-y-2 desktop:gap-x-2'>
        <div className='gradient-text uppercase font-[900] text-[14px]'>
          BALANCE:
        </div>
        {/* Balance */}
        <div className='text-black text-[24px] uppercase font-sans font-[800]'>
          {balance}
        </div>
        {/* Balance End */}
      </div>
      {/* Balance End */}
    </div>
  );
};

export default WalletTopHeaderDetails;
