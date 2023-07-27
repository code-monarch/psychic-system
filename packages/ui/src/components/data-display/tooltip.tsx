import { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { joinClasses } from "@emtech/utils";

type Props = {
  children: ReactNode;
  arrowStyles: string;
  contentStyles: string;
};

export const Tooltip = ({ children, arrowStyles, contentStyles }: Props) => (
  // <TooltipPrimitive.Provider>
  <TooltipPrimitive.Root>
    <TooltipPrimitive.Trigger asChild>
      <button className='IconButton' type='button'>
        <DotsVerticalIcon />
      </button>
    </TooltipPrimitive.Trigger>
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={joinClasses(
          "radix-side-top:animate-slide-down-fade",
          "radix-side-right:animate-slide-left-fade",
          "radix-side-bottom:animate-slide-up-fade",
          "radix-side-left:animate-slide-right-fade",
          "inline-flex items-center rounded-md px-4 py-2.5",
          "bg-white !text-semPrimary !max-w-[150px] !text-[13px] !z-[888888] !shadow-md",
          contentStyles
        )}
        sideOffset={5}
      >
        {children}
        <TooltipPrimitive.Arrow
          className={joinClasses(
            arrowStyles,
            "fill-current text-white shadow-md"
          )}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
  // </TooltipPrimitive.Provider>
);
