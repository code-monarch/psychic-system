import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconProps } from "types";

export const DashboardSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = useState<string>("#433A81");

  const href = "/dashboard";
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.5 1.5H3.5C2.67157 1.5 2 2.17157 2 3V5C2 5.82843 2.67157 6.5 3.5 6.5H5.5C6.32843 6.5 7 5.82843 7 5V3C7 2.17157 6.32843 1.5 5.5 1.5ZM3.5 0C1.84315 0 0.5 1.34315 0.5 3V5C0.5 6.65685 1.84315 8 3.5 8H5.5C7.15685 8 8.5 6.65685 8.5 5V3C8.5 1.34315 7.15685 0 5.5 0H3.5Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.5 11.5001H3.5C2.67157 11.5001 2 12.1717 2 13.0001V15.0001C2 15.8285 2.67157 16.5001 3.5 16.5001H5.5C6.32843 16.5001 7 15.8285 7 15.0001V13.0001C7 12.1717 6.32843 11.5001 5.5 11.5001ZM3.5 10.0001C1.84315 10.0001 0.5 11.3432 0.5 13.0001V15.0001C0.5 16.6569 1.84315 18.0001 3.5 18.0001H5.5C7.15685 18.0001 8.5 16.6569 8.5 15.0001V13.0001C8.5 11.3432 7.15685 10.0001 5.5 10.0001H3.5Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M15.5 1.5H13.5C12.6716 1.5 12 2.17157 12 3V5C12 5.82843 12.6716 6.5 13.5 6.5H15.5C16.3284 6.5 17 5.82843 17 5V3C17 2.17157 16.3284 1.5 15.5 1.5ZM13.5 0C11.8431 0 10.5 1.34315 10.5 3V5C10.5 6.65685 11.8431 8 13.5 8H15.5C17.1569 8 18.5 6.65685 18.5 5V3C18.5 1.34315 17.1569 0 15.5 0H13.5Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M15.5 11.5001H13.5C12.6716 11.5001 12 12.1717 12 13.0001V15.0001C12 15.8285 12.6716 16.5001 13.5 16.5001H15.5C16.3284 16.5001 17 15.8285 17 15.0001V13.0001C17 12.1717 16.3284 11.5001 15.5 11.5001ZM13.5 10.0001C11.8431 10.0001 10.5 11.3432 10.5 13.0001V15.0001C10.5 16.6569 11.8431 18.0001 13.5 18.0001H15.5C17.1569 18.0001 18.5 16.6569 18.5 15.0001V13.0001C18.5 11.3432 17.1569 10.0001 15.5 10.0001H13.5Z'
        fill={color}
      />
    </svg>
  );
};
