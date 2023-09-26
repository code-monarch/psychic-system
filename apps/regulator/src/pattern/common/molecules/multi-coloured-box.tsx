"use client"
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MultiColouredBorderBox: FC<IProps> = ({ children }) => {
  return (
    <div className='multi-coloured-box-border'>
      <div className='bg-surfaceColor w-[362px] h-[168px] p-[16px] mt-[1px] ml-[1px] space-y-[24px] rounded-lg z-40'>
        {children}
      </div>
    </div>
  );
};

export default MultiColouredBorderBox;
