import React, { FC } from "react";
import TransactionDetailField from "../molecules/transaction-detail-field";
import moment from "moment";
import { TransactionType } from "../molecules/transaction-type";

interface IProps {
  transactionType: string;
  consensusAt: string;
  transactionHash: string;
  block: string | number;
  nodeSubmittedTo: string;
  tokenId: string;
  payerAccount: string;
  chargedFee: string | number;
  maxFee: string;
  validDuration: string;
}

const TransactionInfoWidget: FC<IProps> = ({
  transactionType,
  consensusAt,
  transactionHash,
  block,
  nodeSubmittedTo,
  tokenId,
  payerAccount,
  chargedFee,
  maxFee,
  validDuration,
}) => {
  const duration = moment.duration(validDuration, "seconds").humanize();
  return (
    <div className='bg-surfaceColor w-full min-h-[352px] h-fit grid grid-cols-2 gap-14 p-[24px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
      {/* Left Side */}
      <div className='w-full col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Type */}
        <TransactionDetailField
          label='TYPE'
          value={<TransactionType transactionType={transactionType} />}
        />
        {/* Consensus At */}
        <TransactionDetailField label='Consensus at' value={consensusAt} />
        {/* Transaction Hash */}
        <TransactionDetailField
          label='Transaction Hash'
          value={transactionHash}
        />
        {/* Block */}
        <TransactionDetailField label='Block' value={block} />

        {/* Node submitted To */}
        <TransactionDetailField
          label='Node Submitted To'
          value={nodeSubmittedTo}
        />
      </div>
      {/* Left Side End */}

      {/* Right Side */}
      <div className='col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Token ID */}
        <TransactionDetailField label='Token ID' value={tokenId} />
        {/* Payer Account */}
        <TransactionDetailField label='Payer Account' value={payerAccount} />
        {/* Charged Fee */}
        <TransactionDetailField label='Charged Fee' value={chargedFee} />
        {/* Max Fee */}
        <TransactionDetailField label='Max Fee' value={maxFee} />
        {/* Valid Duration */}
        <TransactionDetailField label='Valid Duration' value={duration} />
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default TransactionInfoWidget;
