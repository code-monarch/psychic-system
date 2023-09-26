"use client";
import { FC } from "react";
import { joinClasses } from "@emtech/utils";
import SidebarDrawer, { ISidebarDrawerProps } from "./drawers/sidebar-drawer";
import {
  DigitalCashIcon,
  DigitalRegulationIcon,
  DocumentSideNavIcon,
  LibrarySidebarNavIcon,
  PlusIcon,
  ManagementSidebarNavIcon,
} from "@emtech/icons";
import SidebarItem from "../atoms/sidebar-item";
import HorizontalSeparator from "../atoms/horizontal-separator";
import UserIcon from "../atoms/user-icon";
import NavLink from "../atoms/custom-nav-link";
import LogoutButton from "../molecules/logout-button";
import { usePathname } from "next/navigation";

const Sidebar: FC<ISidebarDrawerProps> = ({ disableDismiss }) => {
  // Get current pathName
  const pathname = usePathname();
  const isActive = (url: string) => pathname.includes(url);

  return (
    <div className='relative h-screen'>
      {/* Sidebar toggle button */}
      <div className='fixed top-[16px] left-[32px] z-[5000]'>
        <SidebarDrawer disableDismiss={disableDismiss} />
      </div>
      <div
        className={joinClasses(
          "fixed left-0 top-0 bottom-0 bg-darkBackground w-[48px] min-h-full h-[2vh] overflow-y-auto overflow-x-hidden flex flex-col justify-between items-center pt-4 pb-[47px] custom_scollbar"
        )}
      >
        {/* Top */}
        <div className='relative w-full py-[28px]'>
          {/* Top Items */}
          <div className='w-full flex flex-col gap-y-5 items-center pt-[12px]'>
            {/* Products */}
            <SidebarItem>
              <DigitalRegulationIcon
                width='20.3'
                height='24.8'
                color='#8499B1'
              />
            </SidebarItem>
            {/* Products End */}

            {/* Document */}
            <SidebarItem>
              <DocumentSideNavIcon width='20.3' height='24.8' />
            </SidebarItem>
            {/* Document End */}

            {/* Digital Cash Icon */}
            <SidebarItem active={true}>
              <DigitalCashIcon width='32' height='32' color='#C0933E' />
            </SidebarItem>
            {/* Digital Cash Icon End */}

            {/* Divider */}
            <HorizontalSeparator className='bg-[#495461] mb-2 w-[70%]' />
            {/* Divider End */}
            <PlusIcon color='#8499B1' />
          </div>
          {/* Top Items End */}
        </div>
        {/* Top End */}

        {/* Bottom Items */}
        <div className='w-full flex flex-col gap-y-5 items-center pt-[12px]'>
          {/* Management */}
          <div>
            <NavLink href='/management' className='!w-full'>
              <ManagementSidebarNavIcon
                width='20.3'
                height='24.8'
                color={isActive("/management") ? "#C0933E" : "#8499B1"}
              />
            </NavLink>
          </div>
          {/* Management End */}

          {/* Library Icon */}
          <div>
            <NavLink href='/api-library' className='!w-full'>
              <LibrarySidebarNavIcon width='20.3' height='24.8' />
            </NavLink>
          </div>
          {/* Library Icon End */}

          {/* User Avatar */}
          <div>
            <NavLink href='/account' className='!w-full'>
              <UserIcon className='!w-[24px] !h-[24px]' abbr='Joel' />
            </NavLink>
          </div>
          {/* User Avatar End */}

          {/* Divider */}
          <HorizontalSeparator className='bg-[#495461] mb-2 w-[70%]' />
          {/* Divider End */}

          {/* Log out Icon */}
          <div>
            <LogoutButton hideText={true} iconWidth='20.3' iconHeight='24.8' />
          </div>
          {/* Log out Icon End */}
        </div>
        {/* Bottom Items End */}
      </div>
    </div>
  );
};

export default Sidebar;
