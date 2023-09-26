"use client";
import React, { useState, useEffect } from "react";
import {
  Dialogue,
  DialogueTrigger,
  DialogueTitle,
  DialogueDescription,
  DialogueContent,
  DialoguePortal,
  DialogueClose,
  DialogueOverlay,
} from "@emtech/ui";
import RequestButton from "../atoms/RequestButton";
import PlusIcon from "../atoms/icons/PlusIcon";
import * as RadioGroup from "@radix-ui/react-radio-group";
import XIcon from "../atoms/icons/XIcon";
import CongratsModal from "./CongratsModal";
import ChevronRightIcon from "../atoms/icons/ChevronRightIcon";

interface Props {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: boolean) => void;
}

const CloseWalletModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const [showCongrats, setShowCongrats] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen === false) {
      setShowNotice(false);
    }
  }, [isOpen]);

  return (
    <div>
      <Dialogue
        isopen={isOpen}
        setisopen={setIsOpen}
        className=""
        onOpenChange={setShowNotice}
      >
        <DialogueTrigger>
          <RequestButton className="w-full">
            {" "}
            <PlusIcon /> Request Reserve Wallet
          </RequestButton>
        </DialogueTrigger>

        {/* Alert Dialogue Portal */}
        <DialoguePortal>
          <DialogueOverlay
            className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            isopen={isOpen}
          >
            <DialogueContent className="data-[state=open]:animate-contentSho fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div className="">
                {showNotice ? (
                  <DialogueTitle className="mb-2 text-sm font-semibold">
                    Notice of Consent
                  </DialogueTitle>
                ) : (
                  <DialogueTitle className="mb-2 text-sm font-semibold">
                    Wallet Closure Request
                  </DialogueTitle>
                )}
                {showNotice ? (
                  <DialogueDescription className="mb-5 text-sm leading-normal text-[#2e3b4a] font-medium">
                    Completing and sending the foregone form means you agree and
                    understand your Reserve Wallet (0.0.1239400) will be
                    permanently removed from the Regulator&apos;s database and
                    you will no more have access to this wallet.
                    <p className="mt-4">
                      Please type “I agree to and understand this” in input
                      field below, then initiate wallet closure.
                    </p>
                  </DialogueDescription>
                ) : (
                  <DialogueDescription className="mb-5 text-sm leading-normal text-[#2e3b4a] font-medium">
                    Please complete the form below to close wallet
                  </DialogueDescription>
                )}
              </div>

              {showNotice ? (
                <fieldset className="mb-[25px] gap-5">
                  <input
                    className="pb-1 mt-0 w-full border-b border-black outline-none"
                    id="close-wallet"
                    placeholder="Type here..."
                  />
                </fieldset>
              ) : (
                <div>
                  <form action="" className="text-sm">
                    <div>
                      <ol className="list-decimal">
                        <li>
                          <fieldset className="mb-[25px] gap-5">
                            <label
                              className="font-semibold"
                              htmlFor="close-reason"
                            >
                              Please share reason for wallet closure
                            </label>
                            <input
                              className="pb-1 mt-2 w-full border-b border-black outline-none"
                              id="close-reason"
                              placeholder="Share in 150 words"
                            />
                          </fieldset>
                        </li>

                        <li>
                          <div className="text-sm">
                            <RadioGroup.Root
                              className="flex flex-col gap-2.5"
                              defaultValue="default"
                              aria-label="View density"
                            >
                              <div className="font-semibold mb-1">
                                Have you transferred out all your tokens?
                              </div>
                              <div className="flex items-center">
                                <RadioGroup.Item
                                  className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border-[1.5px] border-black outline-none cursor-pointer"
                                  value="10"
                                  id="r1"
                                >
                                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                                </RadioGroup.Item>
                                <label
                                  className="leading-none pl-[8px]"
                                  htmlFor="r1"
                                >
                                  No, I haven&apos;t
                                </label>
                              </div>
                              <div className="flex items-center">
                                <RadioGroup.Item
                                  className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border-[1.5px] border-black outline-none cursor-pointer"
                                  value="100"
                                  id="r2"
                                >
                                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                                </RadioGroup.Item>
                                <label
                                  className="leading-none pl-[8px]"
                                  htmlFor="r2"
                                >
                                  Yes, I have
                                </label>
                              </div>
                            </RadioGroup.Root>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </form>
                </div>
              )}

              <div className="mt-[25px] flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="bg-white text-sm inline-flex items-center justify-center rounded px-[15px] py-3 font-semibold leading-none focus:outline-none"
                >
                  Cancel
                </button>

                {showNotice ? (
                  <button
                    onClick={() => {
                      setShowCongrats(true);
                      setShowNotice(false);
                      setIsOpen(false);
                    }}
                    className="bg-[#ff5a5c] text-white text-sm inline-flex items-center justify-center rounded px-[15px] py-3 font-semibold leading-none focus:outline-none"
                  >
                    Initiate Wallet Close
                  </button>
                ) : (
                  <button
                    onClick={() => setShowNotice(true)}
                    className="bg-[#ff5a5c] text-white text-sm inline-flex items-center justify-center rounded px-[15px] py-3 font-semibold leading-none focus:outline-none"
                  >
                    Close Wallet
                  </button>
                )}
              </div>

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
        {/* Alert Dialogue Portal End */}
      </Dialogue>

      <div className="">
        <CongratsModal isOpen={showCongrats} setIsOpen={setShowCongrats}>
          <div className="">
            <p className="text-xs my-4 font-medium text-center">
              You&apos;ve just made a request for your Institutional Reserved
              Wallet to be closed. Once this is accepted, your wallet will be
              automatically removed from the database.
            </p>
            <button
              onClick={() => {
                setShowCongrats(false);
              }}
              className="bg-[#174cff] gap-2 text-white w-full text-sm inline-flex items-center justify-center rounded px-[15px] py-4 font-medium leading-none focus:outline-none"
            >
              Continue <ChevronRightIcon />
            </button>
          </div>
        </CongratsModal>
      </div>
    </div>
  );
};

export default CloseWalletModal;
