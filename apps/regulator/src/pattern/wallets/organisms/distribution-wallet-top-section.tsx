import React, { FC } from "react";
import WalletTopHeaderDetails from "./wallet-top-header-details";
import TransferToMasterWalletModal from "@/pattern/wallets/organisms/modals/transfer-to-master-wallet-modal";
import FundInstitutionalWalletModal from "@/pattern/currency/organisms/modals/fund-institutional-wallet-modal";

interface IProps {
  walletType: "master" | "Distiribution" | "Institutional";
  id: string;
  balance: string;
}

const DistributionWalletTopSection: FC<IProps> = ({
  walletType,
  id,
  balance,
}) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div>
        <WalletTopHeaderDetails
          walletType={walletType ?? "Distribution"}
          id={id}
          balance={balance}
        />
      </div>

      {/* Transfer to master wallet and Fund Institutional Wallet */}
      <div className='flex items-center gap-4'>
        <TransferToMasterWalletModal />
        <FundInstitutionalWalletModal />
      </div>
      {/* Transfer to master wallet and Fund Institutional Wallet End */}
    </div>
  );
};

export default DistributionWalletTopSection;
