"use client";
import React from "react";
import { RingProgress, Center, Popover } from "@mantine/core";
import { InfoIcon } from "@emtech/icons";
import BurnTokenModal from "@/pattern/templates/modals/burn-token-modal";

const TotalTokensBurnedCard = () => {
  return (
    <div className='relative bg-white max-w-[225px] h-[277.5px] h-fit flex justify-center pt-[39px] px-[30px] pb-[24px] border border-borderColor shadow-shadow1 rounded-[8px]'>
      <div className='w-full flex flex-col gap-y-[24px]'>
        {/* Heading */}
        <h4 className='text-[18px] text-primaryText text-center whitespace-normal font-sans font-[500]'>
          Total Tokens Burned
        </h4>
        {/* Heading End */}

        {/* Ring Progress */}
        <div className='w-full flex justify-center'>
          <RingProgress
            size={130}
            thickness={11}
            roundCaps
            label={
              <Center>
                <h4 className='text-primaryText text-[22px] font-sans font-[800]'>
                  ₦120B
                </h4>
              </Center>
            }
            sections={[{ value: 60, color: "#0D3477" }]}
            rootColor='#E7EBF1'
          />
        </div>
        {/* Ring Progress End */}

        {/* Issue Token Modal Trigger */}
        <BurnTokenModal />
        {/* Issue Token Modal Trigger End */}
      </div>

      {/* Info Pop Over */}
      <div className='absolute top-[8px] right-[8px]'>
        <Popover
          width={200}
          position='bottom-end'
          withArrow
          shadow='sm'
          classNames={{
            dropdown:
              "bg-surfaceColor w-[228px] h-[104px] border border-[rgba(0, 0, 0, 0.3)]",
          }}
        >
          {/* Pop over Trigger */}
          <Popover.Target>
            <div className='cursor-pointer'>
              <InfoIcon />
            </div>
          </Popover.Target>
          {/* Pop over Trigger End */}
          <Popover.Dropdown>
            <p className='text-[14px] text-primaryText font-sans'>
              <strong>Total Tokens</strong> Issued are the amount of tokens /
              coins that&apos;s been minted to the Master Wallet
            </p>
          </Popover.Dropdown>
        </Popover>
      </div>
      {/* Info Pop Over End */}
    </div>
  );
};

export default TotalTokensBurnedCard;
