"use client";
import React from "react";
import { RingProgress } from "@mantine/core";
import { joinClasses } from "@emtech/utils";

const chartColors = {
  totalSupply: `#9747FF`,
  totalDistribution: `#31B0C2`,
  tokensBurned: `#0D3477`,
  tokensIssued: `#FF6C56`,
};

const TokensTotalSummary = () => {
  return (
    <div className='min-w-[300px] w-full flex flex-col justify-start items-start gap-y-[25px]'>
      {/* Donut Chart */}
      <div>
        <RingProgress
          size={190}
          thickness={35}
          sections={[
            {
              value: 40,
              color: `${chartColors.totalSupply}`,
              tooltip: "Total Supply",
            },
            {
              value: 30,
              color: `${chartColors.totalDistribution}`,
              tooltip: "Tokens Distributed",
            },
            {
              value: 15,
              color: `${chartColors.tokensBurned}`,
              tooltip: "Tokens Burned",
            },
            {
              value: 15,
              color: `${chartColors.tokensIssued}`,
              tooltip: "Total Issued",
            },
          ]}
          rootColor='#E7EBF1'
        />
      </div>
      {/* Donut Chart End */}
      <div className='space-y-[16px]'>
        {/* Total Supply and Tokens Distributed  */}
        <div className='w-full flex justify-between items-center'>
          {/* total Supply */}
          <div className='flex items-center gap-[8px]'>
            <span
              className={joinClasses(
                `bg-${chartColors.totalSupply}`,
                "w-[8px] h-[8px]"
              )}
            ></span>
            <div className='flex items-end gap-[8px]'>
              <h6 className='text-inputPlaceholder text[14px] font-sans font-[800]'>
                Total
                <br />
                Supply:
              </h6>
              <h5 className='text-primaryText text[14px] font-sans font-[800]'>
                ₦140Tr
              </h5>
            </div>
          </div>
          {/* total Supply End */}

          {/* Tokens Distributed */}
          <div className='flex items-center gap-[8px]'>
            <span
              className={joinClasses(
                `bg-${chartColors.totalSupply}`,
                "w-[8px] h-[8px]"
              )}
            ></span>
            <div className='flex items-end gap-[8px]'>
              <h6 className='text-inputPlaceholder text[14px] font-sans font-[800]'>
                Token
                <br />
                Distributed:
              </h6>
              <h5 className='text-primaryText text[14px] font-sans font-[800]'>
                ₦140Tr
              </h5>
            </div>
          </div>
          {/* Tokens Distributed  End */}
        </div>
        {/* Total Supply and Tokens Distributed End */}

        {/* Total Issued and Tokens Burned  */}
        <div className='w-full flex justify-between items-center'>
          {/* total Supply */}
          <div className='flex items-center gap-[8px]'>
            <span
              className={joinClasses(
                `bg-${chartColors.totalSupply}`,
                "w-[8px] h-[8px]"
              )}
            ></span>
            <div className='flex items-end gap-[8px]'>
              <h6 className='text-inputPlaceholder text[14px] font-sans font-[800]'>
                Total
                <br />
                Supply:
              </h6>
              <h5 className='text-primaryText text[14px] font-sans font-[800]'>
                ₦140Tr
              </h5>
            </div>
          </div>
          {/* total Supply End */}

          {/* Tokens Distributed */}
          <div className='flex items-center gap-[8px]'>
            <span
              className={joinClasses(
                `bg-${chartColors.totalSupply}`,
                "w-[8px] h-[8px]"
              )}
            ></span>
            <div className='flex items-end gap-[8px]'>
              <h6 className='text-inputPlaceholder text[14px] font-sans font-[800]'>
                Token
                <br />
                Distributed:
              </h6>
              <h5 className='text-primaryText text[14px] font-sans font-[800]'>
                ₦140Tr
              </h5>
            </div>
          </div>
          {/* Tokens Distributed  End */}
        </div>
        {/* Total Issued and Tokens Burned  */}
      </div>
    </div>
  );
};

export default TokensTotalSummary;
