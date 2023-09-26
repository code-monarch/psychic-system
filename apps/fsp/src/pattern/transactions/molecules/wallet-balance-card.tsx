import React, { FC } from "react";
import WalletBalanceCardDropdown from "../atoms/WalletBalanceCardDropdown";
import ViewBalanceButton from "../../molecules/ViewBalanceButton";

interface Props {
  walletType: string;
  balance: string;
}
const WalletBalanceCard: FC<Props> = ({ walletType, balance }) => {
  return (
    <div className=' flex justify-between gap-2 w-60 border border-[#174cff33] rounded-lg py-2 px-3 bg-white'>
      <div className='w-[80%'>
        <div className='flex flex-col justify-between gap-2 mb-4'>
          <h5 className='font-semibold text-sm'>{walletType}</h5>
          <div className='text-4xl font-semibold'>{balance}</div>
        </div>

        <ViewBalanceButton />
      </div>

      {/* <WalletBalanceCardDropdown /> */}
    </div>
  );
};

export default WalletBalanceCard;
