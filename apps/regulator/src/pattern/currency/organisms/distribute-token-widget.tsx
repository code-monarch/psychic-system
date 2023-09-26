import React from "react";
import { DistributeTokenIcon } from "@emtech/icons";
import FundDistributionWalletModal from "./modals/fund-distribution-wallet-modal";
import { PlusIconButton, VisuallyHidden } from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";

const DistributeTokenWidget = () => {
  // Determines whether distribute token modal is visible
  const [distributeTokenModal, setDistributeTokenModal] = useToggle(false);

  // API query for wallet summary
  // We will distribution wallet balance from the query response
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  return (
    <div className='w-full h-full flex items-center justify-center pt-[100px]'>
      <div className='w-[297px] flex flex-col items-center gap-y-[52px]'>
        <div className='w-full flex flex-col items-center gap-4'>
          <span>
            <DistributeTokenIcon />
          </span>
          <h4 className='text-primaryText font-medium font-sans'>
            You haven&apos;t distributed a token yet
          </h4>
        </div>
        {/* Fund Distribution wallet Modal Trigger */}
        <PlusIconButton
          className='!h-[37px] !w-[235px]'
          onClick={() => setDistributeTokenModal()}
          fullwidth
        >
          Fund Distribution Wallet
        </PlusIconButton>

        {/* Fund Distribution wallet Modal Trigger End */}
      </div>
      {/* Fund Distribution Wallet Modal */}
      <VisuallyHidden visible={distributeTokenModal ? true : false}>
        <FundDistributionWalletModal
          closeModal={setDistributeTokenModal}
          isOpen={distributeTokenModal}
        />
      </VisuallyHidden>
      {/* Fund Distribution Wallet Modal End */}
    </div>
  );
};

export default DistributeTokenWidget;
