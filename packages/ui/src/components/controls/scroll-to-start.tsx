import React, { FC } from "react";
import { CarouselArrowIcon, ExpandIcon } from "@emtech/icons";
import { IScrollProps } from "./scroll-to-end";

export const ScrollToStart: FC<IScrollProps> = ({
  scrollAreaRef,
  dir,
  IconColor = "primary",
}) => {
  const scrollToLeftEnd = () => {
    if (scrollAreaRef.current) {
      // Scroll to the end of the ScrollArea element
        const scrollWidth = scrollAreaRef.current.scrollWidth;
        scrollAreaRef.current.scrollTo({
          left: -scrollWidth,
          behavior: "smooth",
        });
    }
  };
  const scrollToTopEnd = () => {
    if (scrollAreaRef.current) {
      // Scroll to the end of the ScrollArea element
      const scrollHeight = scrollAreaRef.current.scrollHeight;
      scrollAreaRef.current.scrollTo({ top: -scrollHeight, behavior: "smooth" });
    }
  };
  return (
    <div
      className='self-center cursor-pointer'
      onClick={() => {
        dir === "horizontal" ? scrollToLeftEnd() : scrollToTopEnd();
      }}
    >
      {IconColor === "primary" && <ExpandIcon translateX={true} />}
      {IconColor === "black" && <CarouselArrowIcon />}
    </div>
  );
};
