import React, { ReactNode } from "react";
import classes from "../../styles/header.classes";
import { joinClasses } from "@emtech/utils";

export interface IHeaderClasses {
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  weight: {
    light: string;
    regular: string;
    bold: string;
  };
  align: {
    left: string;
    right: string;
    center: string;
  };
}

interface IHeader
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  size?: keyof IHeaderClasses["size"];
  weight?: keyof IHeaderClasses["weight"];
  align?: keyof IHeaderClasses["align"];
  children: ReactNode;
}
export const Header = ({
  children,
  size,
  weight,
  align,
  className,
}: IHeader) => {
  return (
    <header
      className={joinClasses(
        classes.size[size ?? "xs"],
        classes.weight[weight ?? "regular"],
        classes.align[align ?? "left"],
        className
      )}
    >
      {children}
    </header>
  );
};
