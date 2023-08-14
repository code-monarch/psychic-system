"use client";
import React, { FC } from "react";
import { DigitalRegulationIcon } from "@emtech/icons";
import { joinClasses } from "@emtech/utils";
import { VisuallyHidden } from "@emtech/ui";
import { useAppDispatch } from "@/redux/hooks";
import { startTour } from "@/redux/features/global-state";

interface IProps {
  title: string;
  htmlFor: string;

  // Color of Card title and SVG as it changes
  color: string;

  // Color of Card title and SVG as it changes e.g 'text-[#000]
  textClass?: string;

  // Determines whether card is selected
  isSelected: boolean;

  // Closes Select App User Modal
  closeSelectAppUserModal: () => void;
}

const DigitalRegulationOnboardingCard: FC<IProps> = ({
  title,
  htmlFor,
  color,
  textClass,
  isSelected,
  closeSelectAppUserModal,
}) => {
  const dispatch = useAppDispatch();

  /**
   * @description
   * method that Begins app tour by
   * Closes Select App User Modal then
   * sets tour state to true
   */
  const startAppTour = () => {
    closeSelectAppUserModal();
    dispatch(startTour());
  };
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='w-[272px] h-fit flex flex-col justify-start gap-y-[28px] cursor-pointer'
    >
      <div
        className={joinClasses(
          isSelected && "border border-secondaryText",
          "bg-white w-full h-[201px] flex items-center justify-center rounded-[5px] shadow-md"
        )}
      >
        <DigitalRegulationIcon color={color} />
      </div>

      <div className='w-full flex flex-col items-center gap-y-7'>
        {/* Card Title */}
        <h3
          className={joinClasses(
            textClass ? textClass : "text-primaryText",
            "text-base font-sans font-extrabold"
          )}
        >
          {title}
        </h3>

        {/* Go to Tour Button */}
        <VisuallyHidden visible={isSelected}>
          <span className='seeTourBtn' onClick={() => startAppTour()}>
            See tour
          </span>
        </VisuallyHidden>
        {/* Go to Tour Button End */}
      </div>
      {/* Card Title End */}
    </label>
  );
};

export default DigitalRegulationOnboardingCard;
