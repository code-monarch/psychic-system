import React from "react";
import { joinClasses } from "@emtech/utils";

interface IFieldSetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const FieldSet = ({ children, className, ...props }: IFieldSetProps) => (
  <div
    {...props}
    className={joinClasses(
      className,
      "flex flex-col items-start space-y-[8px]"
    )}
  >
    {children}
  </div>
);
