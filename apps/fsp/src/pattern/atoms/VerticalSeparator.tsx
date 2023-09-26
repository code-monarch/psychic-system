import React from "react";
import * as Separator from "@radix-ui/react-separator";

const VerticalSeparator = () => {
  return (
    <Separator.Root
    className="bg-[#174cff33] w-px h-full mx-[15px]"
    decorative
    orientation="vertical"
  />
  );
};

export default VerticalSeparator;
