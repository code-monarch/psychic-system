import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconProps } from "types";

export const WalletSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = useState<string>("#433A81");

  const href = "/wallet";
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
      <g clip-path='url(#clip0_317_23535)'>
        <path
          d='M17.5 7.9996V4.9996C17.5 4.73439 17.3946 4.48003 17.2071 4.2925C17.0196 4.10496 16.7652 3.9996 16.5 3.9996H6.5C5.96957 3.9996 5.46086 4.21032 5.08579 4.58539C4.71071 4.96046 4.5 5.46917 4.5 5.9996M4.5 5.9996C4.5 6.53004 4.71071 7.03874 5.08579 7.41382C5.46086 7.78889 5.96957 7.9996 6.5 7.9996H18.5C18.7652 7.9996 19.0196 8.10496 19.2071 8.2925C19.3946 8.48003 19.5 8.73439 19.5 8.9996V11.9996M4.5 5.9996V17.9996C4.5 18.53 4.71071 19.0387 5.08579 19.4138C5.46086 19.7889 5.96957 19.9996 6.5 19.9996H18.5C18.7652 19.9996 19.0196 19.8942 19.2071 19.7067C19.3946 19.5192 19.5 19.2648 19.5 18.9996V15.9996'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20.5 12V16H16.5C15.9696 16 15.4609 15.7893 15.0858 15.4142C14.7107 15.0391 14.5 14.5304 14.5 14C14.5 13.4696 14.7107 12.9609 15.0858 12.5858C15.4609 12.2107 15.9696 12 16.5 12H20.5Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_317_23535'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
