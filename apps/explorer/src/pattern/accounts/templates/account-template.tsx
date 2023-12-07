import React, { FC, useState } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import {
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  SelectIcon,
  VisuallyHidden,
} from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import { useGetSingleAccountQuery } from "@/redux/services/accounts/get-single-account";
import AccountInfoWidget from "../organisms/account-info-widget";
import TransactionsTableItem from "@/pattern/transactions/organisms/transactions-table-item";
import Thead from "@/pattern/transactions/organisms/t-head";
import { Pagination } from "@/lib/hooks/usePagination";
import SelectDropDown from "@/pattern/common/organisms/select-dropdown";
import { useGetAccountTransactionsByTransactionTypeQuery } from "@/redux/services/transactions/get-account-transactions-by-transactionType";
import { TRANSACTION_TYPE } from "@/lib/constants";
import { ITransactionsPayload } from "@/redux/services/transactions/get-transactions";

interface IProps {
  accountId: string;
}

const AccountTemplate: FC<IProps> = ({ accountId }) => {
  // Holds transaction type select value
  const [transactionType, setTransactionType] = useState<
    ITransactionsPayload["transactiontype"] | null
  >(null);

  // API query for single Transaction
  const { data, isLoading, isSuccess, isError } = useGetSingleAccountQuery({
    account_id: accountId,
  });

  // API query for transactions of a particular account
  const {
    data: transactions,
    isLoading: loadingTransactions,
    isSuccess: transactionsSuccess,
    isError: transactionsError,
  } = useGetAccountTransactionsByTransactionTypeQuery({
    accountId: accountId,
    transactiontype: transactionType,
  });
  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      <PageTitle title='Account' />
      {/* Show Loading Icon when isLoading */}
      <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
        <Loading />
      </VisuallyHidden>

      {/* Show Placeholder when Account data is empty */}
      <VisuallyHidden
        visible={isError || (data?.account?.length === 0 && !isLoading)}
      >
        <DataFallback />
      </VisuallyHidden>

      {/* Account data */}
      <VisuallyHidden visible={isSuccess && !!data}>
        <AccountInfoWidget
          account_id={data?.account}
          EVM_address={data?.evm_address}
          balance={data?.balance?.balance}
          stake_to={data?.staked_account_id}
          pending_reward={data?.pending_reward}
          auto_renew_period={data?.auto_renew_period}
          expires_at={data?.expiry_timestamp}
          admin_key={data?.key?.key}
        />
      </VisuallyHidden>
      {/* Account data End */}

      {/* Account Transactions Table */}
      <VisuallyHidden
        visible={
          transactionsSuccess && transactions?.transactions?.length !== 0
        }
      >
        <div className='w-full flex flex-col space-y-[42px]'>
          {/* Top Section */}
          <div className='w-full flex items-center justify-between'>
            <PageTitle title='Transactions' />
            <SelectDropDown
              trigger={<SelectIcon />}
              list={TRANSACTION_TYPE}
              value={transactionType}
              setValue={setTransactionType}
            />
          </div>
          {/* Top Section End */}

          {/* Table */}
          <ScrollArea className='!w-full pb-[28px]'>
            <ScrollAreaViewport className='w-full'>
              <table className='w-full'>
                {/* Table Head */}
                <thead className='bg-inherit'>
                  <Thead />
                </thead>
                {/* Table Head End */}

                {/* Table Body */}
                <tbody className='bg-inherit'>
                  {transactions?.transactions?.map((transaction, idx) => (
                    <TransactionsTableItem
                      key={idx}
                      transactionId={transaction?.transaction_id}
                      transactionType={transaction?.name}
                      status={transaction?.result}
                      timestamp={transaction?.consensus_timestamp}
                    />
                  ))}
                </tbody>
                {/* Table Body End */}
              </table>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation='horizontal' />
            <ScrollAreaScrollCorner />
          </ScrollArea>
          {/* Table End */}

          {/* Pagination */}
          <div className='w-full pb-6'>
            {/* <Pagination totalPages={12} page={page} setPage={setPage} /> */}
          </div>
        </div>
      </VisuallyHidden>
      {/* Account Transactions Table */}

      {/* Show Placeholder when Account Trasactions Table is empty */}
      <VisuallyHidden
        visible={
          transactionsError ||
          (transactions?.transactions?.length === 0 && !loadingTransactions)
        }
      >
        <div className='w-full h-[400px] flex justify-center items-center text-primaryText text-3xl font-bold'>
          No Transaction Records Found
        </div>
      </VisuallyHidden>
    </div>
  );
};

export default AccountTemplate;
