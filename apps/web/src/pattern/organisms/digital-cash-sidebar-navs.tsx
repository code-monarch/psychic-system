"use client"
import React from "react";
import { joinClasses, useToggle } from "@emtech/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, Text } from "@/ui";

import NavLink from "@/pattern/atoms/custom-nav-link";
import { DashboardSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/dashboard-sidebar-nav-icon";
import { WalletSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/wallet-sidebar-nav-icon";
import { TransactionsSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/transactions-sidebar-nav-icon";
import { RequestsSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/requests-sidebar-nav-icon";
import { CurrencyManagementSidebarNavIcon } from "@/pattern/atoms/icons/sidebar-nav-icons/currency-management-sidebar-nav-icon";

import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar.hooks";

const digitalCashNavLinks = [
  {
    link: "Dashboard",
    href: "/dashboard",
    icon: <DashboardSidebarNavIcon />,
    tooltip: "Dashboard",
  },
  {
    link: "Wallet",
    href: "/wallet",
    icon: <WalletSidebarNavIcon />,
    tooltip: "Wallet",
  },
  {
    link: "Transactions",
    href: "/transactions",
    icon: <TransactionsSidebarNavIcon />,
    tooltip: "Transactions",
  },
  {
    link: "Requests",
    href: "/requests",
    icon: <RequestsSidebarNavIcon />,
    tooltip: "Requests",
  },
  {
    link: "Currency Management",
    href: "/currency-management",
    icon: <CurrencyManagementSidebarNavIcon />,
    tooltip: "Currency Management",
  },
];

const DigitalCashNavigation = () => {
  const { isCollapsed } = useCollapseSidebar();
  const [isOpen, setIsOpen] = useToggle(false);

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
            (nav, index: React.Key | null | undefined) => (
              <div
                className={joinClasses(
                  "transition-all duration-700 ease-in-out"
                )}
                title={`${nav.tooltip}`}
                key={index}
              >
                {/* Navigation Link */}
                <NavLink
                  href={`${nav.href}`}
                  exact={nav.link === "Dashboard" && true}
                >
                  <span>{nav.icon}</span>
                  {isCollapsed ? "" : <Text textsize='xs'>{nav.link}</Text>}
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
