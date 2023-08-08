"use client";
import Image from "next/image";

import { joinClasses } from "@emtech/utils";
import {
  ExpandIcon,
} from "@emtech/icons";

import CBNLogo from "@/public/cbn-logo.png";

import { WEBSITE_URL } from "@/lib/constants";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar";

import DigitalCashNavigation from "@/pattern/organisms/digital-cash-sidebar-navs";
import { VisuallyHidden } from "@emtech/ui";

const Sidebar = () => {
  const { isCollapsed, collapse } = useCollapseSidebar();

  return (
    <div
      className={joinClasses(
        "fixed left-0 top-0 bottom-0  bg-darkBackground w-[207px] min-h-[100vh] z-[100] transition-all ease-in-out",
        isCollapsed && "!w-[80px]"
      )}
    >
      {/* Top */}
      <div className=' py-[28px]'>
        <div className='flex justify-start space-x-[48px] pl-[24px] relative transition-all ease-in-out'>
          <a
            href={
              // eslint-disable-next-line turbo/no-undeclared-env-vars
              process.env.NODE_ENV !== "production" ? "/" : `${WEBSITE_URL}`
            }
          >
            {/* CBN Logo */}
            <Image width={42} height={52} src={CBNLogo} alt='CBN Logo' />
            {/* CBN Logo End */}
          </a>

          {/* Sidebar toggle button */}
          <VisuallyHidden visible={isCollapsed ? false : true}>
            <span
              className='cursor-pointer transition-all delay-700 duration-300 ease-in-out'
              onClick={() => {
                collapse();
              }}
            >
              <ExpandIcon />
            </span>
          </VisuallyHidden>
        </div>
      </div>
      {/* Top End */}

      {/* SideBar Navigations */}
      <div className='pl-6 pr-4'>
        <DigitalCashNavigation />
      </div>
      {/* SideBar Navigations End */}
    </div>
  );
};

export default Sidebar;
