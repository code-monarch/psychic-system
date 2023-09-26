import React from "react";
import { IIconProps } from "@/pattern/types";

const DigitalRegulationIcon = ({
  width,
  height,
  color,
  ...props
}: IIconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "26"}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.8495 17.7323V8.1696C22.849 7.75036 22.7384 7.33861 22.5286 6.97564C22.3188 6.61268 22.0172 6.31127 21.6541 6.10166L13.2867 1.32029C12.9233 1.11046 12.5111 1 12.0914 1C11.6718 1 11.2595 1.11046 10.8961 1.32029L2.52867 6.10166C2.1656 6.31127 1.86404 6.61268 1.65424 6.97564C1.44443 7.33861 1.33376 7.75036 1.33333 8.1696V17.7323C1.33376 18.1516 1.44443 18.5633 1.65424 18.9263C1.86404 19.2892 2.1656 19.5906 2.52867 19.8003L10.8961 24.5816C11.2595 24.7915 11.6718 24.9019 12.0914 24.9019C12.5111 24.9019 12.9233 24.7915 13.2867 24.5816L21.6541 19.8003C22.0172 19.5906 22.3188 19.2892 22.5286 18.9263C22.7384 18.5633 22.849 18.1516 22.8495 17.7323Z"
        stroke={color ?? "#8499B1"}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.65625 6.92773L12.0916 12.9642L22.5269 6.92773"
        stroke={color ?? "#8499B1"}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0938 25.0002V12.9512"
        stroke={color ?? "#8499B1"}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DigitalRegulationIcon;
