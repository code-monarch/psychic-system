"use client";
import React from "react";
import WalletIcon2 from "../atoms/icons/WalletIcon2";
import WalletRequestModal from "./WalletRequestModal";

interface Props {
  wallet: string;
}
const NoWallet: React.FC<Props> = ({ wallet }: Props) => {
  return (
    <div className="text-sm my-20 mx- flex flex-col items-center justify-center w-[30%]">
      <div className="">
        <WalletIcon2 />
      </div>
      <p className="text-center my-4">
        You haven&apos;t gotten any Institutional <span className="font-semibold">{wallet}</span> Wallets yet. Please
        make a request for one.
      </p>
      <div className="my-8">
        <WalletRequestModal />
      </div>
    </div>
  );
};

export default NoWallet;
