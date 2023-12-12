import React, { useEffect, useState } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import {
  VisuallyHidden,
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import Thead from "../organisms/t-head";
import TokensTableItem from "../organisms/tokens-table-item";
import { useGetAllFungibleTokensQuery } from "@/redux/services/tokens/get-all-fungible-tokens";
import { Pagination } from "@/lib/hooks/usePagination";
import { useSelector, useDispatch } from "react-redux";
import {
  GlobalState,
  setPaginationClicked,
} from "@/redux/features/global-state";

const TokensTemplate = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const [lastTokenId, setLastTokenId] = useState<string | null>(null);

  // Get Store State from redux store
  const { isPaginationClicked } = useSelector(GlobalState);
  console.log("IS PAGINATION CLICKED: ", isPaginationClicked);

  // API query for all Fungible tokens
  const { data, isLoading, isSuccess, isError } = useGetAllFungibleTokensQuery(
    { lastTokenId: lastTokenId },
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  // Get the last token Id from the API response when pagination is changed
  useEffect(() => {
    if (isPaginationClicked) {
      setLastTokenId(data?.tokens[data?.tokens.length - 1]?.token_id);
    }
    return () => {
      dispatch(setPaginationClicked(false));
    };
  }, [data?.tokens, dispatch, isPaginationClicked]);

  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      {/* Top Section */}
      <div className='w-full flex items-center justify-start'>
        <PageTitle title='Fungible Tokens' />
      </div>
      {/* Top Section End */}

      <div className='w-full overflow-x-auto space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <Loading />
        </VisuallyHidden>

        {/* Show Table data when available */}
        <VisuallyHidden visible={isSuccess && data?.tokens?.length !== 0}>
          <ScrollArea className='!w-full pb-[28px]'>
            <ScrollAreaViewport className='w-full'>
              <table className='w-full'>
                {/* Table Head */}
                <thead className='w-full bg-inherit'>
                  <Thead />
                </thead>
                {/* Table Head End */}

                {/* Table Body */}
                <tbody className='w-full bg-inherit'>
                  {data?.tokens?.map((token, idx) => (
                    <TokensTableItem
                      key={idx}
                      tokens={token?.token_id}
                      symbol={token?.symbol}
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
          visible={isError || (data?.tokens?.length === 0 && !isLoading)}
        >
          <DataFallback />
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default TokensTemplate;
