"use client";
import React, { FC } from "react";
import { useLogoutUser } from "@/lib/hooks/useLogoutUser";
import { LogoutSidebarNavIcon } from "@emtech/icons";
import { Text } from "@emtech/ui";
import Hidden from "../atoms/hidden";

interface IProps {
  hideText?: boolean;
  iconWidth?: string;
  iconHeight?: string;
}

const LogoutButton: FC<IProps> = ({ hideText, iconWidth, iconHeight }) => {
  const { logOut } = useLogoutUser();
  return (
    <button
      onClick={() => logOut()}
      className='cursor-pointer hover text-[#8499b1] flex items-center gap-2 pb-2'
    >
      <span>
        <LogoutSidebarNavIcon width={iconWidth} height={iconHeight} />
      </span>
      <Hidden visible={hideText ? false : true}>
        <Text className='text-sm'> Logout</Text>
      </Hidden>
    </button>
  );
};

export default LogoutButton;
