"use client";
import { FC, Key } from "react";
import { BrandLogo, ExpandIcon } from "@emtech/icons";
import { joinClasses, useToggle } from "@emtech/utils";
import { WEBSITE_URL } from "@/lib/constants/index.constants";
import { Drawer } from "../../material-tailwind-components";
import DigitalCashNavigation from "../digital-cash-sidebar-navs";
import { LibrarySidebarNavIcon } from "@emtech/icons";
import NavLink from "../../atoms/custom-nav-link";
import { useAppSelector } from "@/redux/hooks";
import { GlobalState } from "@/redux/features/global-state";
import { Text } from "@emtech/ui";
import { usePathname } from "next/navigation";
import UserIcon from "../../atoms/user-icon";
import LogoutButton from "../../molecules/logout-button";

const bottomNavigation = [
  {
    link: "API Library",
    href: "/api-library",
    Icon: LibrarySidebarNavIcon,
    tooltip: "API Library",
    tourId: "api-library",
  },
];

export interface ISidebarDrawerProps {
  disableDismiss?: boolean;
}

const SidebarDrawer: FC<ISidebarDrawerProps> = ({ disableDismiss }) => {
  // Determines whether Sidebar Drawer is visible
  const [isVisible, toggleDrawer] = useToggle(true);

  // Get current pathName
  const pathname = usePathname();
  const isActive = (url: string) => pathname.includes(url);

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
              {/* Brand Logo */}
              <BrandLogo />
              {/* Brand Logo End */}
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
              {bottomNavigation.map(
                (
                  { Icon, tooltip, tourId, link, href },
                  idx: Key | null | undefined
                ) => (
                  <div
                    className={joinClasses(
                      "transition-all duration-700 ease-in-out"
                    )}
                    title={`${tooltip}`}
                    key={idx}
                    id={tourId}
                  >
                    {/* Navigation Link */}
                    <NavLink
                      href={`${href}`}
                      exact={link === "Dashboard"}
                      isOnSpotlight={isOnSpotlight(tourId)}
                      className='!w-full'
                    >
                      <span>
                        <Icon
                          width='24'
                          height='24'
                          color={
                            isActive(href!) || isOnSpotlight(tourId)
                              ? "#C0933E"
                              : "#8499B1"
                          }
                        />
                      </span>
                      <Text textsize='xs' className='text-sm'>
                        {link}
                      </Text>
                    </NavLink>
                    {/* Navigation Link End */}
                  </div>
                )
              )}
              {/* Settings */}
              <NavLink
                href='/settings'
                isOnSpotlight={isOnSpotlight("settings")}
                className='!w-full'
              >
                <span>
                  <UserIcon abbr='Joel' />
                </span>
                <Text className='text-sm'>Kwame Obi</Text>
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
