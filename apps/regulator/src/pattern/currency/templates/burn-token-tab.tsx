"use client";
import React, { useState } from "react";
import { joinClasses } from "@emtech/utils";
import { Pagination, VisuallyHidden } from "@emtech/ui";
import {
  ICurrencyPayload,
  useBurnTableDetailsQuery,
} from "@/redux/services/tokens/get-currency-details.api-slice";
import BurnToken from "../organisms/burn-token-widget";
import BurnedTokensTableItem from "@/pattern/currency/organisms/tables/burned-tokens-table-item";
import CurrencyStatsCard from "@/pattern/common/organisms/cards/currency-stats-card";
import BurnTokenModal from "../organisms/modals/burn-token-modal";
import { useGetMasterWalletDetailsQuery } from "@/redux/services/wallet/get-wallet-details.api-slice";
import LoadingIcon from "@/app/(appPages)/currency/loading";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const BurnTokenTab = () => {
  const [page, setPage] = useState<ICurrencyPayload["offset"]>(1);

  // API query for already burned tokens
  const {
    data: burnedTokens,
    isSuccess,
    isLoading,
    isError,
    isFetching,
  } = useBurnTableDetailsQuery({
    offset: page,
  });

  // API query for master wallet details
  const {
    data: masterWalletDetails,
    isLoading: isFetchingWalletDetails,
    isError: errorFetchingWalletDetails,
    isSuccess: successFetchingWalletDetails,
  } = useGetMasterWalletDetailsQuery();

  return (
    <div className='w-full h-full'>
      {/* Only show table when API request is successful and mint details is not empty */}
      <VisuallyHidden
        visible={burnedTokens?.burnTable?.length !== 0 && isSuccess}
      >
        <div className='w-full space-y-[46px]'>
          {/* Top section */}
          <div className='w-full flex flex-col items-start gap-y-[32px]'>
            <VisuallyHidden
              visible={
                isFetchingWalletDetails &&
                !errorFetchingWalletDetails &&
                !successFetchingWalletDetails
              }
            >
              <LoadingIcon />
            </VisuallyHidden>
            <VisuallyHidden visible={successFetchingWalletDetails}>
              <div className='w-full flex justify-start items-center gap-x-[24px] overflow-x-auto pb-[10px] custom_scollbar'>
                {/* Total Tokens Burned */}
                <CurrencyStatsCard
                  title='Total Tokens Burned:'
                  description='description'
                  value={burnedTokens?.totalMinted}
                />
                {/* Total Tokens Burned End */}

                {/* Master Wallet Balance */}
                <CurrencyStatsCard
                  title='Master wallet Balance:'
                  description='description'
                  value={masterWalletDetails?.balance}
                />
                {/* Master Wallet Balance End */}
              </div>
              {/* Burn Token Modal */}
              <div className='w-[127px]'>
                <BurnTokenModal btnSize='sm' />
              </div>
              {/* Burn Token End */}
            </VisuallyHidden>
          </div>
          {/* Top section End */}

          {/* Minted tokens table */}
          <div className='w-full space-y-[52px]'>
            <VisuallyHidden visible={isFetching}>
              <LoadingIcon />
            </VisuallyHidden>
            <VisuallyHidden visible={!isFetching}>
              <table className='w-full'>
                {/* Table Head */}
                <thead className='bg-inherit'>
                  <tr>
                    {/* Distribution Wallet */}
                    <th
                      scope='col'
                      className={joinClasses(
                        styles.th,
                        "pr-[87px] pl-4 font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tl-lg"
                      )}
                    >
                      Distribution Wallet
                    </th>
                    {/* Distribution Wallet End */}

                    {/* Burn Amount */}
                    <th
                      scope='col'
                      className={joinClasses(
                        styles.th,
                        "pr-[134px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
                      )}
                    >
                      Burn Amount
                    </th>
                    {/* Burn Amount End */}

                    {/* Burn Date */}
                    <th
                      scope='col'
                      className={joinClasses(
                        styles.th,
                        "pr-[100px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)]"
                      )}
                    >
                      Burn Date
                    </th>
                    {/* Burn Date End */}

                    {/* Burn Time */}
                    <th
                      scope='col'
                      className={joinClasses(
                        styles.th,
                        "pr-[30px] font-[800] text-left border-b border-[rgba(132, 153, 177, 0.2)] rounded-tr-lg"
                      )}
                    >
                      Burn Time
                    </th>
                    {/* Mint Time End */}
                  </tr>
                </thead>
                {/* Table Head End */}

                {/* Table Body */}
                <tbody className='bg-inherit'>
                  {burnedTokens?.burnTable.map((tokenDetails, idx) => (
                    <BurnedTokensTableItem
                      key={idx}
                      walletId={tokenDetails?.walletId}
                      amount={tokenDetails?.amount}
                      entity='Paystack'
                      date={tokenDetails?.createdAt}
                      time={tokenDetails?.createdAt}
                      status='Success'
                    />
                  ))}
                </tbody>
                {/* Table Body End */}
              </table>
            </VisuallyHidden>

            {/* Pagination */}
            <div className='w-full'>
              <Pagination
                totalPages={burnedTokens?.totalPages}
                currentPage={page}
                page={page}
                setPage={setPage}
              />
            </div>
            {/* Pagination End */}
          </div>
          {/* Minted tokens End */}
        </div>
      </VisuallyHidden>

      {/* Only ask them to mint when they haven't minted before */}
      <VisuallyHidden
        visible={burnedTokens?.burnTable?.length === 0 || isError}
      >
        <BurnToken />
      </VisuallyHidden>

      {/* Display loader when query is loading */}
      <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
        <LoadingIcon />
      </VisuallyHidden>
    </div>
  );
};

export default BurnTokenTab;
