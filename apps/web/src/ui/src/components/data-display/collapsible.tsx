import React from "react";
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { joinClasses } from "@emtech/utils";
import { CollapsibleTriggerIcon } from "@emtech/icons";

// Collapsible Root
type CollapsiblePrimitiveProps = React.ComponentProps<
  typeof CollapsiblePrimitive.Root
> & {
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
};

type CollapsibleProps = CollapsiblePrimitiveProps;

/**
 * @description   
 * Component Anatomy: 
 * <Collapsible.Root>
 *  <Collapsible.Trigger />
 *  <Collapsible.Content />
 * </Collapsible.Root>
 */
const Collapsible = ({
  children,
  className,
  isOpen,
  setIsOpen,
  ...props
}: CollapsibleProps) => (
  <CollapsiblePrimitive.Root
    {...props}
    open={isOpen}
    onOpenChange={setIsOpen}
    className={joinClasses(className)}
  >
    {children}
  </CollapsiblePrimitive.Root>
);
// Collapsible Root

// Collapsible Trigger
type CollapsibleTriggerPrimitiveProps = React.ComponentProps<
  typeof CollapsiblePrimitive.Trigger
> & {
  className?: string;
  isOpen: boolean;
};

type CollapsibleTriggerProps = CollapsibleTriggerPrimitiveProps;

const CollapsibleTrigger = ({
  children,
  className,
  isOpen,
  ...props
}: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.Trigger
    asChild
    {...props}
    className={joinClasses("w-full", className)}
  >
    <button className='flex items-center justify-between '>
      <span>{children}</span>
      {isOpen ? (
        <CollapsibleTriggerIcon />
      ) : (
        <CollapsibleTriggerIcon rotate={true} />
      )}
    </button>
  </CollapsiblePrimitive.Trigger>
);
// Collapsible Trigger End

// Collapsible Content
type CollapsibleContentPrimitiveProps = React.ComponentProps<
  typeof CollapsiblePrimitive.Content
> & {
  className?: string;
};

type CollapsibleContentProps = CollapsibleContentPrimitiveProps;

const CollapsibleContent = ({
  children,
  className,
  ...props
}: CollapsibleContentProps) => (
  <CollapsiblePrimitive.Content
    {...props}
    className={joinClasses("CollapsibleContent", className)}
  >
    {children}
  </CollapsiblePrimitive.Content>
);
// Collapsible Content End

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
};
