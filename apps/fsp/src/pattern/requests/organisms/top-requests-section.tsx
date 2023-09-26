"use client";
import React, { FC } from "react";
import { SelectIcon } from "@emtech/ui";
import SelectDropDown from "@/pattern/organisms/select-dropdown";

interface IProps {
  walletType: "Reserve" | "Wholesale" | "Retail"; // Determine the wallet type
  setWalletType: any; // sets wallet type
  wallets: any; // Wallet Filters
}

const TopRequestsSection: FC<IProps> = ({
  walletType,
  setWalletType,
  wallets,
}) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='w-fit flex items-center gap-x-[16px]'>
        <p className='font-sans font-[500] text-sm text-primaryText'>Wallet:</p>
        {/* Select Wallet Dropdown */}
        <div className='bg-surfaceColor'>
          <SelectDropDown
            trigger={<SelectIcon />}
            list={wallets}
            setValue={setWalletType}
            value={walletType}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRequestsSection;
