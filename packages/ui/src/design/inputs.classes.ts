import {IInputClasses} from "../components/inputs/input";

export default <IInputClasses>{
  base: "bg-[#F5F5F7] border-box font-sans motion-safe:transition-colors block w-full appearance-none rounded-md border border-gray-300 px-[16px] py-[13px] placeholder:text-[#6B6B86] placeholder:font-serif placeholder:text-[18px] shadow-sm focus-within:ring focus-within:ring-semprimary focus-within:ring-opacity-75 focus:outline-none text-[18px] disabled:cursor-not-allowed",
  passwordInputBase:
    "!w-full bg-[#F5F5F7] border-box font-sans motion-safe:transition-colors block w-full appearance-none rounded-md border border-gray-300 px-[16px] py-[13px] placeholder:text-[#6B6B86] placeholder:font-serif placeholder:text-[18px] shadow-sm focus-within:ring focus-within:ring-semprimary focus-within:ring-opacity-75 focus:outline-none text-[18px] disabled:cursor-not-allowed",
  authTokenInputBase:
    "!bg-transparent h-[50px] w-[50px] font-sans text-[#212934] flex items-center justify-center text-center tablets:py-[10px] tablets:px-[16px] !border-[1px] !border-semBlue600 rounded-[6px] mr-0",
  authTokenInputClicked:
    "border-semBlue600 shadow-[0px_0px_0px_3px_rgb(102,_87,_230,_0.35)] outline-none",
};
