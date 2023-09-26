"use client";
import React, { ReactNode } from "react";
import {
  Dialogue,
  DialogueTrigger,
  DialogueContent,
  DialoguePortal,
  DialogueClose,
  DialogueOverlay,
} from "@emtech/ui";
import RequestButton from "../atoms/RequestButton";
import XIcon from "../atoms/icons/XIcon";
// import Image from "next/image";
// import congrats from "../../../public/congratspic.jpg";
import CongratsIcon from "../atoms/icons/CongratsIcon";

interface Props {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
}
const WalletRequestModal: React.FC<Props> = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <div className="">
      <Dialogue isopen={isOpen} setisopen={setIsOpen} className="">
        <DialogueTrigger>
          <RequestButton className="w-full">Send Request</RequestButton>
        </DialogueTrigger>

        <DialoguePortal>
          <DialogueOverlay
            className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            isopen={isOpen}
          >
            <DialogueContent className="flex flex-col justify-between gap-4 data-[state=open]:animate-contentSho fixed top-[50%] left-[50%] max-h-[95vh] w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div className="flex justify-center items-center h-[250px]">
                {/* <Image
                  src={congrats}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                /> */}
                <CongratsIcon />
              </div>

              <div className="text-center">
                <h2 className="text-4xl font-semibold">Congratulations</h2>
                {/* <p className="text-xs my-4 font-medium">
                  You&apos;ve just made a request for your Institutional
                  Reserved Wallet. Once this is accepted, you&apos;ll get a
                  pre-funded wallet.
                </p> */}
              </div>

              {/* <div className="">
                <p className="text-xs my-4 font-medium text-center">
                  You&apos;ve just made a request for your Institutional
                  Reserved Wallet. Once this is accepted, you&apos;ll get a
                  pre-funded wallet.
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setWallet("RESERVE");
                  }}
                  className="bg-[#174cff] gap-2 text-white w-full text-sm inline-flex items-center justify-center rounded px-[15px] py-4 font-medium leading-none focus:outline-none"
                >
                  Go to Wallet <ChevronRightIcon />
                </button>
              </div> */}
              {children}

              <DialogueClose asChild>
                <button
                  className="hover:bg-[#f0f0f0] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                  aria-label="Close"
                >
                  <XIcon />
                </button>
              </DialogueClose>
            </DialogueContent>
          </DialogueOverlay>
        </DialoguePortal>
      </Dialogue>
    </div>
  );
};

export default WalletRequestModal;
