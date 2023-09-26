"use client";
import React, { ReactElement, FC } from "react";
import { PlusIconButton } from "@emtech/ui";
import { useRouter } from "next/navigation";

interface IProps {
  icon: ReactElement;
  description: string;
  actionText: string; //  Button Text
}

const CreateRequestFormWidget:FC<IProps> = ({
  icon,
  description,
}) => {
  const { push } = useRouter()
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-[413px] flex flex-col items-center gap-y-[52px]'>
        <div className='w-full flex flex-col items-center gap-y-[16px]'>
          {/* Icon */}
          <span>{icon}</span>
          {/* Icon End */}

          {/* Deescription */}
          <p className='w-full font-sans font-[500] text-[16px] text-center text-primaryText leading-normal'>
            {description}
          </p>
          {/* Deescription End */}
        </div>

        {/* Action */}
        <PlusIconButton
          className='capitalize'
          size="sm"
          onClick={() => push("requests/create-request-form")}
        >
          Create an Institutional Wallet Request Form
        </PlusIconButton>
        {/* Action End */}
      </div>
    </div>
  );
};

export default CreateRequestFormWidget;
