import React, { FC } from "react";
import { joinClasses } from "@emtech/utils";
import { VisuallyHidden } from "@emtech/ui";
import { TOKEN_SYMBOL } from "@/lib/constants/index.constants";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

interface IProps {
  // whether "burn" | "mint"
  type?: "burn" | "mint";
  wallet: "Master" | "Distribution";
  balance: string;
}

const MintDestinationWidget: FC<IProps> = ({ wallet: walletType, type = "mint", balance }) => {
  const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });

  return (
    <div className='w-[568px] h-[127px] flex items-top justify-between p-[18px] border border-[rgba(132, 153, 177, 0.4)] rounded-[8px]'>
      {/* Left */}
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-base text-primaryText font-[800] capitalize'>
          <VisuallyHidden visible={type === "burn"}>
            {walletType}&nbsp;Wallet
          </VisuallyHidden>
          <VisuallyHidden visible={type === "mint"}>
            Mint Destination:
          </VisuallyHidden>
        </h3>
        {/* Label End */}
        <div className='bg-surfaceColor h-[56px] flex items-center gap-[8px] p-[8px] rounded-[8px] z-3'>
          {/* abbrv */}
          <div className='outer_circle'>
            <div className='inner_circle text-primaryText font-[800]'>
              {walletType?.charAt(0)}W
            </div>
          </div>
          {/* abbrv End */}
          <p className='text-inputPlaceholder capitalize'>
            {walletType}&nbsp;wallet
          </p>
        </div>
      </div>
      {/* Left End */}

      {/* Available balance */}
      <div className='space-y-[30px]'>
        {/* Label */}
        <h3 className='text-sm text-inputPlaceholder text-right font-[500]'>
          Available Balance in {`${currencySymbol}`}
        </h3>
        {/* Label End */}
        <div className='w-[150px] flex items-center justify-end'>
          <p
            className={joinClasses(
              "w-full text-inputPlaceholder text-[24px] text-left uppercase font-sans font-[800]",
              " pl-[2px]"
            )}
          >
            {formatAmountWithDecimals(balance!)}
          </p>
        </div>
      </div>
      {/* Available balance End */}
    </div>
  );
};

export default MintDestinationWidget;
