import React, { useState } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import {
  VisuallyHidden,
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  Pagination,
} from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import Thead from "../organisms/t-head";
import TokensTableItem from "../organisms/tokens-table-item";
import { useGetAllFungibleTokensQuery } from "@/redux/services/tokens/get-all-fungible-tokens";

const TokensTemplate = () => {
  const [page, setPage] = useState<number>(0);

  // API query for all Fungible tokens
  const { data, isLoading, isSuccess, isError } = useGetAllFungibleTokensQuery(
    null,
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      {/* Top Section */}
      <PageTitle title='Fungible Tokens' />
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
                <thead className='bg-inherit'>
                  <Thead />
                </thead>
                {/* Table Head End */}

                {/* Table Body */}
                <tbody className='bg-inherit'>
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

          {/* Pagination */}
          {/* <div className='w-full pb-6'>
            <Pagination totalPages={12} page={page} setPage={setPage} />
          </div> */}
        </VisuallyHidden>

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
