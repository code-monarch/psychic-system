"use client";
import React from "react";
import { joinClasses } from "@emtech/utils";
import PageWrapper from "@/pattern/common/templates/page-wrapper";
import Sidebar from "@/pattern/common/organisms/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={joinClasses(
        "bg-surfaceColor w-screen min-h-screen flex justify-center items-start"
      )}
    >
      <Sidebar disableDismiss={true} />
      <PageWrapper>{children}</PageWrapper>
    </section>
  );
};

export default Layout;
