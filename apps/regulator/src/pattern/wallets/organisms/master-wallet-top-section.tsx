import React, { FC } from "react";
import WalletTopHeaderDetails from "./wallet-top-header-details";
import FundDistributionWalletModal from "@/pattern/currency/organisms/modals/fund-distribution-wallet-modal";
import { IconButton, VisuallyHidden } from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import { PlusIcon } from "@emtech/icons";

interface IProps {
  walletType: "master" | "Distiribution" | "Institutional";
  id: string;
  balance: string;
}

const MasterWalletTopSection: FC<IProps> = ({
  walletType = "master",
  id,
  balance,
}) => {
  // Determines whether fund wallet modal is visible
  const [fundWalletModal, setFundWalletModal] = useToggle(false);

  return (
    <>
      <div className='w-full flex items-center justify-between'>
        <div>
          <WalletTopHeaderDetails
            walletType={walletType ?? "master"}
            id={id}
            balance={balance}
          />
        </div>
        <IconButton
          lefticon={<PlusIcon color='#fff' />}
          className='!h-[37px] !w-[235px]'
          onClick={() => setFundWalletModal()}
        >
          Fund Distribution Wallet
        </IconButton>
      </div>
      {/* Fund Distribution Wallet Modal */}
      <VisuallyHidden visible={fundWalletModal ? true : false}>
        <FundDistributionWalletModal
          closeModal={setFundWalletModal}
          isOpen={fundWalletModal}
        />
      </VisuallyHidden>
    </>
  );
};

export default MasterWalletTopSection;
