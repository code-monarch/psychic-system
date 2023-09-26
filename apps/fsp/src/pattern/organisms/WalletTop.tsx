import React from "react";
import WalletType from "../transactions/organism/wallet-type";
import RequestButton from "../atoms/RequestButton";
import PlusIcon from "../atoms/icons/PlusIcon";
import { useGlobalContext } from "../../../context";
import CreateEnduserButton from "../atoms/CreateEnduserButton";
import SelectWalletType from "../wallet/molecules/select-wallet-type";

const WalletTop = () => {
  const { walletType } = useGlobalContext();
  return (
    <div className='flex justify-between items-center bg-white mb-4'>
      <SelectWalletType />
      {walletType === "institutional" ? (
        <RequestButton className='text-xs'>
          <PlusIcon /> Request Wallet
        </RequestButton>
      ) : walletType === "end-user" ? (
        <CreateEnduserButton />
      ) : (
        ""
      )}
      {/* <RequestButton className="text-xs">
        <PlusIcon /> Request Wallet
      </RequestButton> */}
    </div>
  );
};

export default WalletTop;
