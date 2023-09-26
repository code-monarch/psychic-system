import React from "react";
import WalletIcon2 from "../atoms/icons/WalletIcon2";

const NoEnduserWallet = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 w-[360px]">
      <div className="flex flex-col items-center gap-3">
        <WalletIcon2 />

        <p className="text-sm text-center">
          There aren&apos;t any End-user wallets here. Once an End-user wallet is
          created, it registers here.
        </p>
      </div>
    </div>
  );
};

export default NoEnduserWallet;
