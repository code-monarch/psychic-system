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
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context";

const EnduserWalletBalance = () => {
    const router = useRouter();
    const { setWalletType } = useGlobalContext();
  const [val, setVal] = useState<string>("");

  useEffect(() => {
    if (val === "see all wallets") {
    //   router.push("/wallet");
      setWalletType("end-user");
      router.push("/wallet");
    //   setVal("");
    }
  }, [val]);

  return (
    <div className="flex justify-center items-center gap-4">
      <p className="text-sm font-semibold">
        BALANCE: <span className="text-2xl">&#8358;210,000.00</span>
      </p>

      <div>
        <RequestButton className="text-sm">Fund Wallet</RequestButton>
      </div>

      <Select value={val} defaultValue="" onValueChange={setVal}>
        <SelectTrigger className="py-[6px] px-4 border border-[#8499b1] rounded flex justify-center items-center">
          {/* <SelectValue value="Transactions" placeholder="Transactions" /> */}
          <MoreIconH />
        </SelectTrigger>

        <SelectContent className="text-sm">
          <SelectScrollUp />
          <SelectViewport>
            <SelectItem value="see all wallets">
              <SelectItemText>See All Wallets</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
            <SelectItem value="suspend wallet">
              <SelectItemText>Suspend Wallet</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          </SelectViewport>
          <SelectScrollDown />
        </SelectContent>
      </Select>
    </div>
  );
};

export default EnduserWalletBalance;
