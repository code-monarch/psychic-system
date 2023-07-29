"use client";
import BrandIcon from "@/public/icons/sidebar-nav-brand-name-icon.svg";
import SmallBrandIcon from "@/public/icons/small-brand-Icon.svg";
import Collapsible from "@/public/icons/collapsible-icon.svg";
import DashboardSidebarNavIcon from "@/ui/components/icons/sidebar-nav-icons/dashboard-sidebar-nav-icon";
import TransactionSidebarNavIcon from "@/ui/components/icons/sidebar-nav-icons/transaction-sidebar-nav-icon";
import ApiCallsSidebarNavIcon from "@/ui/components/icons/sidebar-nav-icons/api-calls-sidebar-nav-icon";
import AccountSidebarNavIcon from "@/ui/components/icons/sidebar-nav-icons/account-sidebar-nav-icon";
import { ActivityLogsSidebarNavIcon } from "@/ui/components/icons/sidebar-nav-icons/activity-logs-sidebar-nav-icon";
import { WEBSITE_URL } from "@/lib/constants";
import { joinClasses } from "@/lib/utils/join-classes";
import NavLink from "@/ui/components/navigation/custom-nav-link";
import Paragraph from "@/ui/components/typography/paragragh";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar";
import UserManagementSidebarNavIcon from "@/ui/components/icons/sidebar-nav-icons/user-management-sidebar-nav-icon";

// Put this in a data file
const navLinks = [
  {
    link: "Dashboard",
    href: "/",
    icon: <DashboardSidebarNavIcon />,
    tooltip: "Dashboard",
  },
  {
    link: "User management",
    href: "/user-management",
    icon: <UserManagementSidebarNavIcon />,
    tooltip: "User management",
  },
  {
    link: "Transaction",
    href: "/transactions",
    icon: <TransactionSidebarNavIcon />,
    tooltip: "Transaction",
  },
  {
    link: "API call logs",
    href: "/api-call-logs",
    icon: <ApiCallsSidebarNavIcon />,
    tooltip: "API-call-logs",
  },
  {
    link: "Account",
    href: "/account-settings",
    icon: <AccountSidebarNavIcon />,
    tooltip: "Account-settings",
  },
  {
    link: "Activity logs",
    href: "/activity-logs",
    icon: <ActivityLogsSidebarNavIcon />,
    tooltip: "Activity logs",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  const { isCollapsed, collapse } = useCollapseSidebar();
  return (
    <div
      className={joinClasses(
        "fixed left-0 top-0 bottom-0 !bg-white w-[282px] min-h-[100vh] z-[100] transition-all ease-in-out",
        isCollapsed && "!w-[80px]"
      )}
    >
      {/* Top */}
      <div className=' !bg-white py-[28px] border-b-[2px] border-dashboardBg'>
        <div className='flex justify-start space-x-[48px] pl-[24px] relative transition-all ease-in-out'>
          <a
            href={
              process.env.NODE_ENV !== "production" ? "/" : `${WEBSITE_URL}`
            }
          >
            {isCollapsed ? <SmallBrandIcon /> : <BrandIcon />}
          </a>
          {/* Toggle Nav icon */}
          {!isCollapsed && (
            <span
              className='cursor-pointer transition-all delay-700 duration-300 ease-in-out'
              onClick={() => {
                collapse();
              }}
            >
              <Collapsible />
            </span>
          )}
        </div>
      </div>
      {/* Top End */}
      <div className='flex flex-col space-y-[28px]'>
        {/* Create a component for this */}
        {navLinks.map((nav, index: React.Key | null | undefined) => (
          <div
            // className='transition-all duration-700 ease-in-out'
            className={joinClasses(
              "transition-all duration-700 ease-in-out",
              `${nav.link === "API Library" && "!cursor-not-allowed"}`
            )}
            title={`${nav.tooltip}`}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <NavLink
              href={`${nav.href}`}
              exact={nav.link === "Dashboard" && true}
            >
              <span>{nav.icon}</span>
              {isCollapsed ? (
                ""
              ) : (
                <Paragraph textsize='sm' className='whitespace-nowrap'>
                  {nav.link}
                </Paragraph>
              )}
              {/* Hide the External link Icon when sidebar is collapsed */}
              {nav.link === "API Library" && !isCollapsed && (
                <span className='!ml-[80px]'>
                  <ExternalLinkIcon
                    width={`${isCollapsed ? "15" : "20"}`}
                    height={`${isCollapsed ? "15" : "20"}`}
                    color={"#89868F"}
                  />
                </span>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
