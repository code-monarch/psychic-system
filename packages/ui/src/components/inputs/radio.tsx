import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import classes from "../../design/radio.inputs.classes";
import {joinClasses} from "@emtech/utils";

export interface IRadioGroupClasses {
  base: string;
  radioItem: string;
  radioIndicator: string;
}

type RadioGroupPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Root
> & {
  className?: string;
};

type RadioGroupProps = RadioGroupPrimitiveProps;

const Radio = ({children, className, ...props}: RadioGroupProps) => (
  <RadioGroupPrimitive.Root
    {...props}
    className={joinClasses(classes.base, className)}
  >
    {children}
  </RadioGroupPrimitive.Root>
);

type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> & {
  className?: string;
};

type RadioGroupItemProps = RadioGroupItemPrimitiveProps;

const RadioItem = ({children, className, ...props}: RadioGroupItemProps) => (
  <RadioGroupPrimitive.Item
    {...props}
    className={joinClasses(
      "peer relative w-3 h-3 rounded-full border border-transparent text-white radix-state-checked:bg-white radix-state-checked:ring-offset-2 radix-state-checked:ring-semBlue600 radix-state-checked:ring-[2px] radix-state-unchecked:bg-white radix-state-unchecked:ring-[#433A81] radix-state-unchecked:ring-offset-2 radix-state-unchecked:ring-[2px] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-semBlue600 focus-visible:ring-offset-2",
      className
    )}
  >
    {children}
  </RadioGroupPrimitive.Item>
);

type RadioGroupIndicatorPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Indicator
> & {
  className?: string;
};

type RadioGroupIndicatorProps = RadioGroupIndicatorPrimitiveProps;

const RadioIndicator = ({
  children,
  className,
  ...props
}: RadioGroupIndicatorProps) => (
  <RadioGroupPrimitive.Indicator
    {...props}
    className={joinClasses(classes.radioIndicator, className)}
  >
    {children}
  </RadioGroupPrimitive.Indicator>
);

export {Radio, RadioItem, RadioIndicator};
