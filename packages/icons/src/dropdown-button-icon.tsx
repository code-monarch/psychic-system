import { IconProps } from "types";

export const DropdownButtonIcon = ({
  width,
  height,
  color,
  ...props
}: IconProps) => {
  return (
    <>
      <svg
        width={width ?? "72"}
        height={height ?? "37"}
        viewBox='0 0 72 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M42 20.5C43.1 20.5 44 19.6 44 18.5C44 17.4 43.1 16.5 42 16.5C40.9 16.5 40 17.4 40 18.5C40 19.6 40.9 20.5 42 20.5Z'
          fill={color ?? "#8499B1"}
        />
        <path
          d='M36 20.5C37.1 20.5 38 19.6 38 18.5C38 17.4 37.1 16.5 36 16.5C34.9 16.5 34 17.4 34 18.5C34 19.6 34.9 20.5 36 20.5Z'
          fill={color ?? "#8499B1"}
        />
        <path
          d='M29.9961 20.5C31.0961 20.5 31.9961 19.6 31.9961 18.5C31.9961 17.4 31.0961 16.5 29.9961 16.5C28.8961 16.5 27.9961 17.4 27.9961 18.5C27.9961 19.6 28.8961 20.5 29.9961 20.5Z'
          fill={color ?? "#8499B1"}
        />
        <rect
          x='0.5'
          y='0.5'
          width='71'
          height='36'
          rx='3.5'
          stroke={color ?? "#8499B1"}
        />
      </svg>
    </>
  );
};
