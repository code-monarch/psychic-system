import { Step } from "react-joyride";
import SelectUser from "./select-user";
import AppTourTooltip from "./app-tour-tooltip";
import { useAppDispatch } from "@/redux/hooks";
import { GlobalState, endTour } from "@/redux/features/global-state";
import { useSelector } from "react-redux";

const steps: Step[] = [
  {
    target: "#dashboard",
    title: "Dashboard",
    content:
      "At the Dashboard, you can easily get an overview of and access to some of the most important features that would aid seamless interactions with all FSPs in your geography. ",
    placement: "right",
    disableBeacon: true,
  },
  {
    target: "#wallet",
    title: "Wallet",
    content:
      "The Wallet holds the balance of tokens present in your account, tokens distributed, credits, debits, etc., all in one and on-demand, as transacted between all FSPs.",
    placement: "right",
    disableBeacon: true,
  },
  {
    target: "#transactions",
    title: "Transactions",
    content:
      "Maintain a structured overview of all Transactions that occurs between FSPs and their users, all Wallet balances and transaction volumes are at your fingertips.",
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#requests",
    title: "Requests",
    content:
      "Requests hold all requests made by FSPs in your geographical area, ranging from requests for additional funding, to institutional wallets. You can create forms to handle these request which would be made available on the FSP portal.",
    placement: "right",
    disableBeacon: true,
  },
  {
    target: "#currency",
    title: "Currency",
    content:
      "Utilize the Currency area to manage the wallets you distribute funds to, and easily allow for the transfer of tokens between your Master and Distribution wallets respectively.",
    placement: "right",
    disableBeacon: true,
  },
];

const AppTourTemplate = () => {
  // Get Store State from redux store
  const { tour: appTourState } = useSelector(GlobalState);

  const dispatch = useAppDispatch();
  /**
   * @description
   * method that ends app tour
   * toggles tour state to false
   */
  const setAppTourState = () => {
    dispatch(endTour());
  };
  return (
    <>
      <AppTourTooltip
        runTour={appTourState}
        steps={steps}
        setRunTour={setAppTourState}
      />
      <SelectUser />
    </>
  );
};

export default AppTourTemplate;
