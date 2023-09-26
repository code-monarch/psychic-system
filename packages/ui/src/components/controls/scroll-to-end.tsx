import React, { FC } from "react";
import { CarouselArrowIcon, ExpandIcon } from "@emtech/icons";

export interface IScrollProps {
  scrollAreaRef: React.MutableRefObject<HTMLDivElement>;
  dir: "vertical" | "horizontal"; // scroll direction
  IconColor?: "black" | "primary";
}

export const ScrollToEnd: FC<IScrollProps> = ({
  scrollAreaRef,
  dir,
  IconColor = "primary",
}) => {
  const scrollToRightEnd = () => {
    if (scrollAreaRef.current) {
      // Scroll to the end of the ScrollArea element width
      const scrollWidth = scrollAreaRef.current.scrollWidth;
      scrollAreaRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    }
  };
  const scrollToBottomEnd = () => {
    if (scrollAreaRef.current) {
      // Scroll to the end of the ScrollArea element Height
      const scrollHeight = scrollAreaRef.current.scrollHeight;
      scrollAreaRef.current.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  };
  return (
    <div
      className='self-center cursor-pointer'
      onClick={() => {
        dir === "horizontal" ? scrollToRightEnd() : scrollToBottomEnd();
      }}
    >
      {IconColor === "primary" && <ExpandIcon />}
      {IconColor === "black" && <CarouselArrowIcon translateX={true} />}
    </div>
  );
};
