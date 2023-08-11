import React from "react";
import { PopOver, PopOverContent, PopOverTrigger } from "@/ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import UserIcon from "../atoms/icons/user-icon";
import { useLogout } from "@/lib/hooks/useLogout.hooks";

const LogoutPopOver = () => {
  const { logOut } = useLogout();
  return (
    <PopOver>
      <PopOverTrigger className='cursor-pointer '>
        <div className='!cursor-pointer flex items-center'>
          <UserIcon abbr={"John Doe"} />
          <ChevronDownIcon />
        </div>
      </PopOverTrigger>
      <PopOverContent
        showCloseIcon={false}
        className='!w-[180px] py-[20px] !px-0 text-white'
        onClick={() => logOut()}
      >
        <div className='cursor-pointer py-[8px] bg-semSecondary hover:bg-semBlue600 hover:text-white'>
          <p className='px-[16px] rounded-[4px]'>Log out</p>
        </div>
      </PopOverContent>
    </PopOver>
  );
};

export default LogoutPopOver;
