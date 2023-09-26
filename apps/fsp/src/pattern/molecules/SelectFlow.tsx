import React, { useState } from "react";
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

const SelectFlow = () => {
  const [select, setSelect] = useState("inflow");
  return (
    <div className="flex gap-4 items-center">
      <p className="font-semibold">Flow</p>
      <div>
        <Select value={select} defaultValue="" onValueChange={setSelect}>
          <SelectTrigger className="border rounded-md p-2 text-[#8499b1]">
            <SelectValue value={select} placeholder={select} />
            <SelectIcon />
          </SelectTrigger>

          <SelectContent className="text-sm">
            <SelectScrollUp />
            <SelectViewport className="font-semibold">
              <SelectItem
                value="inflow"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Inflow</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="outflow"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Outflow</SelectItemText>
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

export default SelectFlow;
