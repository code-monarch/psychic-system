import { IconProps } from "types";

export const DebitIndicatorIcon = ({ ...props }: IconProps) => {
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
        <rect width='28' height='28' rx='14' fill='#FFEFEF' />
        <g clip-path='url(#clip0_359_32056)'>
          <path
            d='M14 17.5L14 10.5'
            stroke='#FF5A5C'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M17 13.5L14 10.5'
            stroke='#FF5A5C'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M11 13.5L14 10.5'
            stroke='#FF5A5C'
            stroke-width='1.125'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_359_32056'>
            <rect
              width='12'
              height='12'
              fill='white'
              transform='translate(8 20) rotate(-90)'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
