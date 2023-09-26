import React, { FC } from "react";
import { IOnboardingCardProps } from "../molecules/digital-cash-onboarding-card";
import { useAppDispatch } from "@/redux/hooks";
import { startTour } from "@/redux/features/global-state";

const SeeTourBtn: FC<
  Required<Pick<IOnboardingCardProps, "closeSelectWhereToBeginModal">>
> = ({ closeSelectWhereToBeginModal }) => {
  const dispatch = useAppDispatch();

  const startAppTour = () => {
    closeSelectWhereToBeginModal();
    dispatch(startTour());
  };
  return (
    <span className='seeTourBtn' onClick={() => startAppTour()}>
      See tour
    </span>
  );
};

export default SeeTourBtn;
