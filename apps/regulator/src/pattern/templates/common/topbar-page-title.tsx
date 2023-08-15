"use-client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveActiveNav } from "@/redux/features/active-sidebar";
import { usePathname } from "next/navigation";

export interface ITopbarTitle extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  exact?: boolean;
}

const TopbarTitle = ({ href, exact }: ITopbarTitle) => {
  const [topbarTitle, setTopbarTitle] = useState<string>();
  const dispatch = useDispatch();

  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        if (isActive) {
          setTopbarTitle("Dashboard overview");
          dispatch(saveActiveNav("/"));
        }
        break;
      case "/user-management":
        if (isActive) {
          setTopbarTitle("User management Overview");
          dispatch(saveActiveNav("/user-management"));
        }
        break;
      case "/transactions":
        if (isActive) {
          setTopbarTitle("Transactions Overview");
          dispatch(saveActiveNav("/transactions"));
        }
        break;
      case "/api-call-logs":
        if (isActive) {
          setTopbarTitle("API call logs");
          dispatch(saveActiveNav("/api-call-logs"));
        }
        break;
      case "/account-settings":
        if (isActive) {
          setTopbarTitle("Account Settings");
          dispatch(saveActiveNav("/account"));
        }
        break;
      case "/activity-logs":
        if (isActive) {
          setTopbarTitle("Activity logs Overview");
          dispatch(saveActiveNav("/activity-logs"));
        }
        break;
      default:
        setTopbarTitle("Dashboard overview");
    }
  }, [dispatch, isActive, pathname]);

  return <h4>{topbarTitle}</h4>;
};

export default TopbarTitle;
