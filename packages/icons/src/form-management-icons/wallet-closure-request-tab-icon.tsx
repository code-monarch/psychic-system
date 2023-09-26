import { IconProps } from "types";

export const WalletClosureRequestTabIcon = ({
  width,
  height,
  color,
}: IconProps) => {
  return (
    <svg
      width={width ?? '18'}
      height={height ?? '18'}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2072_62372)'>
        <path
          d='M12.7504 6V3.75C12.7504 3.55109 12.6714 3.36032 12.5308 3.21967C12.3901 3.07902 12.1993 3 12.0004 3H6.00043M3.44068 3.438C3.2305 3.64765 3.08725 3.91496 3.02908 4.20608C2.97091 4.49719 3.00043 4.79902 3.1139 5.07335C3.22737 5.34768 3.4197 5.58216 3.66652 5.74712C3.91334 5.91208 4.20356 6.00009 4.50043 6H6.00043M9.00043 6H13.5004C13.6993 6 13.8901 6.07902 14.0308 6.21967C14.1714 6.36032 14.2504 6.55109 14.2504 6.75V9'
          stroke={color ?? '#2C3E50'}
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.25 14.25C14.25 14.4489 14.171 14.6397 14.0303 14.7803C13.8897 14.921 13.6989 15 13.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5V4.5'
          stroke={color ?? '#2C3E50'}
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 9H15V12M12 12C11.6022 12 11.2206 11.842 10.9393 11.5607C10.658 11.2794 10.5 10.8978 10.5 10.5'
          stroke={color ?? '#2C3E50'}
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.25 2.25L15.75 15.75'
          stroke={color ?? '#2C3E50'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2072_62372'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
