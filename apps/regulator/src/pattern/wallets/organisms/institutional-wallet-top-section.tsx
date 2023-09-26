import React, { FC, useState } from "react";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";
import { DropdownButtonIcon, SearchIcon } from "@emtech/icons";
import { Select, SelectContent, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectViewport } from "@emtech/ui";

const wallets = [
  {
    name: "Overview",
    value: "overview",
  },
  {
    name: "Reserve Wallets",
    value: "reserve",
  },
  {
    name: "Wholesale Wallets",
    value: "wholesale",
  },
  {
    name: "Retail Wallets",
    value: "retail",
  },
];

interface IProps {
  balance: string;
}

const InstitutionalWalletTopSection: FC<IProps> = ({ balance }) => {
  const [walletType, setWalletType] = useState<
    "overview" | "reserve" | "wholesale" | "retail"
  >("overview");
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex items-center'>
        <h3 className='text-2xl font-black pr-6 border-r border-r-inputPlaceholder'>
          Institutional Wallet
        </h3>
        {/* Balance */}
        <div className='flex items-center gap-x-2 pl-6'>
          <div className='gradient-text uppercase font-[900] text-sm'>
            TOTAL BALANCE:
          </div>
          <div className='text-black text-[24px] uppercase font-sans font-[800]'>
            {formatAmountWithDecimals(balance!)}
          </div>
        </div>
      </div>

      {/* Transfer to master wallet and Fund Institutional Wallet */}
      <div className='flex items-center gap-4'>
        <SearchIcon />
        <Select value={walletType} onValueChange={setWalletType}>
          {/* Trigger */}
          <SelectTrigger className='!bg-transparent !min-w-[50px] !w-fit !min-h-[37px] '>
            <DropdownButtonIcon />
          </SelectTrigger>
          {/* Trigger End */}

          <SelectContent className='!bg-surfaceColor !min-w-[188px] !w-fit !max-h-[141px] !overflow-y-auto'>
            <SelectViewport>
              {wallets?.map((wallet, idx) => (
                <SelectItem
                  value={wallet.value}
                  key={idx}
                  className='flex items-center justify-between !whitespace-nowrap !pl-[16px] !pr-[29px] border-b-[1px] border-b-[#C6D0DB]/30'
                >
                  <SelectItemText>{wallet?.name}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              ))}
            </SelectViewport>
          </SelectContent>
        </Select>
      </div>
      {/* Transfer to master wallet and Fund Institutional Wallet End */}
    </div>
  );
};

export default InstitutionalWalletTopSection;
