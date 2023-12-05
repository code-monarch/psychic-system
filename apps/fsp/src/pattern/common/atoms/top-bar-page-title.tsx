"use-client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveActiveNav } from "@/redux/features/active-sidebar";
import { usePathname } from "next/navigation";

export interface ITopbarTitle extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  exact?: boolean;
}

const TopbarPageTitle = ({ href, exact }: ITopbarTitle) => {
  // Sets the topbar page title
  const [topbarTitle, setTopbarTitle] = useState<string>();

  const dispatch = useDispatch();

  const pathname = usePathname();

  // Determines current route the User is on
  const isActive = exact ? pathname === href : pathname.startsWith(pathname);

  // Set Topbar title depending on what route the user is currently on
  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        if (isActive) {
          setTopbarTitle("Dashboard overview");
          dispatch(saveActiveNav("/dashboard"));
        }
        break;
      case "/wallet":
        if (isActive) {
          setTopbarTitle("Wallet");
          dispatch(saveActiveNav("/wallet"));
        }
        break;
      case "/transactions":
        if (isActive) {
          setTopbarTitle("Transactions");
          dispatch(saveActiveNav("/transactions"));
        }
        break;
      case "/requests":
        if (isActive) {
          setTopbarTitle("Requests");
          dispatch(saveActiveNav("/requests"));
        }
        break;
      case "/requests/create-request-form":
        if (isActive) {
          setTopbarTitle("Create Request Form");
          dispatch(saveActiveNav("/requests/create-request-form"));
        }
        break;
      case "/currency":
        if (isActive) {
          setTopbarTitle("Currency");
          dispatch(saveActiveNav("/currency"));
        }
        break;
      default:
        setTopbarTitle("Dashboard overview");
    }
  }, [dispatch, isActive, pathname]);

  return <div className='font-sans font-[900] text-[36px]'>{topbarTitle}</div>;
};

export default TopbarPageTitle;
