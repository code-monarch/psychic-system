"use client";
import React, { useState } from "react";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
} from "@emtech/ui";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useBoolean } from "@emtech/utils";
import DigitalRegulationOnboardingCard from "../molecules/digital-regulation-onboarding-card";
import DigitalCashOnboardingCard from "../molecules/digital-cash-onboarding-card";
import ModalHeader from "../molecules/modal-header";
import OnBoardingCardScrollArea from "../molecules/onboarding-card-scroll-area";
import Image from "next/image";
import CBNLogo from "@/public/cbn-logo.png";

const SelectWhereToBeginModal = () => {
  //Determines where to begin Tour
  const [whereToBegin, setWhereToBegin] = useState<string>("");

  // Determines whether Select App user Modal should be open or closed
  const {
    value: modalState,
    toggle: toggleModal,
    setFalse: closeModal,
  } = useBoolean(true);

  return (
    <AlertDialogue isopen={modalState} setisopen={toggleModal}>
      <AlertDialogueOverlay isopen={modalState}>
        <AlertDialogueContent>
          <div className='relative bg-surfaceColor !w-[796px] !h-[570px] !flex !flex-col !p-0 !ml-[80px] !rounded-lg !overflow-hidden'>
            {/* Header */}
            <ModalHeader
              heading={
                <h2 className='text-white text-2xl font-sans font-medium'>
                  Please select where you wish to <br />
                  <span className='text-secondaryText'>begin</span> from
                </h2>
              }
            />
            <OnBoardingCardScrollArea>
              <div className='relative w-full px-10'>
                <RadioGroup.Root
                  className='w-full flex items-start justify-center pt-[60px] gap-x-[16px]'
                  aria-label='Select Wallet'
                  value={whereToBegin}
                  onValueChange={setWhereToBegin}
                >
                  {/* Digital Regulation */}
                  <RadioGroup.Item
                    value='digital-regulation'
                    id='digital-regulation'
                  >
                    <DigitalRegulationOnboardingCard
                      color={
                        whereToBegin === "digital-regulation"
                          ? "#C0933E"
                          : "#1E252D"
                      }
                      isSelected={
                        whereToBegin === "digital-regulation" ? true : false
                      }
                      closeSelectWhereToBeginModal={closeModal}
                      textClass={
                        whereToBegin === "digital-regulation"
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
                      color={
                        whereToBegin === "digital-cash" ? "#C0933E" : "#1E252D"
                      }
                      isSelected={
                        whereToBegin === "digital-cash" ? true : false
                      }
                      closeSelectWhereToBeginModal={closeModal}
                      textClass={
                        whereToBegin === "digital-cash"
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
                <div className='absolute bottom-0 left-[34px] flex justify-start'>
                  <Image
                    width={42}
                    height={56}
                    src={CBNLogo}
                    alt='CBN Logo'
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                {/* CBN Logo End */}
              </div>
            </OnBoardingCardScrollArea>
          </div>
        </AlertDialogueContent>
      </AlertDialogueOverlay>
    </AlertDialogue>
  );
};

export default SelectWhereToBeginModal;
