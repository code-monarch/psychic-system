import React from "react";
import { IIconProps } from "@/pattern/types";

const ListIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 6H21"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 12H21"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 18H21"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6H3.01"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12H3.01"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 18H3.01"
        stroke={color ?? "#1E252D"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ListIcon;
