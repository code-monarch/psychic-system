import React, { FC } from "react";
import {
  Dialogue,
  DialogueContent,
  DialogueOverlay,
  DialoguePortal,
} from "@emtech/ui";

interface IProps {
  isOpen: boolean;
  setIsOpen: any;
}

const SubmittingRequestFormModal: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialogue isopen={isOpen} setisopen={setIsOpen} className=''>
      <DialoguePortal>
        <DialogueOverlay isopen={isOpen}>
          <DialogueContent>
            <h2 className='text-primaryText text-[32px] font-sans font-bold'>
              Submitting Request form...
            </h2>
          </DialogueContent>
        </DialogueOverlay>
      </DialoguePortal>
    </Dialogue>
  );
};

export default SubmittingRequestFormModal;
