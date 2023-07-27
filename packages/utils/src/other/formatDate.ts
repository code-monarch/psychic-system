import { IFormatDateProps } from "../types";

export const formatDate = ({ x }: IFormatDateProps) => {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(x);
  return date.toLocaleDateString("en-GB", options);
};
