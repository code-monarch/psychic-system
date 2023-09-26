import React from "react";
import WalletIcon2 from "../atoms/icons/WalletIcon2";
import FundWalletModal from "./FundWalletModal";

const FundNewWallet = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 w-[360px]">
      <div className="flex flex-col items-center justify-center">
        <WalletIcon2 />

        <p className="text-sm text-center">
          Fund your Wholesale or Retail wallet to record your wallet transactions
        </p>
      </div>
      <div className="w-full"><FundWalletModal /></div>
      
    </div>
  );
};

export default FundNewWallet;
