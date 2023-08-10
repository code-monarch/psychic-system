import { IconProps } from "types";

export const TransactionsIcon = ({
  width,
  height,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? "12"}
      height={height ?? "12"}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.75 4.56818H11.25L6.87032 0.75'
        stroke={color ?? "#174CFF"}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.25 7.43182L0.750003 7.43182L5.12968 11.25'
        stroke={color ?? "#174CFF"}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

