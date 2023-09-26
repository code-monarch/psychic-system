"use client";
import React from "react";
import { VisuallyHidden } from "@emtech/ui";
import { CreditIcon } from "@emtech/icons";
import { useToggle } from "@emtech/utils";
import BurnedTokenDetailsModal from "@/pattern/currency/organisms/modals/burned-token-details-modal";
import moment from "moment";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

interface IBurnedTable {
  walletId: string;
  // could be "Burn amount", "distribution amount" or "burn amount"
  amount: string;
  // could be "Burn date", "distribution date" or "burn date"
  date: string;
  // could be "Burn time", "distribution time" or "burn time"
  time: string;
  // where payment was made from e.g: "paystack"
  entity: string;
  // Transaction status
  status: "Success" | "Pending" | "Failed";
}

const BurnedTokensTableItem = ({
  walletId,
  amount,
  status,
  date,
  time,
}: IBurnedTable) => {
  // Determines whether Burn tokens details modal is visible
  const [BurnTokenDetailsModal, toggleModal] = useToggle(false);

  return (
    <>
      {/* Show burn details modal when row table row is clicked */}
      <VisuallyHidden visible={BurnTokenDetailsModal ? true : false}>
        <BurnedTokenDetailsModal
          isOpen={BurnTokenDetailsModal}
          status={status}
          amount={amount}
          date={date}
          entity=''
          transactionId=''
          time=''
          transactionType='credit'
          destinationWallet='Master'
          closeModal={() => toggleModal()}
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

export default BurnedTokensTableItem;
