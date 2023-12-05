import React from "react";
import { IIconProps } from "@/pattern/types";

const CbdcIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "25"}
      height={height ?? "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1419_73956)">
        <path
          d="M7.5 11C7.5 10.4696 7.71071 9.96086 8.08579 9.58579C8.46086 9.21071 8.96957 9 9.5 9H19.5C20.0304 9 20.5391 9.21071 20.9142 9.58579C21.2893 9.96086 21.5 10.4696 21.5 11V17C21.5 17.5304 21.2893 18.0391 20.9142 18.4142C20.5391 18.7893 20.0304 19 19.5 19H9.5C8.96957 19 8.46086 18.7893 8.08579 18.4142C7.71071 18.0391 7.5 17.5304 7.5 17V11Z"
          stroke={color ?? "#8499B1"}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 14C12.5 14.5304 12.7107 15.0391 13.0858 15.4142C13.4609 15.7893 13.9696 16 14.5 16C15.0304 16 15.5391 15.7893 15.9142 15.4142C16.2893 15.0391 16.5 14.5304 16.5 14C16.5 13.4696 16.2893 12.9609 15.9142 12.5858C15.5391 12.2107 15.0304 12 14.5 12C13.9696 12 13.4609 12.2107 13.0858 12.5858C12.7107 12.9609 12.5 13.4696 12.5 14Z"
          stroke={color ?? "#8499B1"}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 9V7C17.5 6.46957 17.2893 5.96086 16.9142 5.58579C16.5391 5.21071 16.0304 5 15.5 5H5.5C4.96957 5 4.46086 5.21071 4.08579 5.58579C3.71071 5.96086 3.5 6.46957 3.5 7V13C3.5 13.5304 3.71071 14.0391 4.08579 14.4142C4.46086 14.7893 4.96957 15 5.5 15H7.5"
          stroke={color ?? "#8499B1"}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1419_73956">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CbdcIcon;
