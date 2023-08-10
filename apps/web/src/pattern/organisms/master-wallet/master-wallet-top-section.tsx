import React, { FC } from "react";
import WalletTopHeaderDetails from "../wallets/wallet-top-header-details";
import FundDistributionWalletModal from "@/pattern/templates/modals/fund-distribution-wallet-modal";

interface IProps {
  walletType: "master"| "Distiribution" | "Institutional";
  id: string;
  balance: string;
}

const MasterWalletTopSection: FC<IProps> = ({ walletType, id, balance }) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <WalletTopHeaderDetails
        walletType={walletType ?? 'master'}
        id={id ?? '0.0.3065441'}
        balance={balance ?? '₦140,000,000,000,000.00'}
      />
      {/* Fund Distribution Wallet Modal */}
      <FundDistributionWalletModal />
    </div>
  );
};

export default MasterWalletTopSection;
