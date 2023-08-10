import React, { FC } from "react";
import WalletTopHeaderDetails from "../wallets/wallet-top-header-details";
import TransferToMasterWalletModal from "@/pattern/templates/modals/transfer-to-master-wallet";
import FundInstitutionalWalletModal from "@/pattern/templates/modals/fund-institutional-wallet";

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
      <WalletTopHeaderDetails
        walletType={walletType ?? "Distribution"}
        id={id ?? "0.0.3065441"}
        balance={balance ?? "₦140,000,000,000,000.00"}
      />

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
