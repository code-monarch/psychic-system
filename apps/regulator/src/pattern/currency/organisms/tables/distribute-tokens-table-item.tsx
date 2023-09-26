"use client";
import React, { FC } from "react";
import { VisuallyHidden } from "@emtech/ui";
import { CreditIcon } from "@emtech/icons";
import { useToggle } from "@emtech/utils";
import DistributedTokenDetailsModal from "@/pattern/currency/organisms/modals/distributed-token-details-modal";
import moment from "moment";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

interface IMintTable {
  walletId: string;
  // could be "Mint amount", "distribution amount" or "Mint amount"
  amount: string;
  // could be "Mint date", "distribution date" or "Mint date"
  date: string;
  // could be "Mint time", "distribution time" or "Mint time"
  time: string;
  // where payment was made from e.g: "paystack"
  entity: string;
  // Transaction status
  status: "Success" | "Pending" | "Failed";
}

const DistributeTokensTableItem: FC<IMintTable> = ({
  walletId,
  amount,
  status,
  date,
  time,
  entity,
  destinationWallet,
  transactionId,
  transactionType,
}) => {
  // Determines whether Mint tokens details modal is visible
  const [MintTokenDetailsModal, toggleModal] = useToggle(false);

  return (
    <>
      {/* Show distribution details modal when row table row is clicked */}
      <VisuallyHidden visible={MintTokenDetailsModal ? true : false}>
        <DistributedTokenDetailsModal
          isOpen={MintTokenDetailsModal}
          status={status}
          closeModal={() => toggleModal()}
          amount={amount}
          date={date}
          time={time}
          entity={entity}
          destinationWallet={destinationWallet}
          transactionId={transactionId}
          transactionType={transactionType}
        />
      </VisuallyHidden>
      <tr
        className='w-full hover:bg-surfaceColor cursor-pointer'
        onClick={() => toggleModal()}
      >
        {/* Wallet ID */}
        <td className='flex items-center gap-x-[16px] whitespace-nowrap pl-6 pr-[119px] py-4 text-base font-sans font-[500] text-semPrimary'>
          <span>
            <CreditIcon />
          </span>
          <span>{walletId}</span>
        </td>
        {/* Wallet ID End */}

        {/* Burn Amount */}
        <td className='whitespace-nowrap py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
          {formatAmountWithDecimals(amount!)}
        </td>
        {/* Burn Amount End */}

        {/* Burn Date */}
        <td className='whitespace-nowrap pr-[85px] py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
          {moment(date).format("Do MMM YYYY")}
        </td>
        {/* Burn Date End */}

        {/* Burn Time */}
        <td className='whitespace-nowrap pr-[16px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
          {moment(time).format("h:mm:ss a")}
        </td>
        {/* Burn Time End */}
      </tr>
    </>
  );
};

export default DistributeTokensTableItem;
