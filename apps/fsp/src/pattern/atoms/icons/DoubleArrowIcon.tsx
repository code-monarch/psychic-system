import React from "react";
import { IIconProps } from "@/pattern/types";

const DoubleArrowIcon = ({ color, width, height, ...props }: IIconProps) => {
  return (
    <svg
      width={width ?? "13"}
      height={height ?? "12"}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.25 4.56818H11.75L7.37032 0.75"
        stroke={color ?? "#174CFF"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.75 7.43182L1.25 7.43182L5.62968 11.25"
        stroke={color ?? "#174CFF"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DoubleArrowIcon;
