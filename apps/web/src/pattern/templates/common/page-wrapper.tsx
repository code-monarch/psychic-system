"use client"
import React, { ReactNode } from "react";
import Topbar from "./topbar";
import { joinClasses } from "@emtech/utils";

// Wrapper for pages that are not authentication pages
const PageWrapper = ({ children }: { children: ReactNode }) => {
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
          "bg-AppPagesBg pr-[40px] pb-[40px] mt-[60px]",
          "mx-[80px]"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
