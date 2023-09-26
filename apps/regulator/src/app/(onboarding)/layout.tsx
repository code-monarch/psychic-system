"use client";
import React from "react";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar";
import { joinClasses } from "@emtech/utils";
import Sidebar from "@/pattern/common/organisms/sidebar";
import PageWrapper from "@/pattern/common/templates/page-wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useCollapseSidebar();
  return (
    <section
      className={joinClasses(
        "bg-surfaceColor w-screen min-h-screen flex justify-center items-start",
        !isCollapsed && "ml-[80px]"
      )}
    >
      <Sidebar />
      <PageWrapper>{children}</PageWrapper>
    </section>
  );
};

export default Layout;
