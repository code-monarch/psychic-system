"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IIconProps } from "@/pattern/types";

export const TransactionsSidebarNavIcon = ({
  color: iconColor,
  width,
  height,
  ...props
}: IIconProps) => {
  const [color, setColor] = useState<string>("#8499B1");

  const href = "/transactions";
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith(href) && !iconColor) {
      setColor("#C0933E");
    } else if (!pathname.startsWith(href) && !iconColor) {
      setColor("#8499B1");
    }
  }, [iconColor, pathname]);

  useEffect(() => {
    if (iconColor) {
      setColor(iconColor);
    }
  }, [iconColor, pathname]);

  return (
    <svg
      width={width ?? '24' }
      height={height ?? '24' }
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.5 10.091H19.5L13.6604 5.00009'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19.5 13.9091L5.5 13.9091L11.3396 19'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
