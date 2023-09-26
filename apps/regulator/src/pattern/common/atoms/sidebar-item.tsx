import React, { FC, ReactElement } from "react";
import Hidden from "./hidden";

interface IProps {
  active?: boolean;
  children: ReactElement
}

const SidebarItem:FC<IProps> = ({active, children}) => {
  return (
    <div className='flex items-start gap-x-[5px]'>
      <Hidden visible={active ? true : false}>
        <span className='bg-secondaryText h-[26px] w-[2px] rounded-[4px]'></span>
      </Hidden>
      {children}
    </div>
  );
};

export default SidebarItem;
