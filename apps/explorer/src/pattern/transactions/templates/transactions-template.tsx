import React, { useState, useEffect } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import SelectDropDown from "@/pattern/common/organisms/select-dropdown";
import { TRANSACTION_TYPE, TransactionTypeEnum } from "@/lib/constants";
import {
  SelectIcon,
  VisuallyHidden,
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import { useGetAllTransactionsQuery } from "@/redux/services/transactions/get-transactions";
import Thead from "../organisms/t-head";
import TransactionsTableItem from "../organisms/transactions-table-item";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@/lib/hooks/usePagination";
import { GlobalState, setPaginationClicked } from "@/redux/features/global-state";

const TransactionsTemplate = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const [lastTransactionId, setLastTransactionId] = useState<string | null>(
    null
  );

  // Get Store State from redux store
  const { isPaginationClicked } = useSelector(GlobalState);

  const [transactionType, setTransactionType] = useState<string>("");

  // API query for all Transactions
  const { data, isLoading, isSuccess, isError } = useGetAllTransactionsQuery(
    {
      transactiontype: TransactionTypeEnum[transactionType],
      timestamp: lastTransactionId,
    },
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  // Get the last transaction Id from the API response when pagination is changed
  useEffect(() => {
    if (isPaginationClicked) {
      setLastTransactionId(
        data?.transactions?.[data?.transactions.length - 1]
          ?.valid_start_timestamp
      );
    }
    return () => {
      dispatch(setPaginationClicked(false));
    };
  }, [data?.transactions, dispatch, isPaginationClicked]);
  return (
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

      <div className='w-full overflow-x-auto space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <Loading />
        </VisuallyHidden>

        {/* Show Table data when available */}
        <VisuallyHidden visible={isSuccess && data?.transactions?.length !== 0}>
          <ScrollArea className='!w-full pb-[28px]'>
            <ScrollAreaViewport className='w-full'>
              <table className='w-full h-full'>
                {/* Table Head */}
                <thead className='bg-inherit'>
                  <Thead />
                </thead>
                {/* Table Head End */}

                {/* Table Body */}
                <tbody className='bg-inherit'>
                  {data?.transactions?.map((transaction, idx) => (
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
        </VisuallyHidden>
          {/* Pagination */}
          <div className='w-full pb-6'>
            <Pagination page={page} setPage={setPage} />
          </div>

        {/* Show Placeholder when table data is empty */}
        <VisuallyHidden
          visible={isError || (data?.transactions?.length === 0 && !isLoading)}
        >
          <DataFallback />
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default TransactionsTemplate;
