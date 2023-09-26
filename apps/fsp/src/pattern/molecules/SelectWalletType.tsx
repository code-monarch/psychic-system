"use client";
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

const SelectWalletType = () => {
  const [selected, setSelected] = useState("wholesale wallet");

  return (
    <div className="bg-white text-sm">
      <Select value={selected} defaultValue="" onValueChange={setSelected}>
        <SelectTrigger className="rounded-lg bg-[#f0f5fd] p-3 text-[#8499b1]">
          <SelectValue
            value={selected}
            placeholder={selected}
            aria-label={selected}
          />
          <SelectIcon />
        </SelectTrigger>

        <SelectContent className="text-sm z-[2000]">
          <SelectScrollUp />
          <SelectViewport>
            <SelectItem value="wholesale wallet">
              <SelectItemText>Wholesale Wallet</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
            <SelectItem value="retail wallet">
              <SelectItemText>Retail Wallet</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          </SelectViewport>
          <SelectScrollDown />
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWalletType;
