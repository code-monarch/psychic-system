import * as React from "react";

export type ButtonAlignment = "left" | "right" | "center";
export type ButtonWeight = "solid" | "shaded" | "outlined" | "ghost" | "inline";
export type ButtonType = "button" | "reset" | "submit";
export type ButtonShape = "pill" | "brick";
export type ButtonSize = "small" | "medium" | "large" | "relative";
export interface ISpinnerIconClasses {
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  animation: {
    spin: string;
  };
}
export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}
