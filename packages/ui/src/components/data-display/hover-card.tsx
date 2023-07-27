import React, { ReactNode } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { joinClasses } from "@emtech/utils";

// Hover Card Root
interface IHoverCardProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Root> {
  children: ReactNode;
  defaultopen?: boolean;
  open?: boolean;
  onopenchange?: () => void;
  opendelay?: number;
  closedelay?: number;
}

const HoverCard = ({ children, opendelay, ...props }: IHoverCardProps) => (
  <HoverCardPrimitive.Root { ...props } openDelay={ opendelay ?? 0 }>
    {children}
  </HoverCardPrimitive.Root>
);
// Hover Card Root End

// Hover Card Portal
interface IHoverCardPortalProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Portal> {}

const HoverCardPortal = ({ children }: IHoverCardPortalProps) => (
  <HoverCardPrimitive.Portal>{children}</HoverCardPrimitive.Portal>
);
// Hover Card Portal End

// Hover Content
interface IHoverContentProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  sideoffset?: number;
  className?: string;
}

const HoverContent = ({ children, ...props }: IHoverContentProps) => (
  <HoverCardPrimitive.Content
    align={ props.align ?? 'center' }
    sideOffset={ props.sideoffset ?? 4 }
    // collisionPadding={left: 16, right: 16}
    className={ joinClasses(
      props.className,
      'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
      'rounded-[4px] z-[200]',
      'bg-white !shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]',
      // "focus:outline-none focus-visible:ring focus-visible:ring-purple-500
      //  focus-visible:ring-opacity-75"
    ) }
  >
    {/* <HoverCardPrimitive.Arrow className='fill-current text-red-500' /> */}
    {children}
  </HoverCardPrimitive.Content>
);
// Hover Content End

// Hover Trigger
interface IHoverTriggerProps {
  children: ReactNode;
  className?: string;
}

const HoverTrigger = ({ children, ...props }: IHoverTriggerProps) => (
  <HoverCardPrimitive.Trigger asChild>
    <div className={ joinClasses(props.className, 'inline-flex items-center') }>
      {children}
    </div>
  </HoverCardPrimitive.Trigger>
);
// Hover Trigger End

export {
  HoverCard, HoverCardPortal, HoverContent, HoverTrigger,
};
