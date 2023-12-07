import React, { FC } from "react";

interface IProps {
  title: string;
}

const TransferTitle: FC<IProps> = ({ title }) => {
  return (
    <span className='font-[500] text-[0.875rem] uppercase'>{title}</span>
  );
};

export default TransferTitle;
