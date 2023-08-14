"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { joinClasses } from "@emtech/utils";

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Link Href value
  href: string;

  // Determines whether link is exactly same route e.g: "dashboard" and not "dashboard/checkout"
  exact?: boolean;

  children: React.ReactNode;

  // CSS classNAmes
  className?: string;

  // Determines whether Nav link is on Spotlight
  isOnSpotlight: boolean;
}

const style = {
  active: `!w-[84px] flex items-center justify-start space-x-[8px] text-sm font-sans font-medium !whitespace-pre text-secondaryText`,
};

function NavLink({
  href,
  exact,
  children,
  isOnSpotlight,
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
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

export default NavLink;
