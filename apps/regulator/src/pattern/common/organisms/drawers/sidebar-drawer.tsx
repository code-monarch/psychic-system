"use client";
import { FC } from "react";
import { ExpandIcon } from "@emtech/icons";
import { useToggle } from "@emtech/utils";
import { WEBSITE_URL } from "@/lib/constants/index.constants";
import { Drawer } from "../../material-tailwind-components";
import DigitalCashNavigation from "../digital-cash-sidebar-navs";
import NavLink from "../../atoms/custom-nav-link";
import { useAppSelector } from "@/redux/hooks";
import { GlobalState } from "@/redux/features/global-state";
import { Text } from "@emtech/ui";
import UserIcon from "../../atoms/user-icon";
import LogoutButton from "../../molecules/logout-button";
import Image from "next/image";
import CBNLogo from "@/public/cbn-logo.png";

export interface ISidebarDrawerProps {
  disableDismiss?: boolean;
}

const SidebarDrawer: FC<ISidebarDrawerProps> = ({ disableDismiss }) => {
  // Determines whether Sidebar Drawer is visible
  const [isVisible, toggleDrawer] = useToggle(true);

  // Get value of appTourId from redux store
  const { appTourId, tour } = useAppSelector(GlobalState);

  /**
   *
   * @description
   * Determine when a Nav link is currently on Spotlight
   * This can only be true if app tour is ongoing and will be false thereafter
   */
  const isOnSpotlight = (id: string): boolean => {
    if (tour === true) {
      return appTourId === `#${id}`;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* Drawer Trigger */}
      <button
        className='cursor-pointer transition-all delay-700 duration-300 ease-in-out'
        onClick={() => {
          toggleDrawer();
        }}
      >
        <ExpandIcon translateX={false} />
      </button>
      {/* Drawer Trigger End */}
      <Drawer
        open={isVisible}
        onClose={toggleDrawer}
        placement='left'
        className='bg-darkBackground w-[207px] h-screen ml-[48px] !pt-0 pb-12 pr-[3px] space-y-[32px]'
        dismiss={{
          enabled: disableDismiss ? false : true,
        }}
      >
        {/* Header */}
        <div className='bg-darkBackground w-full absolute top-0 flex items-center justify-between py-11'>
          <div className='flex justify-start space-x-[48px] pl-[24px] relative transition-all ease-in-out'>
            <a
              href={
                // eslint-disable-next-line turbo/no-undeclared-env-vars
                process.env.NODE_ENV !== "production" ? "/" : `${WEBSITE_URL}`
              }
            >
              {/* Central Bank Logo */}
              <Image
                width={42}
                height={56}
                src={CBNLogo}
                alt='CBN Logo'
                style={{ width: "auto", height: "auto" }}
              />
              {/* Central Bank Logo End */}
            </a>
          </div>
          {/* Absolute Sidebar toggle button */}
          <span
            className='absolute top-[40px] right-[-10px] cursor-pointer'
            onClick={() => {
              toggleDrawer();
            }}
          >
            <ExpandIcon translateX={true} />
          </span>
        </div>
        {/* Header End */}

        <div className='w-full min-h-full h-[2vh] flex flex-col justify-between overflow-y-auto overflow-x-hidden custom_scollbar pt-20'>
          {/* Top Navs */}
          <div className='pl-6 pr-4'>
            <DigitalCashNavigation />
          </div>
          {/* Top Navs End */}

          {/* Bottom Navs */}
          <div className='space-y-[26px] pt-[20px]'>
            <div className='w-full py-[26px] px-6 border-y border-y-[#495461] space-y-[27px]'>
              {/* Settings */}
              <NavLink
                href='/account'
                isOnSpotlight={isOnSpotlight("account")}
                className='!w-full flex items-center gap-x-2'
              >
                <span>
                  <UserIcon
                    abbr='Joel'
                    className='!w-[24px] !h-[24px] rounded-full'
                  />
                </span>
                <Text className='text-sm !text-inputPlaceholder'>
                  Kwame Obi
                </Text>
              </NavLink>
              {/* Settings End */}
            </div>

            {/* Log out button */}
            <div className='w-full px-6'>
              <LogoutButton />
            </div>
            {/* Log out button End */}
          </div>
          {/* Bottom Navigation End */}
        </div>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
