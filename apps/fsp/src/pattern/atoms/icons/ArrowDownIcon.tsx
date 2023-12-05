import React from "react";
import { IIconProps } from "@/pattern/types";

const ArrowDownIcon = ({ color, width, height, ...props }: IIconProps) => {
  return (
    <div>
      <svg
        width={width ?? "12"}
        height={height ?? "12"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_1333_19929)">
          <path
            d="M6 2.5L6 9.5"
            stroke={color ?? "#3FCC6A"}
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6.5L6 9.5"
            stroke={color ?? "#3FCC6A"}
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6.5L6 9.5"
            stroke={color ?? "#3FCC6A"}
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1333_19929">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(12) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
