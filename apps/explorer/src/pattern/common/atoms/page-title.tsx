import React, { FC, ReactElement, ReactNode } from "react";

interface IProps {
  title: string | ReactElement;
  description?: ReactNode
}

const PageTitle: FC<IProps> = ({ title, description }) => {
  return (
    <div className='w-full h-fit max-h-[33px] flex items-center justify-start'>
      <h4 className='w-fit h-fit text-[1.5rem] text-black font-sans font-[800]'>
        {title}
      </h4>
      <div>{description}</div>
    </div>
  );
};

export default PageTitle;
