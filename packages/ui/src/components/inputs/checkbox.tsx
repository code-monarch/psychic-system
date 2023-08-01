import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {CheckIcon} from "@radix-ui/react-icons";

import {joinClasses} from "@emtech/utils";

// New check box used for the remember me on login form
interface ICheckboxProps {
  value: string;
  required: boolean;
  defaultChecked?: boolean;
  name?: string;
  checked?: boolean; // UseState value from parent component: "true", "false" or "Indeterminate"
  onCheckedChange?: any;
  labelfor: string;
  labeltext: React.ReactNode;
  className?: string;
}

export const Checkbox = ({
  value,
  labelfor,
  labeltext,
  onCheckedChange,
  defaultChecked,
  checked,
  className,
  ...props
}: ICheckboxProps) => (
  <div className='flex items-center space-x-[10px] cursor-pointer'>
    <CheckboxPrimitive.Root
      {...props}
      id={`${labelfor}`}
      value={value}
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={joinClasses(
        "bg-transparent w-[21.33px] h-[21.33px] flex items-center justify-center border rounded-[4px]",
        "radix-state-checked:bg-transparent border-[#8499B1]",
        "focus:!ring-none focus:outline-none",
        className
      )}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon className={joinClasses("text-black")} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label
      htmlFor={`${labelfor}`}
      className={joinClasses(
        "font-[500] text-[0.75rem] text-[#8E8DA1] cursor-pointer",
        className
      )}
    >
      {labeltext}
    </label>
  </div>
);
