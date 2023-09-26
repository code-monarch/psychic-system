"use client";
import React, { FC, ReactElement } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@emtech/ui";
import Hidden from "../common/atoms/hidden";

type List = {
  name: string;
  value: string;
};

interface IProps {
  list: List[];
  trigger: ReactElement;
  value: any;
  setValue: any;
  hideSelectValue?: boolean;
}

const SelectDropDown: FC<IProps> = ({
  list,
  value,
  setValue,
  trigger,
  hideSelectValue,
}) => {
  return (
    <Select value={value} onValueChange={setValue}>
      {/* Trigger */}
      <SelectTrigger className='!bg-transparent !min-w-[146px] !w-fit !h-[37px] !flex !items-center !justify-between !p-[8px] !rounded-[5px]'>
        <Hidden visible={hideSelectValue ? false : true}>
          <SelectValue
            value={value}
            className='!font-sans !font-[300] text-sm text-primaryBlack'
          >
            {value ?? "Request"}
          </SelectValue>
        </Hidden>
        {trigger}
      </SelectTrigger>
      {/* Trigger End */}

      <SelectContent className='!bg-surfaceColor !min-w-[188px] !w-fit !max-h-[141px] !overflow-y-auto'>
        <SelectViewport>
          {list?.map((wallet, idx) => (
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
  );
};

export default SelectDropDown;
