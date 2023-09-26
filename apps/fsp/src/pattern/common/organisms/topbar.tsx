"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { joinClasses } from "@emtech/utils";
import { NotificationIcon } from "@emtech/icons";

import TopbarPageTitle from "../atoms/top-bar-page-title";

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
        "bg-surfaceColor fixed w-screen h-[88px] flex justify-start py-[14px] pr-[10%] shadow-semShadow2 transition-all duration-200 ease-in-out z-[25]"
      )}
    >
      <div className='w-full flex justify-between items-center'>
        <TopbarPageTitle href={pathname} exact={exact} />

        {/* Top Bar Options */}
        <div className='flex items-center h-16 w-fit gap-x-[35px] text-black'>
          <span>
            <NotificationIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
