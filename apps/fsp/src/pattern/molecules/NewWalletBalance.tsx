import React, { useEffect, useState } from "react";
import RequestButton from "../atoms/RequestButton";
import MoreIconH from "../atoms/icons/MoreIconH";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
} from "@emtech/ui";
import CloseWalletModal from "../organisms/CloseWalletModal";

const NewWalletBalance = () => {
  const [val, setVal] = useState<string>("");
  const [showClose, setShowClose] = useState<boolean>(false);

  useEffect(() => {
    if (val === "close wallet") {
      setShowClose(true);
      setVal("");
    }
  }, [val]);

  return (
    <div className="flex justify-center items-center gap-4">
      <p className="text-sm font-semibold">
        BALANCE: <span className="text-2xl">&#8358;140,000.00</span>
      </p>

      <div>
        <RequestButton className="text-sm">Request Funding</RequestButton>
      </div>

      <Select value={val} defaultValue="" onValueChange={setVal}>
        <SelectTrigger className="py-[6px] px-4 border border-[#8499b1] rounded flex justify-center items-center">
          {/* <SelectValue value="Transactions" placeholder="Transactions" /> */}
          <MoreIconH />
        </SelectTrigger>

        <SelectContent className="text-sm">
          <SelectScrollUp />
          <SelectViewport>
            <SelectItem value="overview">
              <SelectItemText>Overview</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
            <SelectItem value="redeem funds">
              <SelectItemText>Redeem Funds</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
            <SelectItem value="close wallet">
              <SelectItemText>Close Wallet</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          </SelectViewport>
          <SelectScrollDown />
        </SelectContent>
      </Select>

      <div className="hidden">
        <CloseWalletModal isOpen={showClose} setIsOpen={setShowClose} />
      </div>
    </div>
  );
};

export default NewWalletBalance;
