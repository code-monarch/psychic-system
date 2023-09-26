import React from "react";
import { IIconProps } from "../types";

const SideDrawerButton = ({ width, height, ...props }: IIconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill="url(#paint0_linear_57_38150)"
        fill-opacity="0.08"
      />
      <circle cx="12" cy="12" r="12" fill="url(#paint1_linear_57_38150)" />
      <circle
        cx="12"
        cy="12"
        r="11.8229"
        stroke="url(#paint2_linear_57_38150)"
        stroke-opacity="0.08"
        stroke-width="0.354167"
      />
      <defs>
        <linearGradient
          id="paint0_linear_57_38150"
          x1="5.49818"
          y1="17.7778"
          x2="22.995"
          y2="14.342"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D2A8C" />
          <stop offset="1" stop-color="#E8EDFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_57_38150"
          x1="3.27273"
          y1="20.5714"
          x2="29.3677"
          y2="10.2937"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D2A8C" />
          <stop offset="0.909375" stop-color="#2376FA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_57_38150"
          x1="2.66667"
          y1="4"
          x2="25.3333"
          y2="23.3333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2054AE" />
          <stop offset="1" stop-color="#264170" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SideDrawerButton;
