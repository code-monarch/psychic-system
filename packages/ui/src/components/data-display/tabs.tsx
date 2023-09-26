import React, { useEffect, useMemo, useState } from "react";
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
  innerRef?: any;
  pageTabs: string[]; // Array of tabs
  activeTab: string; // use State current active tab
  setActiveTab: any; // Set State for Current Active tab
}

const Tabs = ({
  defaultValue,
  className,
  children,
  innerRef,
  pageTabs,
  activeTab,
  setActiveTab,
  ...props
}: ITabProps) => {
  // Get the current URL
  const [href, setHref] = useState<string>("");
  console.log("HREF: ", href);
  const [url, setUrl] = useState<URL>();

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  useEffect(() => {
    if (href) {
      setUrl(new URL(href));
    }
  }, [href]);
  console.log("URL: ", url);

  // Create or update a query parameter
  let params = useMemo(() => new URLSearchParams(url?.search), []);

  console.log("PARAMS: ", params);

  console.log("ACTIVE TAB: ", activeTab);

  // Adds a tab Query Param When active tab changes
  useEffect(() => {
    // set the value if the parameter doesn't already exists
    params?.append("tab", activeTab);
    if (activeTab) {
      // Update the value if the parameter already exists
      params?.set("tab", activeTab);
    }
  }, [activeTab, params]);

  return (
    <TabsPrimitive.Root
      {...props}
      ref={innerRef}
      defaultValue={defaultValue}
      className={joinClasses(className)}
    >
      {children}
    </TabsPrimitive.Root>
  );
};
// Tab Root End

// Tab Content
interface ITabContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const TabsContent = ({ children, value, className }: ITabContentProps) => (
  <TabsPrimitive.Content
    value={value}
    className={joinClasses(className, "w-full h-full")}
  >
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
