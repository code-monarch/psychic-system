"use client";
import React, { useState } from "react";
import { joinClasses } from "@emtech/utils";
import MintToken from "../organisms/mint-token-widget";
import {
  ICurrencyPayload,
  useMintTableDetailsQuery,
} from "@/redux/services/tokens/get-currency-details.api-slice";
import MintTokensTableItem from "@/pattern/currency/organisms/tables/mint-tokens-table-item";
import CurrencyStatsCard from "@/pattern/common/organisms/cards/currency-stats-card";
import MintTokenModal from "../organisms/modals/mint-token-modal";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import { useGetMasterWalletDetailsQuery } from "@/redux/services/wallet/get-wallet-details.api-slice";
import LoadingIcon from "@/app/(appPages)/currency/loading";
import Hidden from "@/pattern/common/atoms/hidden";
import { Pagination } from "@/lib/hooks/usePagination";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const MintTokenTab = () => {
  const [page, setPage] = useState<ICurrencyPayload["offset"]>(1);

  // API query that gets already minted tokens
  const {
    data: mintedTokens,
    isSuccess,
    isLoading,
    isError,
  } = useMintTableDetailsQuery({
    offset: page,
  });

  // API query that for wallet summary
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  // API query for master wallet details
  const {
    data: masterWalletDetails,
    isLoading: isFetchingWalletDetails,
    isError: errorFetchingWalletDetails,
    isSuccess: successFetchingWalletDetails,
  } = useGetMasterWalletDetailsQuery();

  return (
    <div className='w-full h-full'>
      {/* Only show minted tokens table when API request is successful and mint details is not empty */}
      <Hidden
        visible={mintedTokens?.mintTable?.length !== 0 && isSuccess}
      >
        <div className='w-full space-y-[46px]'>
          {/* Top section */}
          <div className='w-full flex flex-col items-start gap-y-[32px]'>
            <Hidden
              visible={
                isFetchingWalletDetails &&
                !errorFetchingWalletDetails &&
                !successFetchingWalletDetails
              }
            >
              <LoadingIcon />
            </Hidden>
            <Hidden visible={successFetchingWalletDetails}>
              <div className='w-full max-w-full flex justify-start items-center gap-x-[24px] overflow-x-auto pb-[10px] custom_scollbar'>
                {/* Total Tokens Minted */}
                <div className='min-w-[391px] w-[25%]'>
                  <CurrencyStatsCard
                    title='Total Tokens minted:'
                    description='description'
                    value={String(masterWalletDetails?.balance)}
                  />
                </div>
                {/* Total Tokens Minted End */}

                {/* Master Wallet Balance */}
                <div className='min-w-[391px] w-[25%]'>
                  <CurrencyStatsCard
                    title='Master Wallet Balance:'
                    description='description'
                    value={String(masterWalletDetails?.balance)}
                  />
                </div>
                {/* Master Wallet Balance End */}

                {/* Circulating Supply */}
                <div className='min-w-[391px] w-[25%]'>
                  <CurrencyStatsCard
                    title='Circulating Supply'
                    description='description'
                    value={String(masterWalletDetails?.tokenSupply)}
                  />
                </div>
                {/* Circulating Supply End */}

                {/* Non-Circulating Supply */}
                <div className='min-w-[391px] w-[25%]'>
                  <CurrencyStatsCard
                    title='Non-Circulating Supply'
                    description='description'
                    value={String(walletSummary?.notInCirculation)}
                  />
                </div>
                {/* Non-Circulating Supply End */}
              </div>
              {/* Mint Token Modal */}
              <div className='w-[147px]'>
                <MintTokenModal btnSize='sm' />
              </div>
              {/* Mint Token Modal */}
            </Hidden>
          </div>
          {/* Top section End */}

          {/* Minted tokens table */}
          <div className='w-full space-y-[52px]'>
            <table className='w-full'>
              {/* Table Head */}
              <thead className='bg-inherit'>
                <tr>
                  {/* Mint Wallet */}
                  <th
                    scope='col'
                    className={joinClasses(
                      styles.th,
                      "pr-[87px] pl-4 font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
                    )}
                  >
                    Master Wallet
                  </th>
                  {/* Mint Wallet End */}

                  {/* Mint Amount */}
                  <th
                    scope='col'
                    className={joinClasses(
                      styles.th,
                      "pr-[134px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
                    )}
                  >
                    Mint Amount
                  </th>
                  {/* Mint Amount End */}

                  {/* Mint Date */}
                  <th
                    scope='col'
                    className={joinClasses(
                      styles.th,
                      "pr-[100px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
                    )}
                  >
                    Mint Date
                  </th>
                  {/* Mint Date End */}

                  {/* Mint Time */}
                  <th
                    scope='col'
                    className={joinClasses(
                      styles.th,
                      "pr-[30px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
                    )}
                  >
                    Mint Time
                  </th>
                  {/* Mint Time End */}
                </tr>
              </thead>
              {/* Table Head End */}

              {/* Table Body */}
              <tbody className='bg-inherit'>
                {mintedTokens?.mintTable.map((tokenDetails, idx) => (
                  <MintTokensTableItem
                    key={idx}
                    walletId={tokenDetails?.walletId}
                    amount={tokenDetails?.amount}
                    entity='Paystack'
                    date={tokenDetails?.createdAt}
                    time={tokenDetails?.createdAt}
                    status='Success'
                    destinationWallet='Master'
                    transactionId='hjshd'
                    transactionType='credit'
                  />
                ))}
              </tbody>
              {/* Table Body End */}
            </table>

            {/* Pagination */}
            <div className='w-full'>
              <Pagination
                totalPages={mintedTokens?.totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
            {/* Pagination End */}
          </div>
          {/* Minted tokens table End */}
        </div>
      </Hidden>

      {/* Only ask them to mint when they haven't minted before */}
      <Hidden
        visible={mintedTokens?.mintTable?.length === 0 || isError}
      >
        <MintToken />
      </Hidden>

      {/* Display loader when query is loading */}
      <Hidden visible={isLoading && !isError && !isSuccess}>
        <LoadingIcon />
      </Hidden>
    </div>
  );
};

export default MintTokenTab;
