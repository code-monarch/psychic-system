import { IconProps } from "types";

export const BurnBtnIcon = ({ width, height, color, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? "18"}
      height={height ?? "18"}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_994_34101)'>
        <path
          d='M9 9C10.5 6.78 9 3.75 8.25 3C8.25 5.2785 6.92025 6.55575 6 7.5C5.0805 8.445 4.5 9.93 4.5 11.25C4.5 12.4435 4.97411 13.5881 5.81802 14.432C6.66193 15.2759 7.80653 15.75 9 15.75C10.1935 15.75 11.3381 15.2759 12.182 14.432C13.0259 13.5881 13.5 12.4435 13.5 11.25C13.5 10.101 12.708 8.295 12 7.5C10.6605 9.75 9.90675 9.75 9 9Z'
          stroke={color ?? '#F3F5F7'}
          strokeWidth='1.125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_994_34101'>
          <rect width='18' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
