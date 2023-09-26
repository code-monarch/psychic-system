import React, { FC, HTMLAttributes } from "react";
import { IOnboardingCardProps } from "../molecules/digital-cash-onboarding-card";
import { joinClasses } from "@emtech/utils";

const CardIcon: FC<
  Required<Pick<IOnboardingCardProps, "isSelected">> &
    HTMLAttributes<HTMLDivElement>
> = ({ isSelected, children }) => {
  return (
    <div
      className={joinClasses(
        isSelected && "border border-secondaryText",
        "bg-white w-full h-[201px] flex items-center justify-center rounded-[5px] shadow-md"
      )}
    >
      {children}
    </div>
  );
};

export default CardIcon;
