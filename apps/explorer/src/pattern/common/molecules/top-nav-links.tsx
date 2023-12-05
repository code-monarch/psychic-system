import React from "react";
import NavLink from "../atoms/custom-nav-link";

const navLinks = [
  {
    link: "Transactions",
    href: "/transactions",
  },
  {
    link: "Tokens",
    href: "/tokens",
  },
  {
    link: "Accounts",
    href: "/accounts",
  },
];

const TopNavLinks = () => {
  return (
    <div className='h-full flex items-center space-x-[40px]'>
      {navLinks?.map((navLink) => (
        <NavLink href={`${navLink.href}`}>{`${navLink.link}`}</NavLink>
      ))}
    </div>
  );
};

export default TopNavLinks;
