import React from "react";
import { joinClasses } from "@emtech/utils";
import classes from "../../styles/container.layout.classes";

export interface IContainerClasses {
  base: string;
}

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => (
  <div className={joinClasses(classes.base, className)}>{children}</div>
);
