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
  isOnSpotlight?: boolean; // Determines whether Nav link is on Spotlight
  innerRef?: any;
}

const style = {
  active: `!w-[84px] flex items-center justify-start space-x-[8px] text-sm font-sans font-medium !whitespace-pre text-secondaryText`,
};

function NavLink({
  href,
  exact,
  children,
  isOnSpotlight,
  innerRef,
  ...props
}: INavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ` ${style.active}`;
  }

  return (
    <>
      <Link
        href={href}
        className={joinClasses(
          "!w-[84px] flex items-center justify-start space-x-[8px]",
          "text-sm font-sans font-medium !whitespace-pre",
          isOnSpotlight
            ? "font-bold !text-secondaryText"
            : "text-inputPlaceholder",
          props.className
        )}
        ref={innerRef}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

export default NavLink;
