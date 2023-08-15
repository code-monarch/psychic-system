import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import classes from "../../styles/accordion.data-display.classes";
import { joinClasses } from "@emtech/utils";

export interface IAccordionClasses {
  base: string;
  accordionItem: string;
  accordionHeader: string;
  accordionTrigger: string;
  accordionArrow: string;
  accordionContent: string;
}

// Accordion Root
type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
> & {
  className?: string;
  type?: string;
};

type AccordionProps = AccordionPrimitiveProps;

const Accordion = ({ children, className, type }: AccordionProps) => (
  <AccordionPrimitive.Root
    type={type}
    className={joinClasses(classes.base, className)}
  >
    {children}
  </AccordionPrimitive.Root>
);
// Accordion Root

// Accordion Item
type AccordionItemPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  className?: string;
};

type AccordionItemProps = AccordionItemPrimitiveProps;

const AccordionItem = ({
  children,
  className,
  ...props
}: AccordionItemProps) => (
  <AccordionPrimitive.Item
    {...props}
    className={joinClasses(classes.accordionItem, className)}
  >
    {children}
  </AccordionPrimitive.Item>
);
// Accordion Item End

// Accordion Header
type AccordionHeaderPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Header
> & {
  className?: string;
};

type AccordionHeaderProps = AccordionHeaderPrimitiveProps;

const AccordionHeader = ({
  children,
  className,
  ...props
}: AccordionHeaderProps) => (
  <AccordionPrimitive.Header
    {...props}
    className={joinClasses(classes.accordionHeader, className)}
  >
    {children}
  </AccordionPrimitive.Header>
);
// Accordion Header End

// Accordion Trigger
type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  className?: string;
};

type AccordionTriggerProps = AccordionTriggerPrimitiveProps;

const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionTriggerProps) => (
  <AccordionPrimitive.Trigger
    {...props}
    className={joinClasses(classes.accordionTrigger, className)}
  >
    {children}
  </AccordionPrimitive.Trigger>
);
// Accordion Trigger End

// Accordion Content
type AccordionContentPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
> & {
  className?: string;
};

type AccordionContentProps = AccordionContentPrimitiveProps;

const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentProps) => (
  <AccordionPrimitive.Content
    {...props}
    className={joinClasses(classes.accordionContent, className)}
  >
    {children}
  </AccordionPrimitive.Content>
);
// Accordion Content End

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
