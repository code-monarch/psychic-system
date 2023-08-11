"use Client";
import React from "react";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  IconButton,
  TransacTypeIndicator,
} from "@/ui";
import { useToggle } from "@emtech/utils";
import { TransactionsIcon } from "@emtech/icons";
import ModalCard from "../../organisms/modal-card";
import RecentTransactionsTableItem from "@/pattern/organisms/tables/recent-transactions-table-item";

const RecentTransactionsModal = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      {/* Modal Trigger */}
      <AlertDialogueTrigger>
        <IconButton
          variant='transparent'
          lefticon={<TransactionsIcon />}
          className='!w-[238px] !h-12 flex !items-center space-x-[10px] !bg-transparent text-primaryBlue !border-primaryBlue'
        >
          See All Recent Transactions
        </IconButton>
      </AlertDialogueTrigger>
      {/* Modal Trigger End */}

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay
          className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
          isopen={isOpen}
        >
          <AlertDialogueContent>
            <ModalCard
              title='Recent Transactions'
              description='View all recent transactions.'
              closeModal={() => setIsOpen()}
              className='!w-[966px]'
            >
              <div className='w-full space-y-[52px]'>
                {/* Table */}
                <table className='w-full'>
                  {/* Table Head */}
                  <thead className='bg-inherit'>
                    <tr>
                      {/* Wallet */}
                      <th
                        scope='col'
                        className='bg-surfaceColor py-4 pr-[199px] pl-4 whitespace-nowrap text-left text-primaryText text-sm font-extrabold font-sans border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg'
                      >
                        Wallet
                      </th>
                      {/* Wallet End */}

                      {/* Entity */}
                      <th
                        scope='col'
                        className='bg-surfaceColor py-4 pr-[89px] whitespace-nowrap text-right text-primaryText text-sm font-extrabold font-sans border-b border-[rgba(132, 153, 177, 0.2)]'
                      >
                        Entity
                      </th>
                      {/* Entity End */}

                      {/* Amount */}
                      <th
                        scope='col'
                        className='bg-surfaceColor py-4 pr-[89px] whitespace-nowrap text-left text-primaryText text-sm font-extrabold font-sans border-b border-[rgba(132, 153, 177, 0.2)]'
                      >
                        Amount
                      </th>
                      {/* Amount End */}

                      {/* Status */}
                      <th
                        scope='col'
                        className='bg-surfaceColor py-4 pr-[66px] whitespace-nowrap text-left text-primaryText text-sm font-extrabold font-sans border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg'
                      >
                        Status
                      </th>
                      {/* Status */}

                      {/* View More Icon */}
                      {/* <th
                        scope='col'
                        className='py-4 bg-inherit whitespace-nowrap text-left text-primaryText text-sm font-extrabold font-sans'
                      >
                      </th> */}
                      {/* View More Icon End */}
                    </tr>
                  </thead>
                  {/* Table Head End */}

                  {/* Table Body */}
                  <tbody className='bg-inherit'>
                    <RecentTransactionsTableItem
                      walletFrom='0.0.3065441'
                      walletTo='0.0.3065441'
                      entity='EMTECH'
                      date='8/9/2023'
                      time='9:30PM'
                      transacId='bbeeff43e7yuytv55fh'
                      transacType='credit'
                      amount='1,023,900,000'
                      status='Success'
                    />
                    <RecentTransactionsTableItem
                      walletFrom='0.0.3065441'
                      walletTo='0.0.3065441'
                      entity='EMTECH'
                      date='8/9/2023'
                      time='9:30PM'
                      transacId='bbeeff43e7yuytv55fh'
                      transacType='credit'
                      amount='1,023,900,000'
                      status='Pending'
                    />
                    <RecentTransactionsTableItem
                      walletFrom='0.0.3065441'
                      walletTo='0.0.3065441'
                      entity='EMTECH'
                      date='8/9/2023'
                      time='9:30PM'
                      transacId='bbeeff43e7yuytv55fh'
                      transacType='credit'
                      amount='1,023,900,000'
                      status='Failed'
                    />
                  </tbody>
                  {/* Table Body End */}
                </table>
                {/* Table End */}

                {/* Action Button and Table legend */}
                <div className='w-full flex items-center justify-between'>
                  <IconButton
                    variant='primary'
                    lefticon={<TransactionsIcon color="#fff" />}
                    className='!w-[238px] !h-12 flex !items-center space-x-[10px]'
                  >
                    See All Recent Transactions
                  </IconButton>

                  <div className='flex items-center gap-x-[16px]'>
                    {/* Credit */}
                    <div className='flex items-center gap-2'>
                      <TransacTypeIndicator transacType='credit' />
                      <p className='font-sans font-[800] text-primaryText text-[12px]'>
                        Credit
                      </p>
                    </div>
                    {/* Credit End */}

                    {/* debit */}
                    <div className='flex items-center gap-2'>
                      <TransacTypeIndicator transacType='debit' />
                      <p className='font-sans font-[800] text-primaryText text-[12px]'>
                        Debit
                      </p>
                    </div>
                    {/* debit End */}
                  </div>
                </div>
                {/* Action Button and Table legend End */}
              </div>
            </ModalCard>
          </AlertDialogueContent>
        </AlertDialogueOverlay>
      </AlertDialoguePortal>
      {/* Alert Dialogue Portal End */}
    </AlertDialogue>
  );
};

export default RecentTransactionsModal;
