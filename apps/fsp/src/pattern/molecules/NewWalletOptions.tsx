import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  //   SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
  //   SelectIcon,
} from "@emtech/ui";
import MoreIcon from "../atoms/icons/MoreIcon";
import CbdcIcon from "../atoms/icons/CbdcIcon";
import WalletIcon from "../atoms/icons/WalletIcon";
import MoneyBagIcon from "../atoms/icons/MoneyBagIcon";
import RedeemFundsToRegulatorModal from "../organisms/RedeemFundsToRegulatorModal";

const NewWalletOptions = () => {
  const [select, setSelect] = useState("");
  const [open, setOpen] = useState(true);
  const [regulatorModal, setRegulatorModal] = useState<boolean>(false);

  useEffect(() => {
    if(select === "redeem funds to regulator") {
      setRegulatorModal(true);
    }
  }, [select])
  
  return (
    <div className="">
      <div>
        <Select
          value={select}
          open={open}
          onOpenChange={setOpen}
          defaultValue=""
          onValueChange={setSelect}
        >
          <SelectTrigger className="rounded-md p-2 text-[#8499b1]">
            {/* <SelectValue value={select} placeholder={select} /> */}
            {/* <SelectIcon /> */}
            <MoreIcon />
          </SelectTrigger>

          <SelectContent className="text-xs font-medium">
            <SelectScrollUp />
            <SelectViewport className="font-semibold">
              <SelectItem
                value="redeem funds to regulator"
                className="hover:bg-[#f8fafe]"
              >
                <CbdcIcon color="#1e252d" />
                {/* <RedeemFundsToRegulatorModal /> */}
                <SelectItemText>Redeem Funds to Regulator</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem value="close wallet" className="hover:bg-[#f8fafe]">
                <WalletIcon color="#1e252d" />
                <SelectItemText>Close Wallet</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
              <SelectItem
                value="request funding"
                className="hover:bg-[#f8fafe]"
              >
                <MoneyBagIcon />
                <SelectItemText>Request Funding</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            </SelectViewport>
            <SelectScrollDown />
          </SelectContent>
        </Select>
      </div>

      <div className="hidden">
        <RedeemFundsToRegulatorModal open={regulatorModal} setOpen={setRegulatorModal} />
      </div>
    </div>
  );
};

export default NewWalletOptions;
