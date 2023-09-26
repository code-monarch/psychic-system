import { IconProps } from "types";

export const CreditIcon = ({ width, height, ...props }: IconProps) => {
  return (
    <>
      <svg
        width={width ?? '28'}
        height={height ?? '28'}
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <rect
          x='28'
          y='28'
          width='28'
          height='28'
          rx='14'
          transform='rotate(-180 28 28)'
          fill='#ECFAF0'
        />
        <g clipPath='url(#clip0_994_15515)'>
          <path
            d='M14 10.5L14 17.5'
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
          <clipPath id='clip0_994_15515'>
            <rect
              width='12'
              height='12'
              fill='white'
              transform='translate(20 8) rotate(90)'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
