"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import UserIcon from "../../atoms/icons/user-icon";

import TopbarTitle from "./topbar-page-title";

// import { useGetDashboardDataQuery } from "@/redux/services/dashboard/dashboard.api-slice";
import { useLogout } from "@/lib/hooks/useLogout";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar";
import { joinClasses } from "@emtech/utils";
import { PopOver, PopOverContent, PopOverTrigger } from "@emtech/ui";
import { NotificationIcon } from "@emtech/icons";

const Topbar = () => {
  const [exact, setExact] = useState<boolean>(false);

  const { isCollapsed } = useCollapseSidebar();

  const pathname = usePathname();

  const { logOut } = useLogout();

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

          {/* Logout Pop over */}
          <PopOver>
            <PopOverTrigger className='cursor-pointer '>
              <div className='!cursor-pointer flex items-center'>
                <UserIcon abbr={"John Doe"} />
                <ChevronDownIcon />
              </div>
            </PopOverTrigger>
            <PopOverContent
              showCloseIcon={false}
              className='!w-[180px] py-[20px] !px-0 text-white'
              onClick={() => logOut()}
            >
              <div className='cursor-pointer py-[8px] bg-semSecondary hover:bg-semBlue600 hover:text-white'>
                <p className='px-[16px] rounded-[4px]'>Log out</p>
              </div>
            </PopOverContent>
          </PopOver>
          {/* Logout Pop over End */}
        </div>
        {/* Notification and more options End */}
      </div>
    </div>
  );
};

export default Topbar;
