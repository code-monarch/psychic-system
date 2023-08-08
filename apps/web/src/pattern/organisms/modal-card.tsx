"use client"
import React, { FC, ReactElement } from "react";
import { joinClasses } from "@emtech/utils";
import { CloseIcon } from "@emtech/icons";

interface IModalCardProps {
  children: ReactElement;
  title: string; // Text title for Modal Header
  closeModal: () => void; // fuction that closes Modal
  className?: string; // className for Modal Container
  headerClassName?: string; // className for Modal header
  childrenClassName?: string; // className for body of Modal
}

const ModalCard: FC<IModalCardProps> = ({
  children,
  className,
  headerClassName,
  title,
  closeModal,
  childrenClassName,
}) => {
  return (
    <div
      className={joinClasses(
        "relative bg-white w-[632px] !h-fit !max-h-fit overflow-hidden pt-8 px-8 pb-[74px] space-y-[52px] rounded-lg",
        className
      )}
    >
      {/* Header */}
      <header
        className={joinClasses(
          "w-full flex items-center justify-between",
          headerClassName
        )}
      >
        {/* Modal Title */}
        <div className='text-2xl text-semanticBlack font-extrabold'>
          {title}
        </div>
        {/* Modal Title End */}

        {/* Close Icon */}
        <span onClick={closeModal} className='absolute top-4 right-4'>
          <CloseIcon className='cursor-pointer' />
        </span>
        {/* Close Icon End */}
      </header>
      {/* Header End */}

      {/* Modal Body */}
      <div
        className={joinClasses(
          "w-full h-full space-y-[22px]",
          childrenClassName
        )}
      >
        {children}
      </div>
      {/* Modal Body End */}
    </div>
  );
};

export default ModalCard;
