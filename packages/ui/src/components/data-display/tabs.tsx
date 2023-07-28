import React from "react";
import { joinClasses } from "@emtech/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// Tab Root
interface ITabProps {
  children: React.ReactNode;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (value: string) => void;
  defaultValue: string;
  className?: string;
}

const Tabs = ({ defaultValue, className, children, ...props }: ITabProps) => (
  <TabsPrimitive.Root
    {...props}
    defaultValue={defaultValue}
    className={joinClasses(className)}
  >
    {children}
  </TabsPrimitive.Root>
);
// Tab Root End

// Tab Content
interface ITabContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const TabsContent = ({ children, value, className }: ITabContentProps) => (
  <TabsPrimitive.Content value={value} className={joinClasses(className)}>
    {children}
  </TabsPrimitive.Content>
);
// Tab Content End

// Tab Trigger
interface ITabTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const TabsTrigger = ({ children, value, className }: ITabTriggerProps) => (
  <TabsPrimitive.Trigger value={value} className={joinClasses(className)}>
    {children}
  </TabsPrimitive.Trigger>
);
// Tab Trigger End

interface ITabListProps {
  children: React.ReactNode;
  arialabel: string;
  className?: string;
}

const TabsList = ({ children, arialabel, className }: ITabListProps) => (
  <TabsPrimitive.List aria-label={arialabel} className={joinClasses(className)}>
    {children}
  </TabsPrimitive.List>
);

export { Tabs, TabsContent, TabsTrigger, TabsList };
