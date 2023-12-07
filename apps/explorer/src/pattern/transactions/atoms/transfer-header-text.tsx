import React, { FC } from "react";

interface IProps {
  text: string;
}

const TransferHeaderText: FC<IProps> = ({ text }) => {
  return <div className='text-base text-black font-[800] flex-1'>{text}</div>;
};

export default TransferHeaderText;
