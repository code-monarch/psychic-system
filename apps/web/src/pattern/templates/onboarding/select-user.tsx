"use client";
import React, { useState } from "react";
import { Portal } from "@/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import DigitalRegulationOnboardingCard from "@/pattern/organisms/cards/digital-regulation-onboarding-card";
import DigitalCashOnboardingCard from "@/pattern/organisms/cards/digital-cash-onboarding-card";
import Image from "next/image";
import CBNLogo from "@/public/cbn-logo.png";
import { useRouter } from "next/navigation";

const SelectUser = () => {
  //Determines which User is Selected
  const [user, setUser] = useState<string>("");

  const { push } = useRouter();

  return (
    <Portal className='!flex !justify-center !items-center'>
      <div className='relative bg-surfaceColor w-[796px] h-[570px] flex flex-col rounded-lg'>
        {/* Header */}
        <div className='relative bg-primaryText bg-onboardingHeaderImage w-full h-[149px] pt-12 px-10 pb-5 rounded-lg'>
          <h2 className='text-white text-2xl font-sans font-medium'>
            Please select where you wish to <br />
            <span className='text-secondaryText'>begin</span> from
          </h2>
          {/* Skip Button */}
          <span
            className='absolute top-6 right-6 text-white text-sm font-sans cursor-pointer'
            onClick={() => push("onboarding/tour")}
          >
            Skip
          </span>
          {/* Skip Button End */}
        </div>
        {/* Header End */}

        <div className='w-full px-10'>
          <RadioGroup.Root
            className='w-full flex items-start justify-center pt-[60px] gap-x-[16px]'
            aria-label='Select Wallet'
            value={user}
            onValueChange={setUser}
          >
            {/* Digital Regulation */}
            <RadioGroup.Item value='digital-regulation' id='digital-regulation'>
              <DigitalRegulationOnboardingCard
                color={user === "digital-regulation" ? "#C0933E" : "#1E252D"}
                isSelected={user === "digital-regulation" ? true : false}
                textClass={
                  user === "digital-regulation"
                    ? "text-[#C0933E]"
                    : "text-[#1E252D]"
                }
                htmlFor='digital-regulation'
                title='Digital Regulation'
              />
            </RadioGroup.Item>
            {/* Digital Regulation End */}

            {/* Digital Cash */}
            <RadioGroup.Item value='digital-cash' id='digital-cash'>
              <DigitalCashOnboardingCard
                color={user === "digital-cash" ? "#C0933E" : "#1E252D"}
                isSelected={user === "digital-cash" ? true : false}
                textClass={
                  user === "digital-cash" ? "text-[#C0933E]" : "text-[#1E252D]"
                }
                htmlFor='digital-cash'
                title='Digital Cash'
              />
            </RadioGroup.Item>
            {/* Digital Cash End */}
          </RadioGroup.Root>

          {/* CBN Logo */}
          <div className='absolute bottom-[29px] left-[34px] flex justify-start'>
            <Image width={42} height={56} src={CBNLogo} alt='CBN Logo' />
          </div>
          {/* CBN Logo End */}
        </div>
      </div>
    </Portal>
  );
};

export default SelectUser;
