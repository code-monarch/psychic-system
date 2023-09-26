import { IconProps } from "types";

export const BurnTokenIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_898_118863)'>
        <path
          d='M32 31.9993C37.3333 24.106 32 13.3327 29.3333 10.666C29.3333 18.7673 24.6053 23.3087 21.3333 26.666C18.064 30.026 16 35.306 16 39.9993C16 44.2428 17.6857 48.3125 20.6863 51.3131C23.6869 54.3136 27.7565 55.9994 32 55.9994C36.2435 55.9994 40.3131 54.3136 43.3137 51.3131C46.3143 48.3125 48 44.2428 48 39.9993C48 35.914 45.184 29.4927 42.6667 26.666C37.904 34.666 35.224 34.666 32 31.9993Z'
          stroke='url(#paint0_linear_898_118863)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_898_118863'
          x1='20.3636'
          y1='49.5232'
          x2='57.6707'
          y2='39.1511'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3FCC6A' />
          <stop offset='0.909375' stopColor='#174CFF' />
        </linearGradient>
        <clipPath id='clip0_898_118863'>
          <rect width='64' height='64' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
