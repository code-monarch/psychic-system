"use client";
import React from "react";
import { useRouter } from "next/navigation";
import * as Separator from "@radix-ui/react-separator";
import { BrandLogo } from "@emtech/icons";
import ExplorerTextIcon from "../atoms/explorer-text-icon";
import SearchInput from "./search-input";

const LogoAndSearchBarWidget = () => {
  const { push } = useRouter();
  return (
    <div className='h-[34px] flex items-center space-x-[24px]'>
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
      {/* Separator */}
      <Separator.Root
        className='bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px'
        decorative
        orientation='vertical'
      />
      {/* Separator End */}
      <SearchInput />
    </div>
  );
};

export default LogoAndSearchBarWidget;
