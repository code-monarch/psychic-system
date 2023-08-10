import {IBadgeClasses} from "../components/data-display/badge";

export default <IBadgeClasses>{
  base: "flex justify-center items-center space-x-[8px] whitespace-nowrap focus:outline-none focus:ring-none select-none motion-safe:transition-colors",
  size: {
    xs: "py-2 px-2 text-xs",
    sm: "py-3 px-3 text-sm",
    md: "py-4 px-4 text-md",
    lg: "py-5 px-5 text-lg",
    xl: "py-6 px-6 text-xl",
    "2xl": "py-7 px-7 text-2xl",
  },
  rounded: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-[99px]",
    full: "!h-[28px] !w-[28px] rounded-[32px]",
  },
  variant: {
    white: "bg-white text-[#000]",
    red: "bg-[#FFEFEF] text-[#FF5A5C]",
    green: "bg-[#ECFAF0] text-[#3FCC6A]",
    gold: "bg-[#F9F4EC] !text-[#C0933E]",
    primary: "bg-blue-500 text-white",
    secondary: "bg-[#F2F7FF] text-[#000]",
    black: "bg-[#000] text-white",
    gray: "bg-[#F5F5F7] text-[#000]",
  },
};
