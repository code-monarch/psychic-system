import * as React from "react";
import classes from "../../styles/badge.data-display.classes";
import { joinClasses } from "@emtech/utils";

export interface IBadgeClasses {
  base: string;
  border: {
    white: string;
    red: string;
    green: string;
    primary: string;
    secondary: string;
    black: string;
    gray: string;
    gold: string;
  };
  variant: {
    white: string;
    red: string;
    green: string;
    primary: string;
    secondary: string;
    black: string;
    gray: string;
    gold: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  rounded: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}
export interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof IBadgeClasses["size"];
  rounded?: keyof IBadgeClasses["rounded"];
  variant?: keyof IBadgeClasses["variant"];
  border?: boolean;
  className?: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <div
      {...props}
      className={joinClasses(
        classes.base,
        classes.variant[props.variant ?? "red"],
        classes.size[props.size ?? "sm"],
        classes.rounded[props.rounded ?? "md"],
        props.border && classes.border[props.variant ?? "red"],
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
