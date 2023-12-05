"use client";
import React from "react";
import { BrandLogo } from "@emtech/icons";
import ExplorerTextIcon from "../atoms/explorer-text-icon";
import { useRouter } from "next/navigation";

const TopbarAppTitle = () => {
  const { push } = useRouter();
  return (
    <div
      className='h-full flex items-center space-x-[8px]'
      onClick={() => push("/")}
    >
      <div>
        <BrandLogo />
      </div>
      <div className='mt-[4px]'>
        <ExplorerTextIcon />
      </div>
    </div>
  );
};

export default TopbarAppTitle;
