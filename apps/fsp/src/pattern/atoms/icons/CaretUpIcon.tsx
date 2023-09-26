import React from "react";
import { IIconProps } from "@/pattern/types";

const CaretUpIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "8"}
      height={height ?? "4"}
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 3.5L4 0.5L1 3.5L7 3.5Z"
        fill={color ?? "#FCFCFC"}
        stroke={color ?? "#FCFCFC"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CaretUpIcon;
