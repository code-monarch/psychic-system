"use-client";
import React, { FC } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { joinClasses } from "@emtech/utils";

interface Iprops {
  abbr: string | undefined;
  className?: string;
}

const UserIcon: FC<Iprops> = ({ abbr, className }) => {
  const abbNames = abbr?.replace(/(\w)\w*\W*/g, (_, i) => i.toUpperCase());

  return (
    <Avatar.Root
      asChild
      className={joinClasses(
        className,
        "bg-[#EAE7F8] min-h-[24px] min-w-[24px] inline-flex justify-center items-center text-semPrimary align-middle overflow-hidden rounded-full"
      )}
    >
      <Avatar.Fallback className='w-full h-full'>{abbNames}</Avatar.Fallback>
    </Avatar.Root>
  );
};

export default React.memo(UserIcon);
