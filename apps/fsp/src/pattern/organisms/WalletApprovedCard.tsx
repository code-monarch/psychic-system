"use client";
import React from "react";
import WalletIcon from "../atoms/icons/WalletIcon";
import MoreIcon from "../atoms/icons/MoreIcon";
import * as Separator from "@radix-ui/react-separator";
import ArrowRightIcon from "../atoms/icons/ArrowRightIcon";
import { useRouter } from "next/navigation";
import NewWalletOptions from "../molecules/NewWalletOptions";
import { useGlobalContext } from "../../../context";

const newWallet = {
  // status: "pending",
  status: "approved",
  "wallet-name": "GoshyRex",
  "wallet-id": "0.0.1239400",
  "approval-date": "20-12-2023",
  "wallet-type": "Reserve",
  balance: "₦140,000,000,000",
};

const WalletApprovedCard = () => {
  const router = useRouter();
  const { tab } = useGlobalContext();
  return (
    <div className="bg-white border border-[#174cff33] text-xs w-[330px] p-4 rounded-lg">
      <div className="flex justify-between items-center font-medium">
        <div className="flex gap-4">
          <div className="bg-gradient-to-r from-[#0d2a8c] to-[#2376fa] rounded-full h-10 w-10 flex justify-center items-center">
            <WalletIcon />
          </div>
          <div className="">
            <h5 className="font-bold">
              {newWallet.status === "pending"
                ? "******"
                : newWallet["wallet-name"]}
            </h5>
            <p className="text-[#8499b1]">
              Wallet ID:{" "}
              {newWallet.status === "pending"
                ? "******"
                : newWallet["wallet-id"]}
            </p>
          </div>
        </div>
        <div className="text-[#8499b1]">
          {newWallet.status === "approved" && <NewWalletOptions />}
          {newWallet.status === "pending" && <MoreIcon />}
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
              newWallet.status === "pending"
                ? "bg-[#f9f4ec] text-[#c0933e]"
                : "bg-[#ecfaf0] text-[#3fcc6a]"
            }  rounded-full py-1 px-2`}
          >
            {newWallet.status === "pending" ? "Pending" : "Approved"}
          </p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-[#8499b1] font-medium">Approval Date</p>
          <p className="">
            {newWallet.status === "pending"
              ? "----------"
              : newWallet["approval-date"]}
          </p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-[#8499b1] font-medium">Wallet Type:</p>
          <p className="">
            {tab[0]}
            <span className="lowercase">{tab.slice(1)}</span>
          </p>
        </div>
      </div>

      <div className="font-semibold">
        <div className="bg-gradient-to-r from-[#3fcc6a] to-[#174cff] rounded text-white py-1 px-2 inline-block">
          {tab} WALLET BALANCE
        </div>
        <p className="text-3xl my-2">
          {newWallet.status === "pending" ? "******" : newWallet.balance}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <button
          className={`text-black disabled:cursor-not-allowed self-end`}
          onClick={() => router.push(`/wallet/${tab.toLowerCase()}/id`)}
        >
          <ArrowRightIcon width="24" height="24" color="#8499b1" />
        </button>
      </div>
    </div>
  );
};

export default WalletApprovedCard;
