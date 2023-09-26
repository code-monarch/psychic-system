import React from "react";
import { BurnTokenIcon } from "@emtech/icons";
import BurnTokenModal from "./modals/burn-token-modal";

const BurnTokenWidget = () => {
  return (
    <div className='w-full h-full flex items-center justify-center pt-[100px]'>
      <div className='w-[297px] space-y-[52px]'>
        <div className='w-full flex flex-col items-center gap-4'>
          <span>
            <BurnTokenIcon />
          </span>
          <h4 className='text-primaryText font-medium font-sans'>
            You haven&apos;t burnt a tokens yet
          </h4>
        </div>
        {/* Burn token Modal */}
        <BurnTokenModal />
      </div>
    </div>
  );
};

export default BurnTokenWidget;
