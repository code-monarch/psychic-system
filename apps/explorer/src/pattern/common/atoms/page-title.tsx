import React, { FC, ReactElement } from "react";

interface IProps {
  title: string | ReactElement;
}

const PageTitle: FC<IProps> = ({ title }) => {
  return (
    <div className='w-full h-fit max-h-[33px] flex items-center justify-start'>
      <h4 className='w-fit h-fit text-[1.5rem] text-black font-sans font-[800]'>
        {title}
      </h4>
    </div>
  );
};

export default PageTitle;
