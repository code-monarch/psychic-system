"use client";
import React, { FC, ReactElement } from "react";
import { joinClasses } from "@emtech/utils";
import { CloseIcon } from "@emtech/icons";
import Hidden from "../../atoms/hidden";
import { ScrollArea, ScrollAreaScrollCorner, ScrollAreaScrollbar, ScrollAreaViewport } from "@emtech/ui";

interface IModalCardProps {
  children: ReactElement;
  title: string | ReactElement; // Text title for Modal Header
  description?: string; // Text Description for Modal Header
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
  description,
  closeModal,
  childrenClassName,
}) => {
  return (
    <div
      className={joinClasses(
        "relative bg-white w-[632px] !h-fit !max-h-fit overflow-hidden pt-8 px-8 pb-[74px] rounded-lg",
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
        <Hidden visible={title || description ? true : false}>
          <div className='space-y-[16px] mb-8'>
            {/* Modal Title */}
            <h3 className='text-2xl text-semanticBlack font-extrabold'>
              {title}
            </h3>
            {/* Modal Title End */}

            {/* Modal Descriptiom */}
            <p className='text-sm text-primaryText font-sans'>{description}</p>
            {/* Modal Descriptiom End */}
          </div>
        </Hidden>

        {/* Close Icon */}
        <span onClick={closeModal} className='absolute top-4 right-4 z-40'>
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
        <ScrollArea className='!w-full flex items-center justify-between gap-x-[24px] pb-[10px]'>
          <ScrollAreaViewport className='w-full'>{children}</ScrollAreaViewport>
          <ScrollAreaScrollbar orientation='vertical' />
          <ScrollAreaScrollCorner />
        </ScrollArea>
      </div>
      {/* Modal Body End */}
    </div>
  );
};

export default ModalCard;
