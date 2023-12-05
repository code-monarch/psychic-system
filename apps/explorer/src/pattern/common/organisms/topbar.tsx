"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as Separator from "@radix-ui/react-separator";

import { joinClasses } from "@emtech/utils";
import { NotificationIcon, SearchIcon } from "@emtech/icons";
import TopbarAppTitle from "../molecules/topbar-app-title";
import SearchInput from "../molecules/search-input";
import TopNavLinks from "../molecules/top-nav-links";
import ExitExplorerBtn from "../molecules/exit-explorer-btn";

const Topbar = () => {
  const [exact, setExact] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setExact(true);
    }
  }, [pathname]);

  return (
    <div
      className={joinClasses(
        "bg-darkBackground fixed w-screen h-[88px] flex justify-start items-center text-white pt-[33px] pb-[25px] px-[27px] shadow-semShadow2 transition-all duration-200 ease-in-out z-[25]"
      )}
    >
      <div className='w-full flex justify-between items-center'>
        {/* Brand Logo and search Bar */}
        <div className='h-[34px] flex items-center space-x-[24px]'>
          <TopbarAppTitle />
          {/* Separator */}
          <Separator.Root
            className='bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px'
            decorative
            orientation='vertical'
          />
          {/* Separator End */}
          <SearchInput />
        </div>
        {/* Brand Logo and search Bar End */}

        {/* Top Nav links */}
        <div className='flex items-center h-[22px] w-fit space-x-[40px]'>
          <TopNavLinks />
          {/* Separator */}
          <Separator.Root
            className='bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px'
            decorative
            orientation='vertical'
          />
          {/* Separator End */}

          {/* Exit Explorer Btn */}
          <ExitExplorerBtn />
        </div>
        {/* Top Nav links End */}
      </div>
    </div>
  );
};

export default Topbar;
