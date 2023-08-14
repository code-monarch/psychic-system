"use client";
import React, { useState } from "react";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
} from "@emtech/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import DigitalRegulationOnboardingCard from "@/pattern/organisms/cards/digital-regulation-onboarding-card";
import DigitalCashOnboardingCard from "@/pattern/organisms/cards/digital-cash-onboarding-card";
import Image from "next/image";
import CBNLogo from "@/public/cbn-logo.png";
import { useAppDispatch } from "@/redux/hooks";
import { endTour } from "@/redux/features/global-state";
import { useBoolean } from "@emtech/utils";

const SelectUser = () => {
  //Determines which app user is Selected
  const [user, setUser] = useState<string>("");

  // Determines whether Select App user Modal should be open or closed
  const {
    value: modalState,
    toggle: toggleModal,
    setFalse: closeModal,
  } = useBoolean(true);

  const dispatch = useAppDispatch();

  /**
   * @description
   * function that Endss app tour
   * sets tour state to false
   */
  const endAppTour = () => {
    dispatch(endTour());
  };

  return (
    <AlertDialogue
      isopen={modalState}
      setisopen={toggleModal}
      className='!flex !justify-center !items-center !z-[9999]'
    >
      <AlertDialogueOverlay
        className='p-4 bg-black/30 !z-[9999]'
        isopen={modalState}
      >
        <AlertDialogueContent className='relative bg-surfaceColor !w-[796px] !h-[570px] flex flex-col !p-0 rounded-lg !z-[9999]'>
          {/* Header */}
          <div className='relative bg-primaryText bg-onboardingHeaderImage w-full h-[149px] pt-12 px-10 pb-5 rounded-lg'>
            <h2 className='text-white text-2xl font-sans font-medium'>
              Please select where you wish to <br />
              <span className='text-secondaryText'>begin</span> from
            </h2>
            {/* Skip tour Button */}
            <span
              className='absolute top-6 right-6 text-white text-sm font-sans cursor-pointer'
              onClick={() => endAppTour()}
            >
              Skip
            </span>
            {/* Skip tour Button End */}
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
              <RadioGroup.Item
                value='digital-regulation'
                id='digital-regulation'
              >
                <DigitalRegulationOnboardingCard
                  color={user === "digital-regulation" ? "#C0933E" : "#1E252D"}
                  isSelected={user === "digital-regulation" ? true : false}
                  closeSelectAppUserModal={closeModal}
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
                  closeSelectAppUserModal={closeModal}
                  textClass={
                    user === "digital-cash"
                      ? "text-[#C0933E]"
                      : "text-[#1E252D]"
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
        </AlertDialogueContent>
      </AlertDialogueOverlay>
    </AlertDialogue>
  );
};

export default SelectUser;
