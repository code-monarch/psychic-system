import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { joinClasses } from "@emtech/utils";

//    Dialogue Root
type DialogueProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  className?: string;
  isopen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setisopen?: (value: boolean) => void;
};

const Dialogue = ({ isopen, setisopen, children, ...props }: DialogueProps) => (
  <DialogPrimitive.Root
    {...props}
    open={isopen}
    onOpenChange={setisopen}
    // className={joinClasses(className)}
  >
    {children}
  </DialogPrimitive.Root>
);
//    Dialogue Root End

//    Dialogue Trigger
type DialogueTriggerProps = React.ComponentProps<
  typeof DialogPrimitive.Trigger
> & {
  className?: string;
};

const DialogueTrigger = ({ className, children }: DialogueTriggerProps) => (
  <DialogPrimitive.Trigger asChild className={joinClasses(className)}>
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
type DialogueContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  className?: string;
  aschild?: boolean;
  children: React.ReactNode;
};

const DialogueContent = ({
  aschild,
  children,
  className,
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
      className={joinClasses(
        "h-fit rounded-[8px] py-[40px] px-[32px]",
        className
      )}
    >
      {children}
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
  // aschild?: boolean;
};

const DialogueOverlay = ({
  className,
  children,
  isopen,
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
        forceMount
        // asChild={aschild}
        className={joinClasses(
          "fixed inset-0 min-h-screen h-fit z-[2000] bg-[rgba(39, 39, 43, 1)] flex justify-center items-center overflow-auto",
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

export {
  Dialogue,
  DialogueTrigger,
  DialogueTitle,
  DialogueDescription,
  DialogueContent,
  DialoguePortal,
  DialogueOverlay,
};
