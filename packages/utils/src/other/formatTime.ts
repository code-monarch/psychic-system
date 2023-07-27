import { IFormatToBritishNumberProps } from "../types";

export const formatTime = ({ x }: IFormatToBritishNumberProps) => {
  let date = new Date(x);
  return date.toLocaleTimeString("en-US");
};
