"use client";
import React, { FC, HTMLAttributes } from "react";
import { IOnboardingCardProps } from "../molecules/digital-cash-onboarding-card";

const CardContainer: FC<
  Required<Pick<IOnboardingCardProps, "htmlFor">> &
    HTMLAttributes<HTMLLabelElement>
> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={`${htmlFor}`}
      className='w-[272px] h-fit flex flex-col justify-start gap-y-[28px] cursor-pointer'
    >
      {children}
    </label>
  );
};

export default CardContainer;
