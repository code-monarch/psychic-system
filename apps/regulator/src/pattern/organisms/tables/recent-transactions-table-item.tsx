import React from "react";
import StatusIndicator from "./table-status-indicator";
import { TransacTypeIndicator } from "@emtech/ui";
import { TransactionsIcon } from "@emtech/icons";

interface IProps {
  walletFrom: string;
  walletTo: string;
  entity: string;
  date: string;
  time: string;
  transacId: string;
  transacType: "debit" | "credit";
  amount: string | number;
  status: "Success" | "Pending" | "Failed";
}

const RecentTransactionsTableItem = ({
  walletFrom,
  walletTo,
  entity,
  date,
  time,
  transacId,
  transacType,
  amount,
  status,
}: IProps) => (
  <tr className='w-full hover:bg-surfaceColor cursor-pointer'>
    {/* Wallet Id */}
    <td className='flex items-center justify-start !space-x-[8px] whitespace-nowrap pr-[119px] py-4 text-base font-sans text-semPrimary'>
      <TransacTypeIndicator transacType={transacType} />
      <span>{walletFrom}</span>
    </td>
    {/* Wallet Id End */}

    {/* Entity */}
    <td className='whitespace-nowrap py-4 text-base font-sans text-semPrimary'>
      {entity}
    </td>
    {/* Entity End */}

    {/* Amount */}
    <td className='whitespace-nowrap pr-[85px] py-4 text-base font-sans text-semPrimary'>
      {amount}
    </td>
    {/* Amount End */}

    {/* Status */}
    <td className='whitespace-nowrap pr-[16px] py-4 text-base text-left font-sans text-semPrimary'>
      <StatusIndicator status={status} />
    </td>
    {/* Status End */}

    {/* Transactions Icon */}
    <td className='whitespace-nowrap pl-[16px] py-4 text-base text-right font-sans text-gray-500'>
      <TransactionsIcon color='#1E252D' width={20} height={20} />
    </td>
    {/* Transactions Icon End */}
  </tr>
);

export default RecentTransactionsTableItem;
