"use client";
import React, { useState } from "react";
import { joinClasses, useToggle } from "@emtech/utils";
import { IconButton } from "@emtech/ui";
import {
  ICurrencyPayload,
  useDistributionTableDetailsQuery,
} from "@/redux/services/tokens/get-currency-details.api-slice";
import DistributeTokenWidget from "../organisms/distribute-token-widget";
import DistributeTokensTableItem from "@/pattern/currency/organisms/tables/distribute-tokens-table-item";
import CurrencyStatsCard from "@/pattern/common/organisms/cards/currency-stats-card";
import FundDistributionWalletModal from "../organisms/modals/fund-distribution-wallet-modal";
import { PlusIcon } from "@emtech/icons";
import { useGetDistributionWalletDetailsQuery } from "@/redux/services/wallet/get-wallet-details.api-slice";
import LoadingIcon from "@/app/(appPages)/currency/loading";
import Hidden from "@/pattern/common/atoms/hidden";
import { Pagination } from "@/lib/hooks/usePagination";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap py-4`,
};

const DistributeTokenTab = () => {
  const [page, setPage] = useState<ICurrencyPayload["offset"]>(1);

  // Determines whether distribute token modal is visible
  const [distributeTokenModal, setDistributeTokenModal] = useToggle(false);

  // API query for distributed tokens
  const {
    data: distributedTokens,
    isSuccess,
    isLoading,
    isError,
    isFetching,
  } = useDistributionTableDetailsQuery({
    offset: page,
  });

  // API query for distribution wallet details
  const {
    data: distributionWalletDetails,
    isLoading: isFetchingWalletDetails,
    isSuccess: successFetchingWalletDetails,
    isError: errorFetchingWalletDetails,
  } = useGetDistributionWalletDetailsQuery();

  return (
    <div className='w-full h-full'>
      {/* Only show table when API request is successful and mint details is not empty */}
      <Hidden
        visible={
          distributedTokens?.distributionTable?.length !== 0 && isSuccess
        }
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
              <div className='w-full flex justify-start items-center gap-x-[24px] overflow-x-auto pb-[10px] custom_scollbar'>
                {/* Total Tokens Distributed */}
                <CurrencyStatsCard
                  title='Total Tokens distributed:'
                  description='description'
                  value={`${
                    distributionWalletDetails?.tokenDistributed ?? "0"
                  }`}
                />
                {/* Total Tokens Distributed End */}

                {/* Distribution Wallet Balance */}
                <CurrencyStatsCard
                  title='Distribution wallet Balance:'
                  description='description'
                  value={`${distributionWalletDetails?.balance ?? "0"}`}
                />
                {/* Distribution Wallet Balance End */}
              </div>
              {/* Fund Distribution Wallet modal trigger and Modal */}
              <div className='w-[127px]'>
                {/* Fund Distribution wallet Modal Trigger */}
                <IconButton
                  lefticon={<PlusIcon color='#fff' />}
                  className='!h-[37px] !w-[235px]'
                  size='sm'
                  fullwidth
                  onClick={() => setDistributeTokenModal()}
                >
                  Fund Distribution Wallet
                </IconButton>
                {/* Fund Distribution wallet Modal Trigger End */}

                {/* Fund Distribution Wallet Modal */}
                <Hidden visible={distributeTokenModal ? true : false}>
                  <FundDistributionWalletModal
                    closeModal={setDistributeTokenModal}
                    isOpen={distributeTokenModal}
                  />
                </Hidden>
                {/* Fund Distribution Wallet Modal End */}
              </div>
              {/* Fund Distribution Wallet modal trigger and Modal End */}
            </Hidden>
          </div>
          {/* Top section End */}

          {/* Distributed tokens table */}
          <div className='w-full space-y-[52px]'>
            <Hidden visible={!isFetching}>
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
                      Amount
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
                  {distributedTokens?.distributionTable.map(
                    (tokenDetails, idx) => (
                      <DistributeTokensTableItem
                        key={idx}
                        walletId={tokenDetails?.walletId}
                        amount={tokenDetails?.amount}
                        entity='Paystack'
                        date={tokenDetails?.createdAt}
                        time={tokenDetails?.createdAt}
                        status='Success'
                      />
                    )
                  )}
                </tbody>
                {/* Table Body End */}
              </table>
            </Hidden>
            <Hidden visible={isFetching}>
              <LoadingIcon />
            </Hidden>

            {/* Pagination */}
            <div className='w-full'>
              <Pagination
                totalPages={distributedTokens?.totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
            {/* Pagination End */}
          </div>
          {/* Distributed tokens table End */}
        </div>
      </Hidden>

      {/* Only ask them to distribute token when they haven't disitributed before */}
      <Hidden
        visible={distributedTokens?.distributionTable?.length === 0 || isError}
      >
        <DistributeTokenWidget />
      </Hidden>

      {/* Display loader when query is loading */}
      <Hidden visible={isLoading && !isError && !isSuccess}>
        <LoadingIcon />
      </Hidden>
    </div>
  );
};

export default DistributeTokenTab;
