import React from "react";
import { IIconProps } from "@/pattern/types";

const MoneyBagIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "22"}
      height={height ?? "22"}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1438_27116)">
        <path
          d="M8.70898 2.75H13.2923C13.657 2.75 14.0067 2.89487 14.2646 3.15273C14.5225 3.41059 14.6673 3.76033 14.6673 4.125C14.6673 4.9759 14.3293 5.79195 13.7276 6.39363C13.1259 6.99531 12.3099 7.33333 11.459 7.33333H10.5423C9.69141 7.33333 8.87536 6.99531 8.27368 6.39363C7.672 5.79195 7.33398 4.9759 7.33398 4.125C7.33398 3.76033 7.47885 3.41059 7.73671 3.15273C7.99457 2.89487 8.34431 2.75 8.70898 2.75Z"
          stroke={color ?? "#1E252D"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.66602 15.584V14.6673C3.66602 12.7224 4.43863 10.8571 5.8139 9.48187C7.18917 8.1066 9.05443 7.33398 10.9993 7.33398C12.9443 7.33398 14.8095 8.1066 16.1848 9.48187C17.5601 10.8571 18.3327 12.7224 18.3327 14.6673V15.584C18.3327 16.5564 17.9464 17.4891 17.2587 18.1767C16.5711 18.8643 15.6385 19.2506 14.666 19.2506H7.33268C6.36022 19.2506 5.42759 18.8643 4.73996 18.1767C4.05232 17.4891 3.66602 16.5564 3.66602 15.584Z"
          stroke={color ?? "#1E252D"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g clipPath="url(#clip1_1438_27116)">
        <path
          d="M11 15.125V11.275"
          stroke={color ?? "#1E252D"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.07422 13.1992H12.9242"
          stroke={color ?? "#1E252D"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1438_27116">
          <rect width="22" height="22" fill="white" />
        </clipPath>
        <clipPath id="clip1_1438_27116">
          <rect
            width="6.6"
            height="6.6"
            fill="white"
            transform="matrix(1 0 0 -1 7.69922 16.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoneyBagIcon;
