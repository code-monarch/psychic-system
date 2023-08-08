import { joinClasses } from "@emtech/utils";
import React, { FC } from "react";

interface IProps {
  type?: "from" | "to";
  wallet?: "Master" | "Distribution";
}

const InsertMintAmount: FC<IProps> = ({}) => {
  return (
    <div className='w-[568px] h-[127px] flex items-top justify-between p-[18px] border border-[rgba(132, 153, 177, 0.4)] rounded-[8px]'>
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-[14px] text-inputPlaceholder font-[500]'>
          Mint Amount
        </h3>
        {/* Label End */}
        
        {/* Insert Wallet Amount */}
        <div className='w-[150px] flex items-center justify-end'>
          <span className='text-primaryText text-[24px] text-right uppercase font-sans font-[800]'>
            ₦
          </span>
          <input
            type='number'
            placeholder='1,023,90|'
            className={joinClasses(
              "no-increment w-full text-primaryText text-[24px] text-right uppercase font-sans font-[800]",
              "outline-none border-none focus:outline-none focus:ring-none focus:border-none pl-[2px]"
            )}
          />
        </div>
        {/* Insert Wallet Amount End */}
      </div>
    </div>
  );
};

export default InsertMintAmount;
