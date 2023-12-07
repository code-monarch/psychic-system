"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LogoAndSearchBarWidget from "../molecules/logo-and-searchbar-widget";
import TopbarGoBackBtn from "../molecules/topbar-goBack-btn";

const TopbarAppTitle = () => {
  const pathname = usePathname();

  const [topbarTitle, setTopbarTitle] = useState<ReactNode>();

  useEffect(() => {
    switch (!!pathname) {
      case pathname.startsWith("/transaction/"):
        setTopbarTitle(<TopbarGoBackBtn />);
        break;
      case pathname.startsWith("/token/"):
        setTopbarTitle(<TopbarGoBackBtn />);
        break;
      case pathname.startsWith("/account/"):
        setTopbarTitle(<TopbarGoBackBtn />);
        break;
      default:
        setTopbarTitle(<LogoAndSearchBarWidget />);
    }
  }, [pathname]);
  return <>{topbarTitle}</>;
};

export default TopbarAppTitle;
