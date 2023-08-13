import React, { FC } from "react";
import WalletTopHeaderDetails from "../wallets/wallet-top-header-details";
import FundDistributionWalletModal from "@/pattern/templates/modals/fund-distribution-wallet-modal";

interface IProps {
  walletType: "master"| "Distiribution" | "Institutional";
  id: string;
  balance: string | number;
}

const MasterWalletTopSection: FC<IProps> = ({ walletType, id, balance }) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div>
        <WalletTopHeaderDetails
          walletType={walletType ?? "master"}
          id={id ?? ("0.0.3065441" as string)}
          balance={balance ?? "₦000,000,000,000.00"}
        />
      </div>
      {/* Fund Distribution Wallet Modal */}
      <div>
        <FundDistributionWalletModal />
      </div>
    </div>
  );
};

export default MasterWalletTopSection;
