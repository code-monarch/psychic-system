"use client";
import React, { FC, ReactElement } from "react";
import { InfoIcon } from "@emtech/icons";
import { PopOver, PopOverContent, PopOverTrigger } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";

interface IWalletStatsCardProps {
  children: ReactElement;
  tooltip: ReactElement;
  className?: string;
}

const WalletStatsCard: FC<IWalletStatsCardProps> = ({
  children,
  tooltip,
  className,
}) => {
  return (
    <div
      className={joinClasses(
        className,
        "relative bg-white min-w-[225px] min-h-[278px] h-fit flex justify-center pt-[39px] px-[30px] pb-[24px] border border-borderColor shadow-shadow1 rounded-[8px]"
      )}
    >
      {children}
      {/* Info Pop Over */}
      <div className='absolute top-[8px] right-[8px]'>
        <PopOver>
          <PopOverTrigger>
            <div className='cursor-pointer'>
              <InfoIcon />
            </div>
          </PopOverTrigger>
          <PopOverContent
            showCloseIcon={false}
            align='end'
            className=' !bg-surfaceColor !min-w-[200px] !w-[200px] !h-[104px] !p-2 !rounded-[5px] !border !border-[rgba(0, 0, 0, 0.3)] !shadow-md'
          >
            {tooltip}
          </PopOverContent>
        </PopOver>
      </div>
      {/* Info Pop Over End */}
    </div>
  );
};

export default WalletStatsCard;
