import React, { FC, ReactElement } from "react";
import { PopOver, PopOverContent, PopOverTrigger } from "@emtech/ui";

interface ICardDescProps {
  trigger: ReactElement;
  description: ReactElement;
}

const CardDescriptionWidget: FC<ICardDescProps> = ({ trigger, description }) => {
  return (
    <PopOver>
      <PopOverTrigger className='cursor-pointer'>
        {<div>{trigger}</div>}
      </PopOverTrigger>
      <PopOverContent
        showCloseIcon={false}
        align='end'
        className='!bg-surfaceColor !text-primaryText !text-[0.75rem] !min-w-[228px] !min-h-[104px] !p-[8px] !border !border-[rgba(0, 0, 0, 0.3)] !rounded-[8px]'
      >
        {description}
      </PopOverContent>
    </PopOver>
  );
};

export default CardDescriptionWidget;
