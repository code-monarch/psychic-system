"use client"
import React, { ReactNode } from "react";
import Topbar from "./topbar";
import { joinClasses } from "@emtech/utils";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={joinClasses(
        "flex flex-col bg-AppPagesBg w-full h-full transition-all duration-200 ease-in-out",
        "ml-[80px]"
      )}
    >
      <Topbar />
      <main
        className={joinClasses(
          "bg-AppPagesBg !h-fit pr-[40px] pb-[40px] mt-[60px] desktop:mt-[110px]",
          "ml-[80px]"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
