"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Step, Props, Styles, CallBackProps } from "react-joyride";
import { useDispatch } from "react-redux";
import { setAppTourId } from "@/redux/features/global-state";
const DynamicJoyride = dynamic(() => import("react-joyride"), { ssr: false });

interface TooltipProps extends Props {
  steps: Step[];
  runTour: boolean;
  styles?: Styles;
  exitTour: any;
}

const defaultStyles: Styles = {
  options: {
    backgroundColor: "#FFF",
    arrowColor: "#000",
    textColor: "#000",
  },
  spotlight: {
    borderRadius: "0.3rem",
  },
  tooltipContainer: {
    textAlign: "left",
  },
  tooltip: {
    padding: "1rem",
    maxWidth: "15rem",
    paddingTop: "3rem",
    borderRadius: "0.5rem",
    fontSize: "0.7rem",
  },
  tooltipTitle: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    paddingBottom: "0.5rem",
  },
  tooltipContent: {
    padding: "0",
  },
  buttonNext: {
    backgroundColor: "transparent",
    color: "#fff",
    outline: "none",
    padding: "0",
    marginLeft: "0.5rem",
  },
  buttonBack: {
    backgroundColor: "#174CFF",
    color: "#000",
    padding: "0",
  },
  buttonSkip: {
    position: "absolute",
    top: "0.5rem",
    left: "0.5rem",
  },
};

const AppTourTooltip: React.FC<TooltipProps> = ({
  steps,
  runTour,
  styles,
  exitTour,
  ...props
}) => {
  const dispatch = useDispatch();

  const handleSteps = (data: CallBackProps) => {
    const { step } = data;
    // We will set our App store Id state to the current tour step on spotlight
    dispatch(setAppTourId({ appTourId: step.target as string }));
  };

  return (
    <DynamicJoyride
      run={runTour}
      steps={steps}
      hideBackButton
      continuous
      showSkipButton
      hideCloseButton
      disableCloseOnEsc
      disableOverlayClose
      disableScrolling
      spotlightPadding={10}
      // tooltipComponent={}
      floaterProps={{
        styles: {
          arrow: {
            length: 10,
            spread: 20,
          },
          floater: {
            filter: "",
            transition: "opacity 0.8s",
          },
        },
      }}
      locale={{
        back: "Back",
        close: "Close",
        last: "Done",
        next: "Next",
        open: "Open the dialog",
        skip: <button onClick={() => exitTour()}>✕</button>,
      }}
      styles={styles ?? defaultStyles}
      callback={handleSteps}
      {...props}
    />
  );
};

export default AppTourTooltip;
