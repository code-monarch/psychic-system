import React, {ReactElement, ReactNode} from "react";
import {joinClasses} from "@emtech/utils";
import classes from "../../design/full-width.layout.classes";

export interface IFullWidthClasses {
  base: string;
}

export interface IFullWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactElement;
  className?: string;
}

export const FullWidth = ({children, ...props}: IFullWidthProps) => (
  <div {...props} className={joinClasses(classes.base, props.className)}>
    {children}
  </div>
);
