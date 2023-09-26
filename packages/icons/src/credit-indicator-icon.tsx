import { IconProps } from "types";

// Different from "./credit-icon" because this is just the upward pointing arrow
export const CreditIndicatorIcon = ({ ...props }: IconProps) => {
  return (
    <>
      <svg
        width='28'
        height='28'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <rect width='28' height='28' rx='14' fill='#ECFAF0' />
        <g clipPath='url(#clip0_359_32262)'>
          <path
            d='M14 10.5V17.5'
            stroke='#3FCC6A'
            strokeWidth='1.125'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11 14.5L14 17.5'
            stroke='#3FCC6A'
            strokeWidth='1.125'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17 14.5L14 17.5'
            stroke='#3FCC6A'
            strokeWidth='1.125'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_359_32262'>
            <rect
              width='12'
              height='12'
              fill='white'
              transform='matrix(0 1 -1 0 20 8)'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
