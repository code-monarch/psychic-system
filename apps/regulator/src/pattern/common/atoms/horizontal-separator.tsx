import React from "react";
import * as Separator from "@radix-ui/react-separator";
import { joinClasses } from "@emtech/utils";

interface Props {
  className?: string;
}

const HorizontalSeparator = ({ className, ...props }: Props) => {
  return (
    <Separator.Root
      className={joinClasses(className, "bg-[#174cff33] w-ful h-px")}
      decorative
      orientation='horizontal'
      {...props}
    />
  );
};

export default HorizontalSeparator;
