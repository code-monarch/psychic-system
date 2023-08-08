import { ReactElement, ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CloseIcon } from "@emtech/icons";
import { joinClasses } from "@emtech/utils";

interface DrawerProps {
  children: ReactNode;

  // Drawer Trigger
  trigger: ReactElement;

  // Determines whether Modal is Open
  isopen: boolean;

  // sets the Dialogue disclosure
  // eslint-disable-next-line no-unused-vars
  setisopen: (value: boolean) => void;

  // ClassName styles for drawer content
  contentClassName?: string;

  // ClassName styles for drawer overlay
  overlayClassName?: string;

  // ClassName styles for drawer Trigger
  triggerClassName?: string;

  // Title of the Drawer
  drawerTitle: string;

  // Description of the drawer if any
  drawerDescription?: string;
}

/**
 *
 * @description
 * A window overlaid on the right hand side of the primary window, rendering content.
 */
export const Drawer = ({
  children,
  trigger,
  isopen,
  setisopen,
  contentClassName,
  overlayClassName,
  triggerClassName,
  drawerTitle,
  drawerDescription,
}: DrawerProps) => {
  return (
    <DialogPrimitive.Root open={isopen} onOpenChange={setisopen}>
      {/* Trigger */}
      <DialogPrimitive.Trigger
        asChild
        className={joinClasses(triggerClassName)}
      >
        {trigger}
      </DialogPrimitive.Trigger>
      {/* Trigger End */}

      {/* Portal */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.DialogOverlay
          className={joinClasses(
            "fixed inset-0 max-h-screen w-screen z-[2000] bg-[#1E252D]/30 flex justify-end items-top overflow-hidden",
            overlayClassName
          )}
        >
          {/* Content */}
          <DialogPrimitive.Content
            className={joinClasses(
              "relative custom_scollbar bg-white w-[523px] h-screen px-[32px] rounded-l-[8px] overflow-y-auto overflow-x-hidden data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow",
              contentClassName
            )}
          >
            {/* Title And Description */}
            <div className='absolute top-[48px] left-[32px] right-[32px] w-full space-y-[24px] pb-[24px] border-b-[1px] border-[#DEE3EB]'>
              <DialogPrimitive.Title>
                <h3 className='text-[#1E252D] text-[24px] text-left font-sans font-[800]'>
                  {drawerTitle}
                </h3>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description>
                <p className='max-w-[331px] text-[#1E252D] text-[14px] font-sans'>
                  {drawerDescription}
                </p>
              </DialogPrimitive.Description>
            </div>
            {/* Title And Description End */}

            {/* Drawer Children */}
            <div className='h-full w-full py-[50px] mt-[148px]'>{children}</div>
            {/* Drawer Children End */}

            {/* Absolute Close Button */}
            <DialogPrimitive.Close>
              <span className='absolute top-[35px] right-[35px]'>
                <CloseIcon />
              </span>
            </DialogPrimitive.Close>
            {/* Absolute Close Button End */}
          </DialogPrimitive.Content>
          {/* Content End */}
        </DialogPrimitive.DialogOverlay>
      </DialogPrimitive.Portal>
      {/* Portal End */}
    </DialogPrimitive.Root>
  );
};
