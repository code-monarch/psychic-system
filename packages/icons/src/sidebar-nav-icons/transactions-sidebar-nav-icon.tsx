import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconProps } from "types";

export const TransactionsSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = useState<string>("#433A81");

  const href = "/transactions";
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
      width='25'
      height='24'
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
