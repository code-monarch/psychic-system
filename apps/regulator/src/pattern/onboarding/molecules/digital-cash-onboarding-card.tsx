"use client";
import React, { FC } from "react";
import { DigitalCashIcon } from "@emtech/icons";
import Hidden from "@/pattern/common/atoms/hidden";
import CardContainer from "../atoms/card-container";
import CardTitle from "../atoms/card-title";
import CardIcon from "../atoms/card-icon";
import SeeTourBtn from "../atoms/see-tour-btn";
import { Vstack } from "@emtech/ui";

export interface IOnboardingCardProps {
  title: string; // Card Title
  htmlFor: string;
  color: string; // Color of Card SVG as it changes
  textClass?: string; // Color of Card title and SVG as it changes e.g 'text-[#000]
  isSelected: boolean; // Determines whether card is selected
  closeSelectWhereToBeginModal: () => void;
}

const DigitalCashOnboardingCard: FC<IOnboardingCardProps> = ({
  title,
  htmlFor,
  color,
  textClass,
  isSelected,
  closeSelectWhereToBeginModal,
}) => {
  return (
    <CardContainer htmlFor={`${htmlFor}`}>
      <CardIcon isSelected={isSelected}>
        <DigitalCashIcon color={color} />
      </CardIcon>

      <Vstack gap='6xl'>
        <CardTitle textClass={textClass}>{title}</CardTitle>

        <Hidden visible={isSelected}>
          <SeeTourBtn
            closeSelectWhereToBeginModal={closeSelectWhereToBeginModal}
          />
        </Hidden>
      </Vstack>
    </CardContainer>
  );
};

export default DigitalCashOnboardingCard;
