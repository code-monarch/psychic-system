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
import { useGlobalContext } from "../../../context";

const SelectPeriod = () => {
  const [select, setSelect] = useState<string>("daily");
  const { setPeriod } = useGlobalContext();
  setPeriod(select);
  return (
    <div className="flex gap-4 items-center">
      <p className="font-semibold">Period</p>
      <div>
        <Select value={select} defaultValue="" onValueChange={setSelect}>
          <SelectTrigger className="border rounded-md p-2 text-[#8499b1] flex gap-10">
            <SelectValue value="Transactions" placeholder="Transactions" />
            <SelectIcon />
          </SelectTrigger>

          <SelectContent className="text-sm">
            <SelectScrollUp />
            <SelectViewport className="font-semibold">
              <SelectItem
                value="daily"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Daily</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="weekly"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Weekly</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="monthly"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Monthly</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="quarterly"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Quarterly</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="yearly"
                className=" data-[state=checked]:text-[#174cff]"
              >
                <SelectItemText>Yearly</SelectItemText>
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

export default SelectPeriod;
