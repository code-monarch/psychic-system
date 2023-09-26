"use client";
import React, { useState } from "react";
import { useGetRequestsTableQuery } from "@/redux/services/requests/get-requests-table.api-slice";
import LoadingIcon from "@/app/(fspPages)/requests/loading";
import { requestsWallets } from "@/lib/constants/index.constants";
import TopRequestsSection from "../organisms/top-requests-section";
import InstitutionalWalletRequestTableItem from "../organisms/institutional-wallet-request-table-item";
import Hidden from "@/pattern/common/atoms/hidden";
import MakeRequest from "../organisms/make-request";
import { RequestType } from "@/redux/services/requests/get-request-form-to-fill.api-slice";
import TableHead from "../organisms/table-head";
import MakeRequestBtn from "../organisms/make-request-btn";
import { Pagination } from "@/lib/hooks/usePagination";

const InstitutionalRequestTab = () => {
  const [page, setPage] = useState<number>(1);

  // Determines Request Type
  const [requestType, setRequestType] = useState<
    "Reserve" | "Wholesale" | "Retail"
  >("Reserve");

  // API query for master wallet details
  const { data, isLoading, isError, isSuccess, error } =
    useGetRequestsTableQuery({
      requestType: RequestType.wallet,
    });

  return (
    <div className='w-full space-y-[16px]'>
      {/* Top section */}
      {/* Only show when table is not empty */}
      <Hidden visible={data?.requestTable?.length !== 0 && error && !isLoading}>
        <TopRequestsSection
          setWalletType={setRequestType}
          walletType={requestType}
          wallets={requestsWallets}
        />
      </Hidden>
      {/* Top section End */}
      <div className='w-full overflow-x-auto custom_scollbar space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <Hidden visible={isLoading && !isError && !isSuccess}>
          <LoadingIcon />
        </Hidden>
        {/* Show Table when isSuccess and query is not empty */}
        <Hidden visible={data?.requestTable?.length !== 0 && !isLoading}>
          <table className='w-full'>
            {/* Table Head */}
            <TableHead />
            {/* Table Head End */}

            {/* Table Body */}
            <tbody className='bg-inherit'>
              {data?.requestTable?.map((item, idx) => (
                <InstitutionalWalletRequestTableItem
                  key={idx}
                  id={`${item?.id}`}
                  entity={item?.entity}
                  timestamp={item?.timestamp}
                  status={item?.status}
                />
              ))}
            </tbody>
            {/* Table Body End */}
          </table>
          {/* Pagination */}
          <div className='w-full'>
            <Pagination
              totalPages={data?.totalPages}
              page={page}
              setPage={setPage}
            />
          </div>
        </Hidden>
        {/* \Make Request Button */}
        <Hidden visible={!isLoading && data?.requestTable?.length !== 0}>
          <MakeRequestBtn actionText='Make Institutional Wallet Request' />
        </Hidden>

        {/* Show Placeholder when table is empty */}
        <Hidden visible={data?.requestTable?.length === 0 && !isLoading}>
          <MakeRequest
            description="You haven't made any request for an Institutional Wallet."
            actionText='Make Institutional Wallet Request'
          />
        </Hidden>
      </div>
    </div>
  );
};

export default InstitutionalRequestTab;
