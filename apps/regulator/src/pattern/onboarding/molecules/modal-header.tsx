"use client";
import React, { FC, ReactElement } from "react";
import { endTour } from "@/redux/features/global-state";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ModalHeaderSvgPattern } from "@emtech/icons";

interface IModalHeaderProps {
  heading: ReactElement;
  subHeading?: ReactElement;
}

const ModalHeader: FC<IModalHeaderProps> = ({ heading, subHeading }) => {
  const dispatch = useAppDispatch();
const {push} = useRouter();

  const endAppTour = () => {
    dispatch(endTour());
    push("/wallet");
  };

  return (
    <div className='relative bg-primaryText w-full pt-12 px-10 pb-10 rounded-lg'>
      <div className='space-y-[4px]'>
        <div className='text-white text-2xl font-sans font-medium'>
          {heading}
        </div>
        <div className='text-white text-base font-sans font-medium'>
          {subHeading}
        </div>
      </div>
      {/* Skip tour Button */}
      <span
        className='absolute top-6 right-6 text-white text-sm text-[#FCFCFC] font-sans cursor-pointer z-[300]'
        onClick={() => endAppTour()}
      >
        Skip
      </span>
      {/* Skip tour Button End */}
      <ModalHeaderSvgPattern />
    </div>
  );
};

export default ModalHeader;
