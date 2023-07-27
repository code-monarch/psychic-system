import React, {ReactElement, ReactNode} from "react";
import {joinClasses} from "@emtech/utils";
import classes from "../../design/h-stack.layout.classes";

export interface IHstackClasses {
  base: string;
  gap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
  };
}

export interface IHstackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactElement;
  gap?: keyof IHstackClasses["gap"];
  className?: string;
}

export const Hstack = ({children, gap, ...props}: IHstackProps) => (
  <div
    {...props}
    className={joinClasses(
      classes.base,
      classes.gap[gap ?? "xs"],
      props.className
    )}
  >
    {children}
  </div>
);
