import React from "react";
import { joinClasses } from "@emtech/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

// Select Root
type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string) => void;
  children: React.ReactNode;
};

const Select = ({
  children,
  onValueChange,
  value,
  defaultValue,
}: SelectProps) => (
  <SelectPrimitive.Root
    onValueChange={onValueChange}
    value={value}
    defaultValue={defaultValue}
  >
    {children}
  </SelectPrimitive.Root>
);
//   Select Root End

//   Select Trigger
type SelectTriggerProps = React.ComponentProps<
  typeof SelectPrimitive.Trigger
> & {
  className?: string;
};

const SelectTrigger = ({ className, children }: SelectTriggerProps) => (
  <SelectPrimitive.Trigger
    className={joinClasses(
      className,
      "flex items-center space-x-[8px]",
      "radix-placeholder:text-[14px]",
      "radix-placeholder:text-inputPlaceholder",
      "focus-within:ring-none focus:!outline-none"
    )}
  >
    {children}
    {/* <DropdownIcon /> */}
  </SelectPrimitive.Trigger>
);
//   Select Trigger End

//   Select Value
type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value> & {
  className?: string;
  value: string;
  placeholder?: string;
};

const SelectValue = ({ className, value, placeholder }: SelectValueProps) => (
  <SelectPrimitive.Value
    aria-label={value}
    placeholder={placeholder ?? "Select"}
    className={joinClasses("radix-placeholder:text-[#8E8DA1]", className)}
  />
);
//   Select Value End

//   Select Content
type SelectContentProps = React.ComponentProps<
  typeof SelectPrimitive.Content
> & {
  className?: string;
};

const SelectContent = ({ className, children }: SelectContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      align='start'
      // alignOffset={ -20 }
      position='popper'
      className={joinClasses(
        className,
        "rounded-lg shadow-md",
        "radix-side-bottom:animate-slide-up radix-side-bottom:animate-slide-down",
        "radix-align-center",
        "min-w-[100px] h-fit min-h-[100px] rounded-lg shadow-md",
        "bg-white flex flex-col space-y-[16px]"
      )}
    >
      {children}
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);
//   Select Content End

//   Select Scroll Up
type SelectScrollUpProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollUpButton
> & {
  className?: string;
};

const SelectScrollUp = ({ className }: SelectScrollUpProps) => (
  <SelectPrimitive.ScrollUpButton className={joinClasses(className)}>
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
);
//   Select Scroll Up End

//   Select Scroll Down
type SelectScrollDownProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
> & {
  className?: string;
};

const SelectScrollDown = ({ className }: SelectScrollDownProps) => (
  <SelectPrimitive.ScrollDownButton className={joinClasses(className)}>
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
);
//   Select Scroll Down End

// Select Viewport
type SelectViewportProps = React.ComponentProps<
  typeof SelectPrimitive.Viewport
> & {
  className?: string;
};

const SelectViewport = ({ className, children }: SelectViewportProps) => (
  <SelectPrimitive.Viewport className={joinClasses(className)}>
    {children}
  </SelectPrimitive.Viewport>
);
//   Select Viewport End

//   Select Item
type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item> & {
  className?: string;
  value: string | number | boolean;
};

const SelectItem = ({ children, className, value }: SelectItemProps) => (
  <SelectPrimitive.Item
    className={joinClasses(
      className,
      "flex items-center justify-start space-x-[8px] cursor-pointer outline-none py-[8px] px-4",
      "text-black hover:bg-semSecondary",
      "radix-state-checked:bg-semSecondary radix-state-checked:text-white radix-state-checked:bg-[#0067FC]",
      "radix-highlighted:bg-[#F2F7FF] radix-highlighted:text-black"
    )}
    value={value}
  >
    {children}
  </SelectPrimitive.Item>
);
//   Select Item End

//   Select Item text
type SelectItemTextProps = React.ComponentProps<
  typeof SelectPrimitive.ItemText
> & {
  className?: string;
};

const SelectItemText = ({ children, className }: SelectItemTextProps) => (
  <SelectPrimitive.ItemText className={joinClasses(className)}>
    {children}
  </SelectPrimitive.ItemText>
);
//   Select Item text End

//   Select Item indicator
type SelectItemIndicatorProps = React.ComponentProps<
  typeof SelectPrimitive.ItemIndicator
> & {
  className?: string;
};

const SelectItemIndicator = ({ className }: SelectItemIndicatorProps) => (
  <SelectPrimitive.ItemIndicator className={joinClasses(className)}>
    <CheckIcon className='text-black' />
  </SelectPrimitive.ItemIndicator>
);
//   Select Item indicator End

//   Select Group
type SelectGroupProps = React.ComponentProps<typeof SelectPrimitive.Group> & {
  className?: string;
};

const SelectGroup = ({ children, className }: SelectGroupProps) => (
  <SelectPrimitive.Group className={joinClasses(className)}>
    {children}
  </SelectPrimitive.Group>
);
//   Select Group End

//   Select Label
type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label> & {
  className?: string;
};

const SelectLabel = ({ children, className }: SelectLabelProps) => (
  <SelectPrimitive.Label className={joinClasses(className)}>
    {children}
  </SelectPrimitive.Label>
);
//   Select Label End

//   Select Icon
type SelectIconProps = React.ComponentProps<typeof SelectPrimitive.Icon> & {
  className?: string;
};

const SelectIcon = ({ className }: SelectIconProps) => (
  <SelectPrimitive.Icon className={joinClasses(className)}>
    <ChevronDownIcon />
  </SelectPrimitive.Icon>
);
//   Select Icon End

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectLabel,
  SelectScrollUp,
  SelectScrollDown,
  SelectIcon,
};
