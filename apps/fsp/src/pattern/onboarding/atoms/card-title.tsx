"use client";
import React, { FC, HTMLAttributes } from "react";
import { joinClasses } from "@emtech/utils";
import { IOnboardingCardProps } from "../molecules/digital-cash-onboarding-card";

const CardTitle: FC<
  Required<Pick<IOnboardingCardProps, "textClass">> &
    HTMLAttributes<HTMLHeadingElement>
> = ({ textClass, children }) => {
  return (
    <h3
      className={joinClasses(
        textClass ? textClass : "text-primaryText",
        "text-base font-sans font-extrabold"
      )}
    >
      {children}
    </h3>
  );
};

export default CardTitle;
