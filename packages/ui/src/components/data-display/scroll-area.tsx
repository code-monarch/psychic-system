import React from "react";
import { joinClasses } from "@emtech/utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

// ScrollArea Root
type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  asChild?: boolean;
  type?: "auto" | "always" | "scroll" | "hover";
  scrollHideDelay?: number;
  dir?: "ltr" | "rtl";
  className?: string;
  children: React.ReactNode;
};

const ScrollArea = ({
  children,
  className,
  asChild,
  type,
  scrollHideDelay,
  dir,
}: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root
    asChild={asChild ?? false}
    type={type ?? "hover"}
    scrollHideDelay={scrollHideDelay ?? 600}
    dir={dir}
    className={className}
  >
    {children}
  </ScrollAreaPrimitive.Root>
);
//   ScrollArea Root End

//   ScrollArea Viewport
type ScrollAreaViewportProps = React.ComponentProps<
  typeof ScrollAreaPrimitive.Viewport
> & {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
};

const ScrollAreaViewport = ({
  className,
  asChild,
  children,
}: ScrollAreaViewportProps) => (
  <ScrollAreaPrimitive.Viewport
    asChild={asChild ?? false}
    className={joinClasses(className)}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
);
//   ScrollArea Viewport End

//   ScrollArea Scrollbar
type ScrollAreaScrollbarProps = React.ComponentProps<
  typeof ScrollAreaPrimitive.Scrollbar
> & {
  className?: string;
  orientation: "horizontal" | "vertical";
  asChild?: boolean;
  forceMount?: boolean;
};

const ScrollAreaScrollbar = ({
  className,
  orientation,
  asChild,
}: ScrollAreaScrollbarProps) => (
  <ScrollAreaPrimitive.Scrollbar
    orientation={orientation ?? "vertical"}
    asChild={asChild ?? false}
    className={joinClasses(
      "flex ScrollArea-none touch-none p-0.5 bg-[#F5F4F8] transition-colors duration-[160ms] ease-out hover:bg-[#ecebf0] radix-orientation-vertical:w-2.5 radix-orientation-horizontal:flex-col radix-orientation-horizontal:h-2.5",
      className
    )}
  >
    <ScrollAreaPrimitive.Thumb className="flex-1 bg-[#C1C0D8] rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
  </ScrollAreaPrimitive.Scrollbar>
);
//   ScrollArea Scrollbar End

//   ScrollArea ScrollCorner
type ScrollAreaScrollCornerProps = React.ComponentProps<
  typeof ScrollAreaPrimitive.Corner
> & {
  className?: string;
  asChild?: boolean;
};

const ScrollAreaScrollCorner = ({
  className,
  asChild,
}: ScrollAreaScrollCornerProps) => (
  <ScrollAreaPrimitive.Corner
    asChild={asChild ?? false}
    className={joinClasses("bg-[#ecebf0]", className)}
  />
);
//   ScrollArea ScrollCorner End

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaScrollCorner,
};