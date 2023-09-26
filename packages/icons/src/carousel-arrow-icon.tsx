import { FC } from "react";
import { ITranslateIcon } from "types";

export const CarouselArrowIcon: FC<ITranslateIcon> = ({
  translateX = false,
}) => {
  return (
    <span className='bg-[#1E252D] w-[36px] h-[36px] rounded-full flex items-center justify-center'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${translateX ? "rotate-180" : ""}`}
      >
        <g clipPath='url(#clip0_2012_34136)'>
          <path
            d='M9.08008 12L15.0801 18'
            stroke='#FCFCFC'
            strokeWidth='1.95'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.08008 12L15.0801 6'
            stroke='#FCFCFC'
            strokeWidth='1.95'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_2012_34136'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};
