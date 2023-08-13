"use client";
import React, { FC } from "react";
import { DigitalRegulationIcon } from "@emtech/icons";
import { joinClasses } from "@emtech/utils";
import { Button, VisuallyHidden } from "@/ui";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  htmlFor: string;

  // Color of Card title and SVG as it changes
  color: string;

  // Color of Card title and SVG as it changes e.g 'text-[#000]
  textClass?: string;

  // Determines whether card is selected
  isSelected: boolean;
}

const DigitalRegulationOnboardingCard: FC<IProps> = ({
  title,
  htmlFor,
  color,
  textClass,
  isSelected
}) => {
  const { push } = useRouter();
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='w-[272px] h-fit flex flex-col justify-start gap-y-[28px] cursor-pointer'
    >
      <div className='bg-white w-full h-[201px] flex items-center justify-center rounded-[5px] shadow-md'>
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
          <Button
            size='xs'
            className='!w-[104] !h-[37px]'
            onClick={() => push("onboarding/tour")}
          >
            See tour
          </Button>
        </VisuallyHidden>
        {/* Go to Tour Button End */}
      </div>
      {/* Card Title End */}
    </label>
  );
};

export default DigitalRegulationOnboardingCard;
