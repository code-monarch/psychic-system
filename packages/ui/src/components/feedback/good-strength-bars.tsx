import {IpasswordStrengthBars} from "../../types";

export const GoodStrengthBars = ({height, width}: IpasswordStrengthBars) => (
  <svg
    width={`${width! * 4 + 8 ?? "343"}`}
    height={height ?? "4"}
    viewBox={`0 0 ${width! * 4 + 8 ?? 343} ${height ?? 4}`}
    fill="none"
    style={{width: "100%"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_800_9142)">
      <rect width={width ?? 84.25} height={height ?? 4} fill="#32965D" />
      <rect
        width={width ?? 84.25}
        height={height ?? 4}
        fill="white"
        fillOpacity="0.3"
      />
      <rect
        x={width! * 1 + 2 ?? 86.25}
        width={width ?? 84.25}
        height={height ?? 4}
        fill="#32965D"
      />
      <rect
        x={width! * 1 + 2 ?? 86.25}
        width={width ?? 84.25}
        height={height ?? 4}
        fill="white"
        fillOpacity="0.3"
      />
      <rect
        x={width! * 2 + 4 ?? 172.5}
        width={width ?? 84.25}
        height={height ?? 4}
        fill="#32965D"
      />
      <rect
        x={width! * 2 + 4 ?? 172.5}
        width={width ?? 84.25}
        height={height ?? 4}
        fill="white"
        fillOpacity="0.3"
      />
      <rect
        x={width! * 3 + 6 ?? 258.75}
        width={width ?? 84.25}
        height={height ?? 4}
        fill="#F5F4F8"
      />
    </g>
    <defs>
      <clipPath id="clip0_800_9142">
        <rect
          width={width! * 4 + 8 ?? 343}
          height={height ?? 4}
          rx="2"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
