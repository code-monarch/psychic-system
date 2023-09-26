import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectScrollDown,
  SelectScrollUp,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@emtech/ui";
import { Separator } from "@radix-ui/react-separator";
import { WalletType } from "@/lib/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GlobalState, setWalletType } from "@/redux/features/global-state";

const walletType = ["Institutional", "End-user"];

const SelectWalletType = () => {
  const [wallet, setWallet] = useState<WalletType>("Institutional");

  const dispatch = useAppDispatch();

  // Store wallet type in redux store
  useEffect(() => {
    if (wallet) {
      dispatch(setWalletType(wallet));
    }
  }, [dispatch, wallet]);

  // Get value of wakketType from redux store
  const { walletType: walletTypeState } = useAppSelector(GlobalState);
  console.log("WALLET TYPE: ", walletTypeState);

  return (
    <div className='flex bg-transparent'>
      {/* Wallet Type */}
      <h4 className='text-2xl font-semibold capitalize'>{wallet}</h4>
      {/* Wallet Type End */}

      <div className='flex items-center'>
        <Separator
          className='bg-[#174cff33] w-px h-[40%] mx-[15px]'
          decorative
          orientation='vertical'
        />
      </div>

      {/* Wallet Select */}
      <div className='flex items-center gap-2'>
        <p className='text-base font-semibold'>Wallet Type</p>
        <Select value={wallet} onValueChange={setWallet}>
          <SelectTrigger className='border px-2 py-1 rounded-md text-[#8499b1] text-sm'>
            <SelectValue value='Wallet' placeholder='Wallet' />
            <SelectIcon />
          </SelectTrigger>

          <SelectContent>
            <SelectScrollUp />
            <SelectViewport>
              {walletType?.map((wallet, idx) => (
                <SelectItem
                  key={idx}
                  value={`${wallet}`}
                  className='text-sm hover:bg-[#f0f0f0]'
                >
                  <SelectItemText>{wallet}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              ))}
            </SelectViewport>
            <SelectScrollDown />
          </SelectContent>
        </Select>
      </div>
      {/* Wallet Select End */}
    </div>
  );
};

export default SelectWalletType;
