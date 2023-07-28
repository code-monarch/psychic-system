import { IconProps } from "types";

export const PlusIcon = ({ width, height, color, ...props }: IconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={width ?? "20"}
      height={height ?? "20"}
      {...props}
    >
      <path d='M13 19v-6h6v-2h-6V5h-2v6H5v2h6v6h2z' fill={color ?? "#374151"} />
    </svg>
  );
};
