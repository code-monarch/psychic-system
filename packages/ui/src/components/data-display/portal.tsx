import { ReactNode } from "react";
import { joinClasses } from "@emtech/utils";
import { Dialogue, DialogueContent, DialogueOverlay, DialoguePortal } from "./dialogue";

interface IPortalProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void;
}

export const Portal = ({ children, className, isOpen, onOpenChange }: IPortalProps) => {

  return (
    <>
      <Dialogue isopen={isOpen} onOpenChange={onOpenChange}>
        <DialoguePortal>
          <DialogueOverlay
            isopen={isOpen}
            className={joinClasses(className)}
          >
            <DialogueContent>{children}</DialogueContent>
          </DialogueOverlay>
        </DialoguePortal>
      </Dialogue>
    </>
  );
};
