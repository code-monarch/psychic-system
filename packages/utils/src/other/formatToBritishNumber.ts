import { IFormatToBritishNumberProps } from "../types";

export const formatToBritishNumber = ({ x }: IFormatToBritishNumberProps) =>
  x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
