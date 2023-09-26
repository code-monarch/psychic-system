"use client";
import React, { FC } from "react";
import SelectDropDown from "@/pattern/common/organisms/select-dropdown";
import { Badge, SelectIcon } from "@emtech/ui";

interface IProps {
  totalRequests: string | number; // Number of Total Requests
  walletType: "Reserve" | "Wholesale" | "Retail"; // Determine the wallet type
  setWalletType: any; // sets wallet type
  wallets: any; // Wallet Filters
}

const RequestsTopSection: FC<IProps> = ({
  totalRequests,
  walletType,
  setWalletType,
  wallets,
}) => {
  return (
    <div className='w-full flex items-center justify-between'>
      {/* Total Requests */}
      <div className='flex items-center gap-x-[8px]'>
        <Badge
          variant='primary'
          size='xs'
          rounded='lg'
          className='!min-w-[61px] !w-fit !h-[25px] !bg-[#E8EDFF] !text-[#174CFF] !font-sans !font-[800] !border-none'
        >
          {totalRequests}
        </Badge>
        <p className='font-sans font-[500] text-base text-primaryText'>
          Total Requests
        </p>
      </div>
      {/* Total Requests End */}

      <div className='flex items-center gap-x-[16px]'>
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
        {/* Select End */}
      </div>
    </div>
  );
};

export default RequestsTopSection;
