"use client";
import React, { ReactNode } from "react";
import Topbar from "../organisms/topbar";
import { joinClasses } from "@emtech/utils";

// Wrapper for pages that are not authentication pages
const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={joinClasses(
        "relative flex flex-col items-center bg-AppPagesBg w-full min-h-[100vh] h-full transition-all duration-200 ease-in-out"
      )}
    >
      <Topbar />
      <main className='bg-white w-[95%] min-h-[100vh] flex justify-center my-[120px] pt-[34px] px-[48px] rounded-md'>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
