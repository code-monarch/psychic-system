import React from "react";
import { IIconProps } from "@/pattern/types";

const WalletIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1020_5336)">
        <path
          d="M16.9999 8V5C16.9999 4.73478 16.8945 4.48043 16.707 4.29289C16.5195 4.10536 16.2651 4 15.9999 4H5.9999C5.46947 4 4.96076 4.21071 4.58569 4.58579C4.21061 4.96086 3.9999 5.46957 3.9999 6M3.9999 6C3.9999 6.53043 4.21061 7.03914 4.58569 7.41421C4.96076 7.78929 5.46947 8 5.9999 8H17.9999C18.2651 8 18.5195 8.10536 18.707 8.29289C18.8945 8.48043 18.9999 8.73478 18.9999 9V12M3.9999 6V18C3.9999 18.5304 4.21061 19.0391 4.58569 19.4142C4.96076 19.7893 5.46947 20 5.9999 20H17.9999C18.2651 20 18.5195 19.8946 18.707 19.7071C18.8945 19.5196 18.9999 19.2652 18.9999 19V16"
          stroke={color ?? "#FCFCFC"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0001 12V16H16.0001C15.4697 16 14.961 15.7893 14.5859 15.4142C14.2108 15.0391 14.0001 14.5304 14.0001 14C14.0001 13.4696 14.2108 12.9609 14.5859 12.5858C14.961 12.2107 15.4697 12 16.0001 12H20.0001Z"
          stroke={color ?? "#FCFCFC"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1020_5336">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WalletIcon;
