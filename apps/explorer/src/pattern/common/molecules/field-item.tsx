import React, { FC, ReactNode } from "react";

interface IProps {
  label: string;
  value: string | number | ReactNode;
}

const FieldItem: FC<IProps> = ({ label, value }) => {
  return (
    <div className='bg-transparent w-full h-fit flex items-start justify-between gap-x-[29px] py-[16px]'>
      {/* label */}
      <div className='w-[134px] flex-none break-words font-[500] capitalize text-black text-base'>
        {`${label}:`}
      </div>
      {/* label End */}

      {/* value */}
      <div className='max-w-[456px] xl:max-w-[356px]  flex-1 text-inputBorder font-[500] break-words'>
        {value}
      </div>
      {/* value End */}
    </div>
  );
};

export default FieldItem;
