"use client";
import React, { FC } from "react";
import { DigitalRegulationIcon } from "@emtech/icons";
import Hidden from "@/pattern/common/atoms/hidden";
import { IOnboardingCardProps } from "./digital-cash-onboarding-card";
import CardContainer from "../atoms/card-container";
import CardIcon from "../atoms/card-icon";
import { Vstack } from "@emtech/ui";
import SeeTourBtn from "../atoms/see-tour-btn";
import CardTitle from "../atoms/card-title";

const DigitalRegulationOnboardingCard: FC<IOnboardingCardProps> = ({
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
        <DigitalRegulationIcon color={color} />
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

export default DigitalRegulationOnboardingCard;
