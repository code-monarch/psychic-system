import {ITextClasses} from "../components/inputs/text";

export default <ITextClasses>{
  base: "m-0 whitespace-normal",
  alignment: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
  color: {
    black: "text-black",
    red: "text-red-500",
    blue: "text-blue-500",
    gray: "font-gray-900",
  },
  textsize: {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-5xl",
  },
};
