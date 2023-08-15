import React from "react";
import { joinClasses } from "@emtech/utils";
import classes from "../../styles/loader.feedback.classes";

export interface ILoaderClasses {
  variant: {
    white: string;
    blue: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}

export interface ILoaderProps extends React.HTMLAttributes<HTMLElement> {
  size?: keyof ILoaderClasses["size"];
  variant?: keyof ILoaderClasses["variant"];
}

export const Loader = ({ size, variant }: ILoaderProps) => {
  return (
    <span
      className={joinClasses(
        "inline-block align-middle border-[4px] border-white rounded-[50%]",
        "w-[24px] height-[24px]",
        "animate-spin",
        classes.variant[variant ?? "white"],
        classes.size[size ?? "md"]
      )}
    ></span>
  );
};
