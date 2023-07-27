import { joinClasses } from "@emtech/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

interface IInputLabelProps {
  children: React.ReactNode;
  labelfor: string;
  className?: string;
}

export const InputLabel = ({ children, ...props }: IInputLabelProps) => (
  <LabelPrimitive.Label
    {...props}
    htmlFor={`${props.labelfor}`}
    className={joinClasses(
      "select-none text-[18px] font-[400] font-serif text-[#554A68]",
      props.className
    )}
  >
    {children}
  </LabelPrimitive.Label>
);
