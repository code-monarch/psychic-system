import React from "react";
import Tabs from "../organisms/Tabs";
import WalletTop from "../organisms/WalletTop";
import { useGlobalContext } from "../../../context";
import NoEnduserWallet from "../molecules/NoEnduserWallet";
import EnduserWalletView from "../organisms/EnduserWalletView";

const endUserWallet = {
  status: "created",
};

const WalletTemp = () => {
  const { walletType } = useGlobalContext();
  return (
    <div className="flex flex-col justify-between items-between min-h-[40vh]">
      <WalletTop />
      {walletType === "institutional" && <Tabs />}

      {(walletType === "end-user" && endUserWallet.status === "created") ? (
          <div className=""><EnduserWalletView /></div>
        ) : walletType === "end-user" ? (
          <div className="self-center"><NoEnduserWallet /></div>
        ) : (<div></div>)}
    </div>
  );
};

export default WalletTemp;
