import React from "react";
import { joinClasses } from "@emtech/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type PopoverRootProps = React.ComponentProps<typeof PopoverPrimitive.Root>;

const PopOver = ({ children, ...props }: PopoverRootProps) => (
  <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);

type PopoverTriggerProps = React.ComponentProps<
  typeof PopoverPrimitive.Trigger
> & {
  className?: string;
};

const PopOverTrigger = ({
  children,
  className,
  ...props
}: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger
    {...props}
    asChild
    className={joinClasses(className)}
  >
    {children}
  </PopoverPrimitive.Trigger>
);

type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
> & {
  className?: string;
  showCloseIcon?: boolean;
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

const PopOverContent = ({
  children,
  className,
  showCloseIcon = true,
  align,
  sideOffset,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Content
    {...props}
    align={align ?? "center"}
    sideOffset={sideOffset ?? 4}
    className={joinClasses(
      "bg-white w-fit min-w-[410px] h-fit min-h-[100px] rounded-[18px] shadow-sm z-[50]",
      "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
      className
    )}
  >
    <PopoverPrimitive.Arrow className='fill-current text-white' />
    {children}

    {showCloseIcon && (
      <PopoverPrimitive.Close
        className={joinClasses(
          "absolute top-6 left-6 inline-flex items-center justify-center rounded-full p-1",
          "focus:outline-none focus-visible:!ring-0",
          className
        )}
      >
        <Cross1Icon className='h-3 w-3 text-[#000]' />
      </PopoverPrimitive.Close>
    )}
  </PopoverPrimitive.Content>
);

// Pop Over Portal
type PopoverPortalProps = React.ComponentProps<
  typeof PopoverPrimitive.Portal
> & {
  className?: string;
  container?: HTMLElement | null | undefined;
};

const PopOverPortal = ({
  children,
  className,
  container,
  ...props
}: PopoverPortalProps) => (
  <PopoverPrimitive.Portal
    {...props}
    container={container}
    className={joinClasses(className)}
  >
    {children}
  </PopoverPrimitive.Portal>
);

export { PopOver, PopOverTrigger, PopOverContent, PopOverPortal };
