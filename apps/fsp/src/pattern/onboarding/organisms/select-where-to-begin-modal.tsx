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
import RiskManagementOnboardingCard from "../molecules/risk-management-onboarding-card";
import OnBoardingCardScrollArea from "../molecules/onboarding-card-scroll-area";

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
                <h2>
                  What do you plan to use{" "}
                  <span className='text-secondaryText uppercase'>EMTECH</span>{" "}
                  for?
                </h2>
              }
              subHeading={
                <h2>
                  Select where you&apos;d like to{" "}
                  <span className='text-secondaryText'>begin</span>
                </h2>
              }
            />
            <OnBoardingCardScrollArea>
              <div>
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
                          whereToBegin === "digital-cash"
                            ? "#C0933E"
                            : "#1E252D"
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

                    {/* Eisk Management */}
                    <RadioGroup.Item
                      value='risk-management'
                      id='risk-management'
                    >
                      <RiskManagementOnboardingCard
                        color={
                          whereToBegin === "risk-management"
                            ? "#C0933E"
                            : "#1E252D"
                        }
                        isSelected={
                          whereToBegin === "risk-management" ? true : false
                        }
                        closeSelectWhereToBeginModal={closeModal}
                        textClass={
                          whereToBegin === "risk-management"
                            ? "text-[#C0933E]"
                            : "text-[#1E252D]"
                        }
                        htmlFor='risk-management'
                        title='Risk Management'
                      />
                    </RadioGroup.Item>
                    {/* Eisk Management End */}
                  </RadioGroup.Root>
                </div>
              </div>
            </OnBoardingCardScrollArea>
          </div>
        </AlertDialogueContent>
      </AlertDialogueOverlay>
    </AlertDialogue>
  );
};

export default SelectWhereToBeginModal;
