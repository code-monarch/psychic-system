"use client";
import { FC } from "react";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

interface IProps {
  abbrv: string; // Wallet initials E.g "DW" as in Distribution Wallet
  walletType: "Distribution Wallet" | "Institutional Wallet" | "Master Wallet"; // Type of Wallet E.g "Distribution Wallet", "Institutional Wallet", "Master Wallet"
  amount: string; // Wallet Amount E.g N120B
}

const WalletTokensWidget: FC<IProps> = ({ abbrv, walletType, amount }) => {
  return (
    <div className='flex items-center gap-[16px]'>
      <div>
        <div className='outer_circle'>
          <div className='inner_circle text-primaryText font-[800]'>
            {abbrv}
          </div>
        </div>
      </div>
      <div className=''>
        <h5 className='text-inputPlaceholder text-base'>{walletType}</h5>
        <h4 className='text-primaryText text-base font-sans font-[800]'>
          {formatAmountWithDecimals(amount!)}
        </h4>
      </div>
    </div>
  );
};

export default WalletTokensWidget;
