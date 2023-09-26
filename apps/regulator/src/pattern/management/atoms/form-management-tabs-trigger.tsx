"use client"
import React, { FC, ReactNode } from "react";
import { joinClasses } from "@emtech/utils";
import * as Separator from "@radix-ui/react-separator";

interface IProps {
  tabValue: string;
  activeTab: string;
  className?: string;
  children: ReactNode;
}

const FormManagementTabsTrigger: FC<IProps> = ({
  tabValue,
  activeTab,
  className,
  children,
}) => {
  return (
    <div
      className={joinClasses(
        "h-fit flex items-center pl-4",
        activeTab === tabValue
          ? "border-b-2 border-b-primaryBlue"
          : "border-b-2 border-b-surfaceColor"
      )}
    >
      <div
        className={joinClasses(
          "flex items-center space-x-[8px] text-base whitespace-nowrap pb-4",
          activeTab === tabValue
            ? "text-primaryBlue font-[800]"
            : "text-black font-medium",
          className
        )}
      >
        {children}
      </div>
      <Separator.Root
        className='bg-surfaceColor h-[14px] w-[2px] ml-4 mb-1'
        decorative
        orientation='horizontal'
      />
    </div>
  );
};

export default FormManagementTabsTrigger;
