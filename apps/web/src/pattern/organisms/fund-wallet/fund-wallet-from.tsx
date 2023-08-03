import React, { FC } from "react";

interface IProps {
  type?: "from" | "to";
  wallet?: "Master" | "Distribution";
}

const FundWalletFrom: FC<IProps> = ({}) => {
  return (
    <div className='w-[568px] h-[127px] flex items-top justify-between p-[18px] border border-[rgba(132, 153, 177, 0.4)] rounded-[8px]'>
      {/* Left */}
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-base text-primaryText font-[800]'>From:</h3>
        {/* Label End */}
        <div className='bg-surfaceColor h-[56px] flex items-center gap-[8px] p-[8px] rounded-[8px] z-3'>
          {/* abbrv */}
          <div className='outer_circle'>
            <div className='inner_circle text-primaryText font-[800]'>DW</div>
          </div>
          {/* abbrv End */}
          <p className='text-inputPlaceholder'>Master Wallet</p>
        </div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className='space-y-[30px]'>
        {/* Label */}
        <h3 className='text-sm text-inputPlaceholder text-right font-[500]'>
          Available Balance in NGN:
        </h3>
        {/* Label End */}
        <h4 className='text-inputPlaceholder text-[24px] text-right uppercase font-sans font-[800]'>
          ₦140,000,000,000,000
        </h4>
      </div>
      {/* Right End */}
    </div>
  );
};

export default FundWalletFrom;
