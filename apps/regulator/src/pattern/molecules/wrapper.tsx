"use client"
import React, {ReactNode} from "react";
import {joinClasses} from "@emtech/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={joinClasses(
        "flex-grow h-screen lg:w-auto w-screen",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
