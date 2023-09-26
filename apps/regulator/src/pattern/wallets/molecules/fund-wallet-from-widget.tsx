import React, { FC } from "react";
import { TOKEN_SYMBOL } from "@/lib/constants/index.constants";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import { VisuallyHidden } from "@emtech/ui";

interface IProps {
  // Determines which wallet funds should be traferred from
  sourceWallet: "Master" | "Distribution";

  // Determines the available balance on the transfer wallet
  balance: string;
}

const FundWalletFromWidget: FC<IProps> = ({ sourceWallet, balance }) => {
    const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });

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
            <div className='inner_circle !uppercase text-primaryText font-[800]'>
              {sourceWallet?.charAt(0)}W
            </div>
          </div>
          {/* abbrv End */}

          <p className='text-inputPlaceholder'>{sourceWallet} Wallet</p>
        </div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className='space-y-[30px]'>
        {/* Label */}
        <h3 className='text-sm text-inputPlaceholder text-right font-[500]'>
          Available Balance in {`${currencySymbol}`}:
        </h3>
        {/* Label End */}
        <h4 className='text-inputPlaceholder text-[24px] text-right uppercase font-sans font-[800]'>
          <VisuallyHidden visible={balance !== undefined && balance !== ""}>
            {formatAmountWithDecimals(balance!)}
          </VisuallyHidden>
          <VisuallyHidden visible={balance === undefined || balance === ""}>
            <span>0</span>
          </VisuallyHidden>
        </h4>
      </div>
      {/* Right End */}
    </div>
  );
};

export default FundWalletFromWidget;
