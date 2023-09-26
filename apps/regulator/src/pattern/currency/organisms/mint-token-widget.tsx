import React from "react";
import { MintTokenIcon } from "@emtech/icons";
import MintTokenModal from "./modals/mint-token-modal";

const MintTokenWidget = () => {
  return (
    <div className='w-full h-full flex items-center justify-center pt-[100px]'>
      <div className='w-[297px] space-y-[52px]'>
        <div className='w-full flex flex-col items-center gap-4'>
          <span>
            <MintTokenIcon />
          </span>
          <h4 className='text-primaryText font-medium font-sans'>
            You haven&apos;t minted a token yet
          </h4>
        </div>
        {/* Mint token Modal */}
        <MintTokenModal />
      </div>
    </div>
  );
};

export default MintTokenWidget;
