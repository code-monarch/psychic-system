import React, { FC } from "react";
import { ITransactionResponse } from "@/redux/services/transactions/get-single-transaction";
import TransferTitle from "../atoms/transfer-title";
import TransferValue from "../atoms/transfer-value";
import TransferHeaderText from "../atoms/transfer-header-text";

interface IProps {
  transfers: ITransactionResponse["transfers"];
}

const HbarTransfersWidget: FC<IProps> = ({ transfers }) => {
  return (
    <div className='bg-surfaceColor w-[50%] min-h-[352px] h-fit p-[24px] space-y-[40px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
      {/* header */}
      <div className='w-full self-start text-black text-[1.25rem] font-[400]'>
        <span className='font-[800]'>Transfers - </span>
        <span>Hbar Transfers</span>
      </div>
      {/* header End */}

      <div className='space-y-[24px]'>
        {/* Transfers Header */}
        <div className='w-full flex items-center justify-between pb-[24px] border-b border-b-[rgba(23,76,255,0.20)]'>
          <TransferHeaderText text='From' />
          <TransferHeaderText text='To' />
        </div>
        {/* Transfers Header End */}

        {/* Transfers */}
        <div className='w-full flex items-start justify-between'>
          {/* Tranfer From */}
          <div className='text-base text-black font-[800] flex-1 flex items-start space-x-[40px]'>
            {/* Account */}
            <div className='flex flex-col space-y-[16px] text-black'>
              <TransferTitle title=' ACCOUNT' />
              <TransferValue value={transfers?.[3]?.account} type="account" />
            </div>
            {/* Account End */}

            {/* Hbar Amount */}
            <div className='flex flex-col space-y-[16px] text-black'>
              <TransferTitle title=' HBAR AMOUNT' />
              <TransferValue
                value={transfers?.[3]?.amount}
                type='amount'
                destination='from'
              />
            </div>
            {/* Hbar Amount End */}
          </div>
          {/* Tranfer From End */}

          {/* Transfer To */}
          <div className='text-base text-black font-[800] flex-1 flex items-start space-x-[40px]'>
            {/* Account */}
            <div className='flex flex-col space-y-[16px] text-black'>
              <TransferTitle title=' ACCOUNT' />
              {transfers?.map((transfer, idx) => (
                <>
                  {idx !== 3 && (
                    <TransferValue
                      key={idx}
                      value={transfer?.account}
                      type='account'
                    />
                  )}
                </>
              ))}
            </div>
            {/* Account End */}

            {/* Hbar Amount */}
            <div className='flex flex-col space-y-[16px] text-black'>
              <TransferTitle title=' HBAR AMOUNT' />
              {transfers?.map((transfer, idx) => (
                <>
                  {idx !== 3 && (
                    <TransferValue
                      key={idx}
                      value={transfer?.amount}
                      type='amount'
                      destination='to'
                    />
                  )}
                </>
              ))}
            </div>
            {/* Hbar Amount End */}
          </div>
          {/* Transfer To End */}
        </div>
        {/* Transfers End */}
      </div>
    </div>
  );
};

export default HbarTransfersWidget;
