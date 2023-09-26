import { FC } from "react";
import { ITranslateIcon } from "types";

export const PaginationIcon: FC<ITranslateIcon> = ({
  translateX = false,
  width,
  height,
  color,
}) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${translateX ? "rotate-180" : ""}`}
    >
      <g clipPath='url(#clip0_1191_109226)'>
        <path
          d='M5 12H19'
          stroke={color ?? "#174CFF"}
          strokeWidth='2.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 18L19 12'
          stroke={color ?? "#174CFF"}
          strokeWidth='2.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 6L19 12'
          stroke={color ?? "#174CFF"}
          strokeWidth='2.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1191_109226'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
