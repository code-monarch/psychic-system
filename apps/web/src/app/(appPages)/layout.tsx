"use client"
import React from "react";
import Sidebar from "@/pattern/templates/common/sidebar";
import PageLayout from "@/pattern/templates/common/page-layout";
import { useCollapseSidebar } from "@/lib/hooks/useCollapseSideBar.hooks";
import { joinClasses } from "@emtech/utils";

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
      <PageLayout>{children}</PageLayout>
    </section>
  );
};

export default Layout;
