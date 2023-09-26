import React from "react";
import { IIconProps } from "@/pattern/types";

const ArrowRightIcon = ({ color, width, height, ...props }: IIconProps) => {
  return (
    <div>
      <svg
        width={width ?? "14"}
        height={height ?? "14"}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.98438 6.76172H10.5404"
          stroke={color ?? "#F3F5F7"}
          stroke-width="1.21436"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.30176 10L10.54 6.76172"
          stroke={color ?? "#F3F5F7"}
          stroke-width="1.21436"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.30176 3.52344L10.54 6.76172"
          stroke={color ?? "#F3F5F7"}
          stroke-width="1.21436"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowRightIcon;
