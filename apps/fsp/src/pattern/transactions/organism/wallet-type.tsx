import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
  SelectIcon,
} from "@emtech/ui";
import * as Separator from "@radix-ui/react-separator";
// import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../../context";

const WalletType = () => {
  const { setWalletType } = useGlobalContext();
  const [value, setValue] = useState("institutional");

  useEffect(() => {
    setWalletType(value);
  }, [value]);
  
  return (
    <div className='flex'>
      <h4 className='text-2xl font-semibold capitalize'>{value}</h4>

      <div className='flex items-center'>
        <Separator.Root
          className='bg-[#174cff33] w-px h-[40%] mx-[15px]'
          decorative
          orientation='vertical'
        />
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-base font-semibold'>Wallet Type</p>
        <Select
          value={value}
          defaultValue='Institutional'
          onValueChange={setValue}
        >
          <SelectTrigger className='border px-2 py-1 rounded-md text-[#8499b1] text-sm'>
            <SelectValue value='Wallet' placeholder='Wallet' />
            <SelectIcon />
          </SelectTrigger>

          <SelectContent>
            <SelectScrollUp />
            <SelectViewport>
              <SelectItem
                value='institutional'
                className='text-sm hover:bg-[#f0f0f0]'
              >
                <SelectItemText>Institutional</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value='end-user'
                className='text-sm hover:bg-[#f0f0f0] after:text-[#174cff]'
              >
                <SelectItemText>End-User</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            </SelectViewport>
            <SelectScrollDown />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default WalletType;
