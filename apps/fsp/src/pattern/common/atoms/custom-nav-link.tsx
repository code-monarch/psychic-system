"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { joinClasses } from "@emtech/utils";

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exact?: boolean; // Determines whether link is exactly same route e.g: "dashboard" and not "dashboard/checkout"
  children: React.ReactNode;
  className?: string;
  innerRef?: any;
  linkClassName?: string;
  isOnSpotlight?: boolean; // Determines whether Nav link is on Spotlight
}

const style = {
  active: `!w-[84px] flex items-center justify-start space-x-[8px] text-sm font-sans font-medium !whitespace-pre text-secondaryText`,
};

function NavLink({
  href,
  exact,
  children,
  isOnSpotlight,
  className,
  linkClassName,
  innerRef,
}: INavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    linkClassName += ` ${style.active}`;
  }

  return (
    <div className={joinClasses("w-[84px]", className)}>
      <Link
        href={href}
        className={joinClasses(
          "w-full flex items-center justify-start space-x-[8px]",
          "text-sm font-sans font-medium !whitespace-pre",
          isOnSpotlight
            ? "font-bold !text-secondaryText"
            : "text-inputPlaceholder",
          linkClassName
        )}
        ref={innerRef}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLink;
