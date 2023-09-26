"use client";
import React, { FC } from "react";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import { IMintDetailsProps } from "@/pattern/types";
import StatusIndicator from "@/pattern/common/atoms/table-status-indicator";
import { Flex, Portal, Vstack, toastSuccess } from "@emtech/ui";
import { CopyIcon, MintDetailsModalIcon, PrinterIcon } from "@emtech/icons";
import { formatDate, formatTime, useCopyToClipboard } from "@emtech/utils";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

const styles = {
  label: `text-base text-primaryText font-sans font-[900]`,
  value: `justify-self-end text-base text-primaryText font-sans font-[500]`,
};

const MintedTokenDetailsModal: FC<IMintDetailsProps> = ({
  destinationWallet,
  amount,
  entity,
  date,
  time,
  transactionId,
  transactionType,
  status,
  isOpen,
  closeModal,
}) => {
  // Copy to clipboard hook
  // eslint-disable-next-line no-unused-vars
  const [value, copy] = useCopyToClipboard();
  return (
    <Portal isOpen={isOpen} onOpenChange={closeModal}>
      <ModalCard
        title={
          <div className='flex items-center gap-x-[16px]'>
            <h3 className='text-[24px]'>Mint Details</h3>
            <PrinterIcon />
          </div>
        }
        closeModal={() => closeModal()}
      >
        <div className='space-y-[54px]'>
          <div className='w-full flex flex-col items-center gap-y-[54px]'>
            {/* Header */}
            <div className='w-full flex flex-col items-center gap-y-[24px]'>
              <MintDetailsModalIcon />
              {/* Amount Minted */}
              <div className='text-center space-y-[8px]'>
                <h4 className='text-primaryText text-sm font-sans font-[800]'>
                  You Minted
                </h4>
                <h2 className='text-primaryText text-2xl font-sans font-[800]'>
                  {formatAmountWithDecimals(amount!)}
                </h2>
              </div>
              {/* Amount Minted End */}
            </div>
            {/* Header End */}
            <div className='w-full space-y-[36px]'>
              {/* Top */}
              <Vstack
                gap='3xl'
                className='!bg-surfaceColor !w-full !p-4 !rounded-lg'
              >
                {/* Destination */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>To:</h2>
                  <h2 className={styles.value}>{destinationWallet}</h2>
                </Flex>
                {/* Destination End */}

                {/* Entity */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Entity:</h2>
                  <h2 className={styles.value}>{entity ?? "EMTECH"}</h2>
                </Flex>
                {/* Entity End */}

                {/* Date */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Date:</h2>
                  <h2 className={styles.value}>{formatDate(date)}</h2>
                </Flex>
                {/* Date End */}

                {/* Time */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Time:</h2>
                  <h2 className={styles.value}>{formatTime(time)}</h2>
                </Flex>
                {/* Time End */}
              </Vstack>
              {/* Top End */}

              {/* Bottom */}
              <Vstack
                gap='3xl'
                className='!bg-surfaceColor !w-full !p-4 !rounded-lg'
              >
                {/* Transaction ID */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Transaction ID:</h2>
                  <div className='flex items-center gap-x-[8px]'>
                    <h2 className={styles.value}>{transactionId}</h2>
                    <div
                      onClick={() => {
                        copy(`${transactionId}`);
                        toastSuccess("Copied to clipboard");
                      }}
                      className='flex gap-2 justify-center items-center rounded-xl bg-primary-150 px-3 py-1.5 cursor-pointer'
                    >
                      <CopyIcon />
                    </div>
                  </div>
                </Flex>
                {/* Transaction ID End */}

                {/* Transaction Type */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Trasaction Type:</h2>
                  <h2 className='text-primaryText text-sm font-sans font-[900]'>
                    {transactionType}
                  </h2>
                </Flex>
                {/* Transaction Type End */}

                {/* Trasaction Status */}
                <Flex className='w-full justify-between'>
                  <h2 className={styles.label}>Trasaction Status:</h2>
                  <StatusIndicator status={status ?? "Success"} />
                </Flex>
                {/* Trasaction Status End */}
              </Vstack>
            </div>
          </div>
          {/*  */}
        </div>
      </ModalCard>
    </Portal>
  );
};

export default MintedTokenDetailsModal;
