"use client";
import React from "react";
import WalletIcon from "../atoms/icons/WalletIcon";
import * as Separator from "@radix-ui/react-separator";
// import { useRouter } from "next/navigation";

const RetailWalletCard = () => {
//   const router = useRouter();
  return (
    <div className="bg-white borde border-[#174cff33] text-xs w-[250px] p- rounded-lg">
      <div className="font-medium">
        <div className="flex gap-4">
          <div className="bg-gradient-to-r from-[#0d2a8c] to-[#2376fa] rounded-full h-10 w-10 flex justify-center items-center">
            <WalletIcon />
          </div>
          <div className="">
            <h5 className="font-bold text-left">
                GoshyRex
            </h5>
            <p className="text-[#8499b1]">
              Wallet ID: 0.05368829
            </p>
          </div>
        </div>
      </div>

      <div>
        <Separator.Root
          className="bg-[#8499b1] h-[0.5px] opacity-50 w-full my-[15px]"
          decorative
          orientation="horizontal"
        />
      </div>

      <div className="font-semibold">
        <div className="flex justify-between items-center my-4">
          <p className="text-[#8499b1] font-medium">Status:</p>
          <p
            className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full py-1 px-2"
          >
            Approved
          </p>
        </div>
      </div>

      <div className="font-semibold text-left">
        <div className="bg-gradient-to-r from-[#3fcc6a] to-[#174cff] rounded text-white py-1 px-2 inline-block">
          RETAIL WALLET BALANCE
        </div>
        <p className="text-2xl my-2">
            &#8358;210,000,000
        </p>
      </div>
    </div>
  );
};

export default RetailWalletCard;
