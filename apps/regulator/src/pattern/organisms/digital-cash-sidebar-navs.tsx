"use client";
import React from "react";
import { joinClasses, useToggle } from "@emtech/utils";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Text,
} from "@emtech/ui";

import NavLink from "@/pattern/atoms/custom-nav-link";
import { DashboardSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/dashboard-sidebar-nav-icon";
import { WalletSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/wallet-sidebar-nav-icon";
import { TransactionsSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/transactions-sidebar-nav-icon";
import { RequestsSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/requests-sidebar-nav-icon";
import { CurrencyManagementSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/currency-management-sidebar-nav-icon";

import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar.hooks";
import { useSelector } from "react-redux";
import { GlobalState } from "@/redux/features/global-state";

const digitalCashNavLinks = [
  {
    link: "Dashboard",
    href: "/dashboard",
    Icon: DashboardSidebarNavIcon,
    tooltip: "Dashboard",
    tourId: "dashboard",
  },
  {
    link: "Wallet",
    href: "/wallet",
    Icon: WalletSidebarNavIcon,
    tooltip: "Wallet",
    tourId: "wallet",
  },
  {
    link: "Transactions",
    href: "/transactions",
    Icon: TransactionsSidebarNavIcon,
    tooltip: "Transactions",
    tourId: "transactions",
  },
  {
    link: "Requests",
    href: "/requests",
    Icon: RequestsSidebarNavIcon,
    tooltip: "Requests",
    tourId: "requests",
  },
  {
    link: "Currency Management",
    href: "/currency-management",
    Icon: CurrencyManagementSidebarNavIcon,
    tooltip: "Currency Management",
    tourId: "currency",
  },
];

const DigitalCashNavigation = () => {
  const { isCollapsed } = useCollapseSidebar();

  // Get current pathName
  const pathname = usePathname();
    const isActive = (url: string) => pathname.includes(url);

  // Determines whether Collapsible component is expanded or not.
  const [isOpen, setIsOpen] = useToggle(true);

  // Get value of appTourId from redux store
  const { appTourId, tour } = useSelector(GlobalState);

  /**
   *
   * @description
   * Determines when a Nav link is on Spotlight
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
    <Collapsible
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='bg-[#2E3844] px-[12.5px] pt-4 pb-5 space-y-[40px] rounded-[4px]'
    >
      {/* Collapsible Trigger */}
      <CollapsibleTrigger isOpen={isOpen}>
        <span className='text-white text-sm font-sans font-medium'>
          Digital Cash
        </span>
      </CollapsibleTrigger>
      {/* Collapsible Trigger End */}

      <CollapsibleContent className='flex flex-col space-y-[28px]'>
        <>
          {digitalCashNavLinks.map(
            (
              { Icon, tooltip, tourId, link, href },
              idx: React.Key | null | undefined
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
                  // exact={link === "Dashboard"}
                  isOnSpotlight={isOnSpotlight(tourId)}
                >
                  <span>
                    <Icon
                      width='24'
                      height='24'
                      color={
                        isActive(href!) || isOnSpotlight(tourId)
                          ? "#C0933E"
                          : "#8499B1"}
                    />
                  </span>
                  {isCollapsed ? "" : <Text textsize='xs'>{link}</Text>}
                </NavLink>
                {/* Navigation Link End */}
              </div>
            )
          )}
        </>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DigitalCashNavigation;
