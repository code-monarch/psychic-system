import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { joinClasses } from "@emtech/utils";

//    Dialogue Root
type DialogueProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  className?: string;
  // Determines whether the Modal is Open or not
  isopen?: boolean;

  // sets the Dialogue disclosure
  // eslint-disable-next-line no-unused-vars
  setisopen?: (value: boolean) => void;
};

const Dialogue = ({ isopen, setisopen, children, ...props }: DialogueProps) => (
  <DialogPrimitive.Root {...props} open={isopen} onOpenChange={setisopen}>
    {children}
  </DialogPrimitive.Root>
);
//    Dialogue Root End

//    Dialogue Trigger
type DialogueTriggerProps = React.ComponentProps<
  typeof DialogPrimitive.Trigger
> & {
  className?: string;
  innerRef?: any;
};

const DialogueTrigger = ({
  className,
  children,
  innerRef,
}: DialogueTriggerProps) => (
  <DialogPrimitive.Trigger
    asChild
    className={joinClasses(className)}
    ref={innerRef}
  >
    {children}
  </DialogPrimitive.Trigger>
);
//    Dialogue Trigger End

//    Dialogue Title
type DialogueTitleProps = React.ComponentProps<typeof DialogPrimitive.Title> & {
  className?: string;
};

const DialogueTitle = ({ className, children }: DialogueTitleProps) => (
  <DialogPrimitive.Title className={joinClasses(className)}>
    {children}
  </DialogPrimitive.Title>
);
//    Dialogue Title End

//    Dialogue Description
type DialogueDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
> & {
  className?: string;
};

const DialogueDescription = ({
  children,
  className,
}: DialogueDescriptionProps) => (
  <DialogPrimitive.Description className={joinClasses(className)}>
    {children}
  </DialogPrimitive.Description>
);
//    Dialogue Description End

//    Dialogue Content
export type DialogueContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  className?: string;
  aschild?: boolean;
  children: React.ReactNode;
  innerRef?: any;
};

const DialogueContent = ({
  aschild,
  children,
  className,
  innerRef,
}: DialogueContentProps) => (
  <Transition.Child
    as={Fragment}
    enter='ease-out duration-300'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='ease-in duration-200'
    leaveFrom='opacity-100 scale-100'
    leaveTo='opacity-0 scale-95'
  >
    <DialogPrimitive.Content
      forceMount
      asChild={aschild}
      ref={innerRef}
      className={joinClasses(
        "h-fit rounded-[8px] py-[40px] px-[32px]",
        className
      )}
    >
      <div className='w-full min-h-full h-fit flex justify-center items-center overflow-auto'>
        {children}
      </div>
    </DialogPrimitive.Content>
  </Transition.Child>
);
//    Dialogue Content End

//  Dialogue Overlay
type DialogueOverlayProps = React.ComponentProps<
  typeof DialogPrimitive.Overlay
> & {
  className?: string;
  isopen: boolean;
  children?: React.ReactNode;
  asChild?: boolean;
  innerRef?: any;
};

const DialogueOverlay = ({
  className,
  children,
  isopen,
  innerRef,
}: DialogueOverlayProps) => (
  <Transition.Root show={isopen}>
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <DialogPrimitive.Overlay
        ref={innerRef}
        forceMount
        // asChild={aschild}
        className={joinClasses(
          "fixed inset-0 min-w-screen w-full min-h-screen h-full !bg-[#1E252D]/30 overflow-auto z-[2000] ",
          className
        )}
      >
        {children}
      </DialogPrimitive.Overlay>
    </Transition.Child>
  </Transition.Root>
);
//  Dialogue Overlay End

//  Dialogue Portal
type DialoguePortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

const DialoguePortal = ({ children }: DialoguePortalProps) => (
  <DialogPrimitive.Portal forceMount>{children}</DialogPrimitive.Portal>
);
//  Dialogue Portal End

//  Dialogue Close
type DialogueCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;

const DialogueClose = ({ children }: DialogueCloseProps) => (
  <DialogPrimitive.Close asChild aria-label='Close'>
    {children}
  </DialogPrimitive.Close>
);
//  Dialogue Close End

export {
  Dialogue,
  DialogueTrigger,
  DialogueTitle,
  DialogueDescription,
  DialogueContent,
  DialoguePortal,
  DialogueClose,
  DialogueOverlay,
};
