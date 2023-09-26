import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

// App Pages Main Panel
const PagePanel: FC<IProps> = ({ children }) => {
  return (
    <main className='bg-white w-full min-h-screen flex flex-col items-center gap-y-[55px] py-[24px] px-[32px] rounded-[4px]'>
      {children}
    </main>
  );
};

export default PagePanel;
