"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IIconProps } from "@/pattern/types";

export const RequestsSidebarNavIcon = ({ ...props }: IIconProps) => {
  const [color, setColor] = useState<string>("#433A81");

  const href = "/requests";
  const pathname = usePathname();
  // const isActive = pathname.startsWith(href);

  useEffect(() => {
    if (pathname.startsWith(href)) {
      setColor("#C0933E");
    } else {
      setColor("#8499B1");
    }
  }, [pathname]);

  return (
    <svg
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.83594 6.33392H10.3915M6.83594 11.6673H9.5026M6.83594 9.00059H12.1693'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
      />
      <path
        d='M1.81367 6.28945C2.39278 3.82063 4.32045 1.89296 6.78927 1.31385C8.57223 0.895627 10.4278 0.895627 12.2107 1.31385C14.6795 1.89296 16.6072 3.82064 17.1863 6.28946C17.6046 8.07241 17.6046 9.92796 17.1863 11.7109C16.6072 14.1797 14.6795 16.1074 12.2107 16.6865C10.4278 17.1047 8.57223 17.1047 6.78928 16.6865C4.32045 16.1074 2.39278 14.1797 1.81367 11.7109C1.39544 9.92796 1.39544 8.07241 1.81367 6.28945Z'
        stroke={color}
        stroke-width='1.5'
      />
    </svg>
  );
};
