import { ReactNode, ComponentProps } from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";
import { joinClasses } from "@emtech/utils";

interface IPortalProps extends ComponentProps<typeof PortalPrimitive.Portal> {
  children: ReactNode;
  container?: HTMLElement | null;
  asChild?: boolean;
  className?: string;
}

export const Portal = ({
  children,
  container,
  asChild,
  className,
}: IPortalProps) => {
  return (
    <div>
      <PortalPrimitive.Root container={container} asChild={asChild}>
        <div
          className={joinClasses(
            "bg-[rgba(39,_39,_43,_.5)] absolute inset-0",
            "min-h-screen h-fit w-screen flex justify-center items-center",
            "p-10 overflow-auto z-[2000]",
            className
          )}
        >
          <div>{children}</div>
        </div>
      </PortalPrimitive.Root>
    </div>
  );
};
