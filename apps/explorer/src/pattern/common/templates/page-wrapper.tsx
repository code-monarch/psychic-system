"use client";
import React, { ReactNode } from "react";
import Topbar from "../organisms/topbar";
import { joinClasses } from "@emtech/utils";

// Wrapper for pages that are not authentication pages
const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={joinClasses(
        "relative flex flex-col bg-AppPagesBg w-[90%] max-w-[90%] h-full ml-[80px] transition-all duration-200 ease-in-out"
      )}
    >
      <Topbar />
      <main className='bg-AppPagesBg w-full flex justify-center mt-[88px]'>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
