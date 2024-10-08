import { IButtonClasses } from "../components/controls/button";

export default <IButtonClasses>{
  base: "flex justify-center items-center space-x-[10px] whitespace-nowrap border rounded-[4px] shadow-sm font-[600] tracking-[0.0004em] focus:outline-none focus:ring-none focus:ring-none select-none cursor-pointer motion-safe:transition-colors disabled:cursor-not-allowed",
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
      "bg-[#174CFF] text-white hover:bg-[#174CFF] hover:opacity-[30%] disabled:ring-none border-none",
    secondary:
      "bg-[#F2F7FF] text-[#0067fc] disabled:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] disabled:text-white border-none",
    transparent:
      "bg-transparent text-[#174CFF] disabled:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] disabled:text-white border border-[#174CFF]",
    red_outline:
      "bg-transparent text-[#FF5A5C] hover:text-white hover:!bg-[#FF5A5C] disabled:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] disabled:text-white border border-[#FF5A5C]",
    blue_outline:
      "bg-transparent text-[#174CFF] hover:text-white hover:!bg-[#174CFF] disabled:bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] disabled:text-white border border-[#174CFF]",
    disabled:
      "bg-[#D9D8E7] text-[#F5F4F8] hover:!bg-[#D9D8E7] focus:ring-none disabled:bg-[#D9D8E7] border-none",
    loading:
      "!bg-[#0067FC] !opacity-[30%] !text-[#F5F4F8] focus:!ring-none disabled:!bg-[#D9D8E7] !border-none !cursor-disabled",
  },
};
