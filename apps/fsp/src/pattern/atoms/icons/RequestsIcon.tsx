import React from "react";
import { IIconProps } from "@/pattern/types";

const RequestsIcon = ({width, height, color, ...props}: IIconProps) => {
  return (
    <svg
      width={width ?? "19"}
      height={height ?? "18"}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.83594 6.33398H10.3915M6.83594 11.6673H9.5026M6.83594 9.00065H12.1693"
        stroke={color ?? "#8499B1"}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1.81367 6.28927C2.39278 3.82045 4.32045 1.89277 6.78927 1.31367C8.57223 0.895444 10.4278 0.895444 12.2107 1.31367C14.6795 1.89278 16.6072 3.82045 17.1863 6.28928C17.6046 8.07223 17.6046 9.92777 17.1863 11.7107C16.6072 14.1795 14.6795 16.1072 12.2107 16.6863C10.4278 17.1046 8.57223 17.1046 6.78928 16.6863C4.32045 16.1072 2.39278 14.1796 1.81367 11.7107C1.39544 9.92777 1.39544 8.07223 1.81367 6.28927Z"
        stroke={color ?? "#8499B1"}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default RequestsIcon;
