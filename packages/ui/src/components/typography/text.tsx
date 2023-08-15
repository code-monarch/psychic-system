import * as React from "react";
import classes from "../../styles/text.inputs.classes";
import { joinClasses } from "@emtech/utils";

export interface ITextClasses {
  base: string;
  alignment: {
    left: string;
    center: string;
    right: string;
  };
  color: {
    black: string;
    red: string;
    blue: string;
    gray: string;
  };
  textsize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}
export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  align?: keyof ITextClasses["alignment"];
  color?: keyof ITextClasses["color"];
  textsize?: keyof ITextClasses["textsize"];
}

export const Text = ({
  className,
  align,
  color,
  textsize,
  children,
}: ITextProps) => {
  return (
    <p
      className={joinClasses(
        classes.base,
        classes.alignment[align ?? "left"],
        classes.color[color ?? "gray"],
        classes.textsize[textsize ?? "2xl"],
        textsize,
        className
      )}
    >
      {children}
    </p>
  );
};
