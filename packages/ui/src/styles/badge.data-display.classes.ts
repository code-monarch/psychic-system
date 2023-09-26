import {IBadgeClasses} from "../components/data-display/badge";

export default <IBadgeClasses>{
  base: "flex justify-center items-center font-[500] space-x-[8px] whitespace-nowrap focus:outline-none focus:ring-none select-none motion-safe:transition-colors",
  size: {
    xs: "py-1 px-2 text-xs",
    sm: "py-1 px-4 text-sm",
    md: "py-1 px-6 text-md",
    lg: "py-2 px-8 text-lg",
    xl: "py-2 px-10 text-xl",
    "2xl": "py-7 px-12 text-2xl",
  },
  rounded: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-[99px]",
    full: "!h-[28px] !w-[28px] rounded-[32px]",
  },
  variant: {
    white: "bg-white text-[#000] border border-surfaceColor",
    red: "bg-[#FFEFEF] text-[#FF5A5C] border border-[#FF5A5C]",
    green: "bg-[#ECFAF0] text-[#3FCC6A] border border-[#3FCC6A]",
    gold: "bg-[#F9F4EC] !text-[#C0933E] border border-[#C0933E]",
    primary: "bg-blue-500 text-white border border-blue-700",
    secondary: "bg-[#F2F7FF] text-[#000] border border-[#000]",
    black: "bg-[#000] text-white border border-[#000]",
    gray: "bg-[#F5F5F7] text-[#000] border border-[#000]",
  },
  border: {
    white: "border border-surfaceColor",
    red: "border border-[#FF5A5C]",
    green: "border border-[#3FCC6A]",
    gold: "border border-[#C0933E]",
    primary: "border border-blue-700",
    secondary: "border border-[#000]",
    black: "border border-[#000]",
    gray: "border border-[#000]",
  },
};
