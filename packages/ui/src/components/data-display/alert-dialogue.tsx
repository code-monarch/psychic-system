import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { joinClasses } from "@emtech/utils";

//   Alert Dialogue Root
type AlertDialogueProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> & {
  className?: string;
  isopen?: boolean;
  setisopen?: () => void;
};

const AlertDialogue = ({
  isopen,
  setisopen,
  children,
  ...props
}: AlertDialogueProps) => (
  <AlertDialogPrimitive.Root
    {...props}
    open={isopen}
    onOpenChange={setisopen}
    // className={joinClasses(className)}
  >
    {children}
  </AlertDialogPrimitive.Root>
);
//   Alert Dialogue Root End

//   Alert Dialogue Trigger
type AlertDialogueTriggerProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Trigger
> & {
  className?: string;
  innerRef?: any;
};

const AlertDialogueTrigger = ({
  className,
  children,
  innerRef,
}: AlertDialogueTriggerProps) => (
  <AlertDialogPrimitive.Trigger
    asChild
    className={joinClasses(className)}
    ref={innerRef}
  >
    {children}
  </AlertDialogPrimitive.Trigger>
);
//   Alert Dialogue Trigger End

//   Alert Dialogue Title
type AlertDialogueTitleProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Title
> & {
  className?: string;
};

const AlertDialogueTitle = ({
  className,
  children,
}: AlertDialogueTitleProps) => (
  <AlertDialogPrimitive.Title className={joinClasses(className)}>
    {children}
  </AlertDialogPrimitive.Title>
);
//   Alert Dialogue Title End

//   Alert Dialogue Description
type AlertDialogueDescriptionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Description
> & {
  className?: string;
};

const AlertDialogueDescription = ({
  children,
  className,
}: AlertDialogueDescriptionProps) => (
  <AlertDialogPrimitive.Description className={joinClasses(className)}>
    {children}
  </AlertDialogPrimitive.Description>
);
//   Alert Dialogue Description End

//   Alert Dialogue Cancel
type AlertDialogueCancelProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Cancel
> & {
  className?: string;
};

const AlertDialogueCancel = ({
  className,
  children,
}: AlertDialogueCancelProps) => (
  <AlertDialogPrimitive.Cancel className={joinClasses(className)}>
    {children}
  </AlertDialogPrimitive.Cancel>
);
//   Alert Dialogue Cancel End

//   Alert Dialogue Action
type AlertDialogueActionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Action
> & {
  className?: string;
};

const AlertDialogueAction = ({
  className,
  children,
}: AlertDialogueActionProps) => (
  <AlertDialogPrimitive.Action className={joinClasses(className)}>
    {children}
  </AlertDialogPrimitive.Action>
);
//   Alert Dialogue Action End

//   Alert Dialogue Content
type AlertDialogueContentProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Content
> & {
  className?: string;
  aschild?: boolean;
  children: React.ReactNode;
  innerRef?: any;
};

const AlertDialogueContent = ({
  // aschild,
  children,
  className,
  innerRef,
}: AlertDialogueContentProps) => (
  <Transition.Child
    as={Fragment}
    enter='ease-out duration-300'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='ease-in duration-200'
    leaveFrom='opacity-100 scale-100'
    leaveTo='opacity-0 scale-95'
  >
    <AlertDialogPrimitive.Content
      forceMount
      ref={innerRef}
      // asChild={aschild}
      className={joinClasses(
        "h-fit rounded-[8px] py-[40px] px-[32px]",
        className
      )}
    >
      <div className="w-full min-h-full h-fit flex justify-center items-center overflow-auto">{children}</div>
    </AlertDialogPrimitive.Content>
  </Transition.Child>
);
//   Alert Dialogue Content End

// Alert Dialogue Overlay
type AlertDialogueOverlayProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Overlay
> & {
  className?: string;
  isopen: boolean;
  children?: React.ReactNode;
  innerRef?: any;
};

const AlertDialogueOverlay = ({
  className,
  children,
  isopen,
  innerRef,
}: AlertDialogueOverlayProps) => (
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
      <AlertDialogPrimitive.Overlay
        forceMount
        ref={innerRef}
        className={joinClasses(
          "fixed inset-0 min-w-screen w-full min-h-screen h-full !bg-[#1E252D]/30 overflow-auto z-[2000] ",
          className
        )}
      >
        {children}
      </AlertDialogPrimitive.Overlay>
    </Transition.Child>
  </Transition.Root>
);
// Alert Dialogue Overlay End

// Alert Dialogue Portal
type AlertDialoguePortalProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Portal
>;

const AlertDialoguePortal = ({ children }: AlertDialoguePortalProps) => (
  <AlertDialogPrimitive.Portal forceMount>
    {children}
  </AlertDialogPrimitive.Portal>
);
// Alert Dialogue Portal End

export {
  AlertDialogue,
  AlertDialogueTrigger,
  AlertDialogueTitle,
  AlertDialogueDescription,
  AlertDialogueCancel,
  AlertDialogueAction,
  AlertDialogueContent,
  AlertDialoguePortal,
  AlertDialogueOverlay,
};
