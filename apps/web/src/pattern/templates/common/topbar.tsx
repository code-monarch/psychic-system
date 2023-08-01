"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import TopbarTitle from "./topbar-page-title";

// import { useGetDashboardDataQuery } from "@/redux/services/dashboard/dashboard.api-slice";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar";
import { joinClasses } from "@emtech/utils";
import { NotificationIcon } from "@emtech/icons";

const Topbar = () => {
  const [exact, setExact] = useState<boolean>(false);

  const { isCollapsed } = useCollapseSidebar();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setExact(true);
    }
  }, [pathname]);

  // const {
  //   data: dashboardData,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  // } = useGetDashboardDataQuery();

  return (
    <div
      className={joinClasses(
        "w-full bg-transparent fixed flex justify-around pr-[100px] top-0 h-[72px] py-[14px] pl-[40px] shadow-semShadow2 z-[25] transition-all duration-200 ease-in-out",
        !isCollapsed && "pl-[80px] pr-[250px]"
      )}
    >
      <div className='w-full flex justify-between items-center sm:space-x-[80px]'>
        <TopbarTitle href={pathname} exact={exact} />

        {/* Notification and more options */}
        <div className='flex items-center h-16 w-fit space-x-[35px] text-black'>
          <div>
            <NotificationIcon />
          </div>
        </div>
        {/* Notification and more options End */}
      </div>
    </div>
  );
};

export default Topbar;
