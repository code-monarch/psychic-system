import React, {ReactNode} from "react";
import classes from "../../design/header.classes";
import {IHeaderClasses} from "../../types";
import {joinClasses} from "@emtech/utils";

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
export const Header = ({children, size, weight, align, className}: IHeader) => {
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
