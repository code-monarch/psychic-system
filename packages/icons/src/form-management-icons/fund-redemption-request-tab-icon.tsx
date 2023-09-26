import { IconProps } from "types";

export const FundingRedemptionRequestTabIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width ?? '18'}
      height={height ?? '18'}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2072_100640)'>
        <path
          d='M7.125 2.25H10.875C11.1734 2.25 11.4595 2.36853 11.6705 2.5795C11.8815 2.79048 12 3.07663 12 3.375C12 4.07119 11.7234 4.73887 11.2312 5.23115C10.7389 5.72344 10.0712 6 9.375 6H8.625C7.92881 6 7.26113 5.72344 6.76884 5.23115C6.27656 4.73887 6 4.07119 6 3.375C6 3.07663 6.11853 2.79048 6.3295 2.5795C6.54048 2.36853 6.82663 2.25 7.125 2.25Z'
          stroke={color ?? '#1E252D'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 12.75V12C3 10.4087 3.63214 8.88258 4.75736 7.75736C5.88258 6.63214 7.4087 6 9 6C10.5913 6 12.1174 6.63214 13.2426 7.75736C14.3679 8.88258 15 10.4087 15 12V12.75C15 13.5456 14.6839 14.3087 14.1213 14.8713C13.5587 15.4339 12.7956 15.75 12 15.75H6C5.20435 15.75 4.44129 15.4339 3.87868 14.8713C3.31607 14.3087 3 13.5456 3 12.75Z'
          stroke={color ?? '#1E252D'}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2072_100640'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

