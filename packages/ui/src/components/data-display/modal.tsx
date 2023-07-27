import React from "react";
import { joinClasses } from "@emtech/utils";
import { Dialog, Transition } from "@headlessui/react";

interface IModalRootProps {
  className?: string;
  isOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen?: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({
  className,
  children,
  isOpen,
  setIsOpen,
}: IModalRootProps) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      {/* Dialogue Root */}
      {/* Dialogue Root End */}
      <Dialog
        className='fixed inset-0 overflow-y-auto'
        onClose={() => setIsOpen && setIsOpen(false)}
      >
        <Dialog.Panel>
          <div className='h-fit rounded-[8px] py-[40px] px-[32px]'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay
                className={joinClasses(
                  "fixed inset-0 min-h-screen h-fit z-[2000] bg-[rgba(39, 39, 43, 1)] flex justify-center items-center overflow-auto",
                  className
                )}
              />
              {children}
            </Transition.Child>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

// Modal Title
interface IModalTitleProps {
  className?: string;
  children: string;
}

const ModalTItle = ({ className, children }: IModalTitleProps) => {
  return (
    <Dialog.Title as='h3' className={joinClasses(className)}>
      {children}
    </Dialog.Title>
  );
};

// Modal Description
interface IModalDescProps {
  className?: string;
  children: string;
}

const ModalDesc = ({ className, children }: IModalDescProps) => {
  return (
    <Dialog.Description className={joinClasses(className)}>
      {children}
    </Dialog.Description>
  );
};

export { Modal, ModalTItle, ModalDesc };
