import React from "react";
import { useRouter } from "next/navigation";
import { StatusIndicator } from "@emtech/ui";
import moment from "moment";
import { TransactionType } from "../molecules/transaction-type";

interface ITransactionTableItemProps {
  transactionId: string;
  transactionType: string;
  status: string;
  timestamp: string | number;
}

const TransactionsTableItem = ({
  transactionId,
  transactionType,
  status,
  timestamp,
}: ITransactionTableItemProps) => {
  const { push } = useRouter();

  const timestampToFormat = Number(timestamp);

  const handleClick = () => {
    push(`/transaction/${timestamp}`);
  };
  return (
    <tr
      className='w-full hover:bg-surfaceColor cursor-pointer'
      onClick={() => handleClick()}
    >
      {/* Transaction ID */}
      <td className='whitespace-nowrap pl-10 pr-[203px] py-4 text-base font-sans font-[500] text-semPrimary'>
        <span>{transactionId}</span>
      </td>
      {/* Transaction ID End */}

      {/* Transaction Type */}
      <td className='whitespace-nowrap py-4 pr-[248px] text-base font-sans text-inputPlaceholder font-[500]'>
        {<TransactionType transactionType={transactionType} />}
      </td>
      {/* Transaction Type End */}

      {/* Status */}
      <td className='whitespace-nowrap py-4 pr-[181px]'>
        <StatusIndicator status={status ?? "Pending"} />
      </td>
      {/* Status End */}

      {/* Time */}
      <td className='flex items-center space-x-[8px] whitespace-nowrap pr-[53px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500]'>
        <span>{moment.unix(timestampToFormat).format("LTS")}</span>
        <span>{moment.unix(timestampToFormat).format("LL")}</span>
      </td>
      {/* Time End */}
    </tr>
  );
};

export default TransactionsTableItem;
