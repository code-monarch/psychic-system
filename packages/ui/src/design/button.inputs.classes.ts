import { IButtonClasses } from "../components/controls/button";

export default <IButtonClasses>{
  base: "flex justify-center items-center space-x-[10px] whitespace-nowrap border rounded-[8px] shadow-sm font-[600] tracking-[0.0004em] focus:outline-none focus:ring-none focus:ring-none select-none cursor-pointer motion-safe:transition-colors disabled:cursor-not-allowed firs_demibold",
  fullWidth: "w-full",
  size: {
    xs: "py-2 px-4 text-xs",
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-8 text-md",
    lg: "py-3 px-10 text-[1rem]",
    xl: "py-3 px-12 text-[1rem]",
    "2xl": "py-[20px] px-[40px] text-2xl",
  },
  variant: {
    primary:
      "bg-[#0067fc] text-white hover:bg-[#0067fc] hover:opacity-[30%] disabled:bg-[#D9D8E7] focus:ring-none border-none",
    secondary:
      "bg-[#F2F7FF] text-[#0067fc] disabled:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] disabled:text-white border-none",
    disabled:
      "bg-bg-[#D9D8E7] text-[#F5F4F8] hover:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] border-none",
    loading:
      "bg-[#0067FC] opacity-[30%] text-[#F5F4F8] focus:ring-none disabled:bg-[#D9D8E7] border-none cursor-disabled",
  },
};
