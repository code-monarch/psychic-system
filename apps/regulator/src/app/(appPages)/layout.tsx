import React from "react";
import { joinClasses } from "@emtech/utils";
import Sidebar from "@/pattern/common/organisms/sidebar";
import PageWrapper from "@/pattern/common/templates/page-wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={joinClasses(
        "bg-surfaceColor w-screen min-h-screen flex justify-center items-start"
      )}
    >
      <Sidebar />
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
};

export default Layout;
