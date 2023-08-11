"use client";
import React, { useState } from "react";
import { Portal } from "@/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import DigitalRegulationOnboardingCard from "@/pattern/organisms/cards/digital-regulation-onboarding-card";
import DigitalCashOnboardingCard from "@/pattern/organisms/cards/digital-cash-onboarding-card";

const SelectUser = () => {
  const [user, setUser] = useState<string>("");
  return (
    <Portal className="!flex !justify-center !items-center">
      <div className='bg-surfaceColor w-[796px] h-[570px] flex flex-col gap-y-[32px] rounded-[5px]'>
        {/* Header */}
        <div className=' bg-primaryText bg-onboardingHeaderImage w-full h-[149px] pt-12 px-10 pb-5 rounded-t-[8px]'>
          <h2 className='text-white text-2xl font-sans font-medium'>
            Please select where you wish to{" "}
            <span className='text-secondaryText'>begin</span> from
          </h2>
        </div>
        {/* Header End */}

        <RadioGroup.Root
          className='w-full flex items-center justify-center gap-x-[16px]'
          aria-label='Select Wallet'
          value={user}
          onValueChange={setUser}
        >
          {/* Digital Regulation */}
          <RadioGroup.Item value='digital-regulation' id='digital-regulation'>
            <DigitalRegulationOnboardingCard
              color='#1E252D'
              htmlFor='digital-regulation'
              title='Digital Regulation'
            />
          </RadioGroup.Item>
          {/* Digital Regulation End */}

          {/* Digital Cash */}
          <RadioGroup.Item value='digital-cash' id='digital-cash'>
            <DigitalCashOnboardingCard
              color='#1E252D'
              htmlFor='digital-cash'
              title='Digital Cash'
            />
          </RadioGroup.Item>
          {/* Digital Cash End */}
        </RadioGroup.Root>
      </div>
    </Portal>
  );
};

export default SelectUser;
