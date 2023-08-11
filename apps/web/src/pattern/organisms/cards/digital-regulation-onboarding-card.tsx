"use client";
import React, { FC } from "react";
import { DigitalRegulationIcon } from "@emtech/icons";
import { joinClasses } from "@emtech/utils";

interface IProps {
  title: string;
  htmlFor: string;

  // Color of Card title and SVG as it changes
  color: string;
}

const DigitalRegulationOnboardingCard: FC<IProps> = ({
  title,
  htmlFor,
  color,
}) => {
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='block w-[272px] h-[251px] space-y-[28px] cursor-pointer'
    >
      <div className='bg-white w-full h-[201px] flex items-center justify-center rounded-[5px] shadow-md'>
        <DigitalRegulationIcon color={color} />
      </div>

      {/* Card Title */}
      <h3
        className={joinClasses(
          color ? `text-${color}` : "text-primaryText",
          "text-base font-sans font-extrabold"
        )}
      >
        {title}
      </h3>
      {/* Card Title End */}
    </label>
  );
};

export default DigitalRegulationOnboardingCard;
