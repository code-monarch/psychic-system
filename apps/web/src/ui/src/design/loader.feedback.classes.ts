import {ILoaderClasses} from "../components/feedback/loader";

export default <ILoaderClasses>{
  variant: {
    white: "text-primary-500",
    blue: "text-blue-500",
  },
  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16",
  },
  animation: {
    spin: "animate-spin",
  },
};
