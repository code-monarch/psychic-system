"use client";
import React from "react";
import WalletIcon from "../atoms/icons/WalletIcon";
import MoreIcon from "../atoms/icons/MoreIcon";
import * as Separator from "@radix-ui/react-separator";
import ArrowRightIcon from "../atoms/icons/ArrowRightIcon";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context";
import EnduserWalletOptions from "../molecules/EnduserWalletOptions";

const newWallet = {
  // status: "pending",
  status: "active",
  "wallet-name": "GoshyRex",
  "wallet-id": "0.0.1239400",
  "approval-date": "20-12-2023",
  "wallet-type": "Reserve",
  balance: "₦140,000,000,000",
};

const EnduserWalletCard = () => {
  const router = useRouter();
  const { walletType } = useGlobalContext();
  return (
    <div className="bg-white border border-[#174cff33] text-xs w-[330px] p-4 rounded-lg mt-8">
      <div className="flex justify-between items-center font-medium">
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-r from-[#0d2a8c] to-[#2376fa] rounded-full h-10 w-10 flex justify-center items-center">
            <WalletIcon />
          </div>
          <div className="">
            <p className="text-[#1e252d]">
              Wallet ID: 0.0.2938476
            </p>
          </div>
        </div>
        <div className="text-[#8499b1]">
          {newWallet.status === "active" && <EnduserWalletOptions />}
          {newWallet.status === "inactive" && <MoreIcon />}
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
            className={`${
              newWallet.status === "inactive"
                ? "bg-[#f9f4ec] text-[#c0933e]"
                : "bg-[#ecfaf0] text-[#3fcc6a]"
            }  rounded-full py-1 px-2`}
          >
            {newWallet.status === "inactive" ? "Inactive" : "Active"}
          </p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-[#8499b1] font-medium">Date Created:</p>
          <p className="">
            20-12-12023
          </p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-[#8499b1] font-medium">KYC Level:</p>
          <p className="">
            Enhanced
          </p>
        </div>
      </div>

      <div className="font-semibold">
        <div className="bg-gradient-to-r from-[#3fcc6a] to-[#174cff] rounded text-white py-1 px-2 inline-block">
          END-USER WALLET BALANCE
        </div>
        <p className="text-3xl my-2">
            ₦210,000
        </p>
      </div>

      <div className="flex flex-col items-center">
        <button
          className={`text-black disabled:cursor-not-allowed self-end`}
          onClick={() => router.push(`/wallet/${walletType.toLowerCase()}/id`)}
        >
          <ArrowRightIcon width="24" height="24" color="#8499b1" />
        </button>
      </div>
    </div>
  );
};

export default EnduserWalletCard;
