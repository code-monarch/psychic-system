import React, { FC } from "react";
import { joinClasses } from "@emtech/utils";

interface IProps {
  // Determines which wallet funds should be traferred from
  receiverWallet: "Master" | "Distribution";

  // Determines amount to be sent
  amount: string;

  // Updates amount when input value is changed
  setAmount: any;
}

const FundWalletTo: FC<IProps> = ({ amount, receiverWallet }) => {
  return (
    <div className='w-[568px] h-[127px] flex items-top justify-between p-[18px] border border-[rgba(132, 153, 177, 0.4)] rounded-[8px]'>
      {/* Left */}
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-base text-primaryText font-[800]'>To:</h3>
        {/* Label End */}
        <div className='bg-surfaceColor h-[56px] flex items-center gap-[8px] p-[8px] rounded-[8px] z-3'>
          {/* abbrv */}
          <div className='outer_circle'>
            <div className='inner_circle !uppercase text-primaryText font-[800]'>{receiverWallet?.charAt(0)}W</div>
          </div>
          {/* abbrv End */}
          <p className='text-inputPlaceholder'>{receiverWallet} Wallet</p>
        </div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className='space-y-[30px]'>
        {/* Label */}
        <h3 className='text-sm text-inputPlaceholder text-right font-[500]'>
          Insert Fund Amount
        </h3>
        {/* Label End */}

        {/* Fund Amount Input */}
        <div className='w-[150px] flex items-center justify-end'>
          <span className='text-primaryText text-[24px] text-right uppercase font-sans font-[800]'>
            ₦
          </span>
          <input
            type='number'
            placeholder='1,023,90|'
            value={amount}
            autoFocus
            className={joinClasses(
              "no-increment w-full text-primaryText text-[24px] text-right uppercase font-sans font-[800]",
              "outline-none border-none focus:outline-none focus:ring-none focus:border-none pl-[2px]"
            )}
          />
        </div>
        {/* Fund Amount Input End */}
      </div>
      {/* Right End */}
    </div>
  );
};

export default FundWalletTo;
