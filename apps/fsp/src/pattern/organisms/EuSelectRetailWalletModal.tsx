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
import PlusIcon from "../atoms/icons/PlusIcon";
import RetailWalletCard from "./RetailWalletCard";
import EuFundWalletModal from "./EuFundWalletModal";
// import { useGlobalContext } from "../../../context";

interface Props {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (state: boolean) => void;
}

const EuSelectRetailWalletModal = ({ open, setOpen }: Props) => {
  //   const [open, setOpen] = React.useState(false);
  const [fundModal, setFundModal] = React.useState<boolean>(false);

  return (
    <div>
      <Dialogue isopen={open} setisopen={setOpen} className="">
        <DialogueTrigger>
          <RequestButton className="w-full">
            {" "}
            <PlusIcon /> Fund Wallet
          </RequestButton>
        </DialogueTrigger>

        <DialoguePortal>
          <DialogueOverlay
            className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            isopen={open}
          >
            <DialogueContent className="overflow-y-auto fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[700px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div>
                <DialogueTitle className="m-0 text-lg font-semibold">
                  Select a Retail Wallet
                </DialogueTitle>
                <DialogueDescription className="mb-5 text-sm leading-normal">
                  Pick a retail wallet to conduct transaction to the End-user
                </DialogueDescription>
              </div>

              <div>
                <form action="" className="text-sm">
                  <RadioGroup.Root
                    className="justify-between items-center flex flex-wrap"
                    defaultValue="default"
                    aria-label="View density"
                  >
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value="default"
                        id="r1"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r1"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value=""
                        id="r2"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r2"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value="compact"
                        id="r3"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r3"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value="compact"
                        id="r4"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r4"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value="compact"
                        id="r5"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r5"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                    <div className="relative my-6 border rounded-lg p-4 bg-white shadow w-[45%]">
                      <RadioGroup.Item
                        className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]"
                        value="compact"
                        id="r6"
                      >
                        <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                      </RadioGroup.Item>
                      <label
                        className="cursor-pointer text-center flex flex-col items-center justify-center"
                        htmlFor="r6"
                      >
                        <RetailWalletCard />
                      </label>
                    </div>
                  </RadioGroup.Root>
                </form>
              </div>

              <div className="mt-[15px] bg-white w-full">
                <button onClick={() => {
                    setFundModal(true);
                    setOpen(false);
                }} className="bg-[#174cff] text-white text-sm inline-flex items-center justify-center rounded px-8 py-4 font-medium leading-none focus:outline-none">
                  Next
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

      <div>
        <EuFundWalletModal open={fundModal} setOpen={setFundModal} />
      </div>
    </div>
  );
};

export default EuSelectRetailWalletModal;
