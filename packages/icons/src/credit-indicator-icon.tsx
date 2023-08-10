import { IconProps } from "types";

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
        <g clip-path='url(#clip0_359_32262)'>
          <path
            d='M14 10.5V17.5'
            stroke='#3FCC6A'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M11 14.5L14 17.5'
            stroke='#3FCC6A'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M17 14.5L14 17.5'
            stroke='#3FCC6A'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
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
