import React, { FC } from 'react'

interface IProps{
    header: string;
}

const WidgetHeader: FC<IProps> = ({header}) => {
  return (
    <div className='w-full h-fit max-h-[33px] flex items-center justify-start'>
      <h4 className='w-fit h-fit text-[1.5rem] text-black font-sans font-[800]'>
        {header}
      </h4>
    </div>
  );
};

export default WidgetHeader