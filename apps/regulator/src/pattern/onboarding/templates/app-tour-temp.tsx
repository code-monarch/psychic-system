"use client";
import { useEffect, useState } from "react";
import { Step } from "react-joyride";
import { useAppDispatch } from "@/redux/hooks";
import { GlobalState, endTour } from "@/redux/features/global-state";
import { useSelector } from "react-redux";
import AppTourTooltip from "../organisms/app-tour-tooltip";
import SelectWhereToBeginModal from "../organisms/select-where-to-begin-modal";
import Hidden from "@/pattern/common/atoms/hidden";

const steps: Step[] = [
  {
    target: "#dashboardd",
    title: "1. Dashboard",
    content:
      "At the Dashboard, you can easily get an overview of and access to some of the most important features that would aid seamless interactions with all FSPs in your geography. ",
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#wallet",
    title: "2. Wallet",
    content:
      "The Wallet holds the balance of tokens present in your account, tokens distributed, credits, debits, etc., all in one and on-demand, as transacted between all FSPs.",
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#transactions",
    title: "3. Transactions",
    content:
      "Maintain a structured overview of all Transactions that occurs between FSPs and their users, all Wallet balances and transaction volumes are at your fingertips.",
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#requests",
    title: "4. Requests",
    content:
      "Requests hold all requests made by FSPs in your geographical area, ranging from requests for additional funding, to institutional wallets. You can create forms to handle these request which would be made available on the FSP portal.",
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#currency",
    title: "5. Currency",
    content:
      "Utilize the Currency area to manage the wallets you distribute funds to, and easily allow for the transfer of tokens between your Master and Distribution wallets respectively.",
    placement: "right-start",
    disableBeacon: true,
  },
];

const AppTourTemplate = () => {
  // Get Store State from redux store
  const { tour: appTourState } = useSelector(GlobalState);

  const [tour, setTour] = useState(appTourState);

  useEffect(() => {
    setTour(appTourState);
  }, [appTourState, setTour]);

  const dispatch = useAppDispatch();

  const endAppTour = () => {
    dispatch(endTour());
  };
  return (
    <>
      <div className='z-[99999999999]'>
        <AppTourTooltip runTour={tour} steps={steps} exitTour={endAppTour} />
      </div>
      <Hidden visible={tour ? false : true}>
        <SelectWhereToBeginModal />
      </Hidden>
    </>
  );
};

export default AppTourTemplate;
