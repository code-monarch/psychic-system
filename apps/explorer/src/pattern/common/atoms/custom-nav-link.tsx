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
  active: `!text-secondaryText`,
};

function NavLink({
  href,
  exact,
  children,
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
    <div className={joinClasses("w-fit h-full", className)}>
      <Link
        href={href}
        className={joinClasses(
          "placeholder:flex items-center justify-center",
          "text-base text-white font-sans font-medium",
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
