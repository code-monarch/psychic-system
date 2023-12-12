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
  VisuallyHidden,
} from "@emtech/ui";
import { joinClasses } from "@emtech/utils";

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
  hideSelectValue = false,
}) => {
  return (
    <Select value={value} onValueChange={setValue}>
      {/* Trigger */}
      <SelectTrigger className='!bg-transparent !w-[175px] !h-[37px] !flex !items-center !justify-between !whitespace-nowrap !p-[8px] !border-[1px] border-inputBorder !rounded-[5px]'>
        <VisuallyHidden visible={hideSelectValue ? false : true}>
          <SelectValue className='!font-sans !font-[300] !text-sm !text-primaryBlack !whitespace-nowrap' />
        </VisuallyHidden>
        {trigger}
      </SelectTrigger>
      {/* Trigger End */}

      <SelectContent className='!bg-white w-[175px] !max-h-[401px] !overflow-y-auto'>
        <SelectViewport>
          {list?.map((item, idx) => (
            <SelectItem
              value={item.value}
              key={idx}
              className={joinClasses(
                "flex items-center justify-between !whitespace-nowrap !pl-[16px] !pr-[29px] border-b-[1px] border-b-[#C6D0DB]/30",
                "radix-state-checked:!bg-transparent radix-state-checked:!text-[#0067FC]"
              )}
            >
              <SelectItemText>{item?.name}</SelectItemText>
              <SelectItemIndicator className='!text-[#0067FC]' />
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Select>
  );
};

export default SelectDropDown;
