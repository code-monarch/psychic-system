"use client";
import React, { FC, ReactNode } from "react";
import { IconButton, LinkButton, VisuallyHidden } from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import FundDistributionWalletModal from "../../../currency/organisms/modals/fund-distribution-wallet-modal";
import { Drawer } from "../../material-tailwind-components";
import { PlusIcon } from "@emtech/icons";

interface ISummaryDrawerProps {
  trigger: string; // Drawer trigger text e.g "Wallet Summary"
  drawerTitle: string; // Summary title
  drawerDescription?: string; // Description of drawer
  children: ReactNode;
}

const SummaryDrawer: FC<ISummaryDrawerProps> = ({
  trigger,
  drawerTitle,
  drawerDescription,
  children,
}) => {
  // Determines whether drawer is Open or closed
  const [isDrawerVisible, toggleDrawer] = useToggle(false);

  // Determines whether fund distribution wallet modal is visible
  const [distributionWalletModal, toggleDistributionWalletModal] =
    useToggle(false);

  return (
    <>
      {/* Trigger */}
      <LinkButton
        className='underline text-[14px] text-primaryText font-sans font-[800]'
        onClick={() => {
          toggleDrawer();
        }}
      >
        {trigger}
      </LinkButton>
      {/* Trigger End */}
      <Drawer
        open={isDrawerVisible}
        onClose={toggleDrawer}
        placement='right'
        size={523}
        overlayProps={{
          className:
            "bg-[#1E252D]/30 w-screen h-screen ml-[-80px] backdrop-blur-none",
        }}
        className='bg-transparent'
      >
        <div className='custom_scollbar bg-white min-w-[523px] w-[523px] min-h-screen h-[2vh] flex flex-col items-center rounded-l-[8px] overflow-y-auto overflow-x-hidden gap-y-[57px] px-[32px] pb-[90px]'>
          {/* Title And Description */}
          <div className='bg-white absolute top-0 left-[32px] right-[32px] w-full space-y-[24px] pt-[48px] pb-[24px] border-b-[1px] border-[#DEE3EB] z-40'>
            <div>
              <h3 className='text-[#1E252D] text-[24px] text-left font-sans font-[800]'>
                {drawerTitle}
              </h3>
            </div>
            <div>
              <p className='max-w-[331px] text-[#1E252D] text-[14px] font-sans'>
                {drawerDescription}
              </p>
            </div>
          </div>
          {/* Title And Description End */}

          {/* Children */}
          <div className='mt-[210px] pb-[40px]'>{children}</div>
          {/* Children End */}

          {/* Fund Distribution Wallet Modal Trigger */}
          <IconButton
            size='xl'
            lefticon={<PlusIcon color='#fff' />}
            onClick={() => toggleDistributionWalletModal()}
            className='!w-[380px]'
          >
            Fund Distribution Wallet
          </IconButton>
          {/* Fund Distribution Wallet Modal Trigger End */}
        </div>
        {/* Fund Distribution Wallet Modal */}
        <VisuallyHidden visible={distributionWalletModal ? true : false}>
          <FundDistributionWalletModal
            closeModal={toggleDistributionWalletModal}
            isOpen={distributionWalletModal}
          />
        </VisuallyHidden>
        {/* Fund Distribution Wallet Modal End */}
      </Drawer>
    </>
  );
};

export default SummaryDrawer;
