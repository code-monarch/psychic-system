"use client";
import React, { FC, ReactNode, useRef } from "react";
import {
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  ScrollToEnd,
  ScrollToStart,
} from "@emtech/ui";

interface IProps {
  children: ReactNode;
}

const OnBoardingCardScrollArea: FC<IProps> = ({ children }) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='w-full h-full py-[auto] overflow-hidden'>
      <div className='absolute left-[16px] top-[50%] z-[200]'>
        <ScrollToStart
          dir='horizontal'
          IconColor='black'
          scrollAreaRef={scrollAreaRef}
        />
      </div>
      {/* Scroll To Start Icon */}
      <ScrollArea className='!w-full !h-full flex items-center justify-between gap-x-[24px]'>
        <ScrollAreaViewport className='w-full !h-full' innerRef={scrollAreaRef}>
          {children}
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation='horizontal' />
        <ScrollAreaScrollCorner />
      </ScrollArea>
      {/* Scroll To End Icon */}
      <div className='absolute right-[16px] top-[50%]'>
        <ScrollToEnd
          dir='horizontal'
          IconColor='black'
          scrollAreaRef={scrollAreaRef}
        />
      </div>
    </div>
  );
};

export default OnBoardingCardScrollArea;
