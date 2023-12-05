import React from "react";
import { IIconProps } from "@/pattern/types";

const ChevronRightIcon = ({color, width, height, ...props}: IIconProps) => {
  return (
    <div>
      <svg
        width={width ?? "18"}
        height={height ?? "18"}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_777_10829)">
          <path
            d="M6.68994 13.5L11.1899 9"
            stroke={color ?? "#fff"}
            strokeWidth="1.4625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.68994 4.5L11.1899 9"
            stroke={color ?? "#fff"}
            strokeWidth="1.4625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_777_10829">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ChevronRightIcon;
