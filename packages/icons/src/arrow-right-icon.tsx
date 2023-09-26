import { IconProps } from "types";

export const ArrowRightIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox='0 0 16 16'
      fill='none'
    >
      <g clipPath='url(#clip0_1745_62684)'>
        <path
          d='M5.94531 12L9.94531 8'
          stroke='#1E252D'
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.94531 4L9.94531 8'
          stroke='#1E252D'
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1745_62684'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
