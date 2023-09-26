"use client";
import React, { useEffect, useState } from "react";
import {
  Dialogue,
  DialogueTrigger,
  DialogueTitle,
  DialogueContent,
  DialoguePortal,
  DialogueClose,
  DialogueOverlay,
} from "@emtech/ui";
import RequestButton from "../atoms/RequestButton";
import XIcon from "../atoms/icons/XIcon";
import CongratsModal from "./CongratsModal";
import PlusIcon from "../atoms/icons/PlusIcon";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import SelectWalletType from "../molecules/SelectWalletType";
import HorizontalSeparator from "../atoms/HorizontalSeparator";
import useDebounce from "../../utils/hooks/useDebounce";
import { useGlobalContext } from "../../../context";
import Spinner from "../atoms/icons/Spinner";

const FundWalletModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  const [review, setReview] = useState<string>("");

  const { setFunded } = useGlobalContext();

  const updateAmountAndReview = useDebounce(() => {
    setReview("loading");

    setTimeout(() => {
      setReview("done");
    }, 2000);
  }, 2000);

  useEffect(() => {
    if(open === false) {
      setAmount("");
      setReview("");
    }
  }, [open]);
  

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview("");
    const newAmount = e.target.value;
    setAmount(newAmount);
    updateAmountAndReview();
  };

  const handleFund = () => {
    setOpen(false);
    setSent(true);
    setReview("");
    setAmount("");
  };

  return (
    <div>
      <Dialogue isopen={open} setisopen={setOpen} className="">
        <DialogueTrigger>
          <RequestButton className="w-full text-sm">
            {" "}
            <PlusIcon /> Send Fund to a Wallet
          </RequestButton>
        </DialogueTrigger>

        <DialoguePortal>
          <DialogueOverlay
            className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
            isopen={open}
          >
            <DialogueContent className="data-[state=open]:animate-contentSho fixed top-[50%] left-[50%] max-h-[95vh] overflow-y-auto min-w-[40vw] max-w-[450p] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-sm">
              <div>
                <DialogueTitle className="text-lg font-semibold mb-6">
                  Fund a Wallet
                </DialogueTitle>
              </div>

              <div>
                <div className="flex justify-between items-baseline border rounded-lg border-[#8499b166] px-4 pb-4 mb-4">
                  <div className="flex-1">
                    <p className="font-semibold my-4">Select Wallet Type:</p>
                    <SelectWalletType />
                  </div>

                  <div className="flex-1">
                    <fieldset className="gap-5 text-right">
                      <label
                        className="font-medium text-[#8499b1] text-xs"
                        htmlFor="wallet-id"
                      >
                        Insert Wallet ID
                      </label>
                      <input
                        type="number"
                        className="focus:ring-0 border-0 p-0 font-semibold text-right text-xl mt-6 w-full border-black outline-none"
                        id="wallet-id"
                        placeholder="0.0.10233"
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="border rounded-lg border-[#8499b166] p-4 pb-0 mb-4">
                  <form action="">
                    <fieldset className="mb-[25px] gap-5">
                      <label
                        className="font-medium text-xs text-[#8499b1]"
                        htmlFor="amount"
                      >
                        Insert amount
                      </label>
                      <input
                        type="number"
                        className="focus:ring-0 border-0 p-0 mt-2 w-full text-xl font-semibold outline-none"
                        id="amount"
                        placeholder="1,096,098"
                        value={amount}
                        onChange={handleAmountChange}
                      />
                    </fieldset>
                  </form>
                </div>

                {/* PAYMENT REVIEW */}
                {review === "" && <div></div>}
                {review === "loading" && (<Spinner/>)}
                {review === "done" && (
                  <div className="border rounded-lg text-xs border-[#8499b166] p-4">
                    <p className="font-semibold mb-3">PAYMENT REVIEW</p>
                    <div className="w-full mb-4">
                      <HorizontalSeparator />
                    </div>

                    <div className="flex justify-between items-center gap-4">
                      <div className="font-semibold">
                        <p className="text-[#174cff] text-sm mb-2">From</p>
                        <p className="text-[#8499b1] text-xs">Paystack</p>
                        <p className="text-base mb-2">0.0.1239400</p>
                        <p className="text-[#8499b1]">RESERVE WALLET</p>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="font-semibold text-xl mb-2">
                          &#8358;{amount}
                        </p>
                        <div className="w-full">
                          <HorizontalSeparator />
                        </div>
                      </div>

                      <div className="font-semibold text-right">
                        <p className="text-[#174cff] text-sm mb-2">To</p>
                        <p className="text-[#8499b1] text-xs">RovebHeight</p>
                        <p className="text-base mb-2">0.0.1023384</p>
                        <p className="text-[#8499b1]">WHOLESALE WALLET</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-[25px] flex justify-center">
                <button
                  onClick={handleFund}
                  className={`${
                    review === "done"
                      ? "bg-[#174cff] text-white"
                      : "bg-[#e8edff] text-[#2376fa33]"
                  } w-full text-sm inline-flex items-center justify-center rounded px-[15px] py-4 font-medium leading-none focus:outline-none`}
                >
                  Fund Wallet
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
              You have funded your <span>Wholesale Wallet (0.0.1023384)</span>{" "}
              with <span>&#8358;1,023,900,000</span>. Now you can easily
              transact with different FSPs.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setFunded(true);
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

export default FundWalletModal;
