import { IHeaderClasses } from "../components/typography/header";

export default <IHeaderClasses>{
  size: {
    xs: "text-[20px]",
    sm: "text-[24px]",
    md: "text-[30px]",
    lg: "text-[36px]",
    xl: "text-[48px]",
  },
  weight: {
    light: "font-[300]",
    regular: "font-[400]",
    bold: "font-[600]",
  },
  align: {
    right: "text-right ml-auto",
    left: "text-left mr-auto",
    center: "text-center mx-auto ",
  },
};
