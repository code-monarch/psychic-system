import React, { useState, useEffect } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import {
  VisuallyHidden,
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import Thead from "../organisms/t-head";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import AccountsTableItem from "../organisms/accounts-table-item";
import { useGetAllAccountsQuery } from "@/redux/services/accounts/get-all-accounts";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@/lib/hooks/usePagination";
import {
  GlobalState,
  setPaginationClicked,
} from "@/redux/features/global-state";

const AccountsTemplate = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const [lastAccountId, setLastAccountId] = useState<string | null>(null);

  // Get Store State from redux store
  const { isPaginationClicked } = useSelector(GlobalState);

  // API query for all Transactions
  const { data, isLoading, isSuccess, isError } = useGetAllAccountsQuery(
    { lastAccountId: lastAccountId },
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  // Get the last account Id from the API response when pagination is changed
  useEffect(() => {
    if (isPaginationClicked) {
      setLastAccountId(data?.accounts?.[data?.accounts.length - 1]?.account);
    }
    return () => {
      dispatch(setPaginationClicked(false));
    };
  }, [data?.accounts, dispatch, isPaginationClicked]);
  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      {/* Top Section */}
      <div className='w-full flex items-center justify-between'>
        <PageTitle title='Accounts' />
      </div>
      {/* Top Section End */}

      <div className='w-full overflow-x-auto space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <Loading />
        </VisuallyHidden>

        {/* Show Table data when available */}
        <VisuallyHidden visible={isSuccess && data?.accounts?.length !== 0}>
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
                  {data?.accounts?.map((account, idx) => (
                    <AccountsTableItem
                      key={idx}
                      account={account?.account}
                      expiry={account?.expiry_timestamp}
                      tokens={account?.balance?.tokens?.[0]?.balance}
                      balance={account?.balance?.balance}
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
          visible={isError || (data?.accounts?.length === 0 && !isLoading)}
        >
          <DataFallback />
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default AccountsTemplate;
