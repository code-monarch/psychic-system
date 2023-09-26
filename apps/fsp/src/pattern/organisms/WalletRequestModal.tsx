"use client";
import React from "react";
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
import * as RadioGroup from "@radix-ui/react-radio-group";
import XIcon from "../atoms/icons/XIcon";
import CongratsModal from "./CongratsModal";
import PlusIcon from "../atoms/icons/PlusIcon";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useGlobalContext } from "../../../context";

const WalletRequestModal = () => {
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const { setWallet, tab } = useGlobalContext();

  const toggleSent = () => {
    setOpen(false);
    setSent(true);
  };

  return (
    <div>
      <Dialogue isopen={open} setisopen={setOpen} className="">
        <DialogueTrigger>
          <RequestButton className="w-full">
            {" "}
            <PlusIcon /> Request {tab[0] + tab.slice(1).toLowerCase()} Wallet
          </RequestButton>
        </DialogueTrigger>

        <DialoguePortal>
          <DialogueOverlay
            className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            isopen={open}
          >
            <DialogueContent className="data-[state=open]:animate-contentSho fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div>
                <DialogueTitle className="m-0 text-lg font-semibold">
                  Wallet request Form
                </DialogueTitle>
                <DialogueDescription className="mb-5 text-sm leading-normal">
                  Fill the form & submit for a new Institutional Wallet address
                </DialogueDescription>
              </div>

              <div>
                <form action="" className="text-sm">
                  <div>
                    <fieldset className="mb-[25px] gap-5">
                      <label className="font-semibold" htmlFor="wallet-name">
                        Wallet Name
                      </label>
                      <input
                        className="pb-1 mt-2 w-full border-b border-black outline-none"
                        id="wallet-name"
                        placeholder="Add name for wallet"
                      />
                    </fieldset>
                    <fieldset className="mb-[25px] gap-5">
                      <label className="font-semibold" htmlFor="company-name">
                        Company Name
                      </label>
                      <input
                        className="pb-1 mt-2 w-full border-b border-black outline-none"
                        id="company-name"
                        placeholder="Insert your company's name"
                      />
                    </fieldset>
                  </div>

                  <div className="text-sm">
                    <RadioGroup.Root
                      className="flex flex-col gap-2.5"
                      defaultValue="default"
                      aria-label="View density"
                    >
                      <div className="font-semibold mb-1">
                        How many Wallets do you need?
                      </div>
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border border-[#8499b1] outline-none cursor-pointer"
                          value="10"
                          id="r1"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                        </RadioGroup.Item>
                        <label
                          className="text-[#8499b1] leading-none pl-[8px]"
                          htmlFor="r1"
                        >
                          10
                        </label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border border-[#8499b1] outline-none cursor-pointer"
                          value="100"
                          id="r2"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                        </RadioGroup.Item>
                        <label
                          className="text-[#8499b1] leading-none pl-[8px]"
                          htmlFor="r2"
                        >
                          100
                        </label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border border-[#8499b1] outline-none cursor-pointer"
                          value="1000"
                          id="r3"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                        </RadioGroup.Item>
                        <label
                          className="text-[#8499b1] leading-none pl-[8px]"
                          htmlFor="r3"
                        >
                          1000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroup.Item
                          className="flex justify-center items-center bg-white w-[15px] h-[15px] rounded-full border border-[#8499b1] outline-none cursor-pointer"
                          value=""
                          id="r4"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#174cff]" />
                        </RadioGroup.Item>
                        <label
                          className="text-[#8499b1] leading-none pl-[8px]"
                          htmlFor="r4"
                        >
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Insert amount here"
                            className="border-0 border-b text-sm p-0 pb-1"
                          />
                        </label>
                      </div>
                    </RadioGroup.Root>
                  </div>
                </form>
              </div>

              <div className="mt-[25px] flex justify-center">
                <button
                  onClick={toggleSent}
                  className="bg-[#174cff] text-white w-full text-sm inline-flex items-center justify-center rounded px-[15px] py-4 font-medium leading-none focus:outline-none"
                >
                  Send Request
                </button>
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
      </Dialogue>

      <div className="hidden">
        <CongratsModal isOpen={sent} setIsOpen={setSent}>
          <div className="">
            <p className="text-xs my-4 font-medium text-center">
              You&apos;ve just made a request for your Institutional {tab[0] + tab.slice(1).toLowerCase() + " "}
              Wallet. Once this is accepted, you&apos;ll get a pre-funded
              wallet.
            </p>
            <button
              onClick={() => {
                setSent(false);
                // if(tab === "RESERVE") {
                //   setWallet(tab);
                // }
                setWallet(tab);
              }}
              className="bg-[#174cff] gap-2 text-white w-full text-sm inline-flex items-center justify-center rounded px-[15px] py-4 font-medium leading-none focus:outline-none"
            >
              Go to Wallet <ChevronRightIcon />
            </button>
          </div>
        </CongratsModal>
      </div>
    </div>
  );
};

export default WalletRequestModal;
