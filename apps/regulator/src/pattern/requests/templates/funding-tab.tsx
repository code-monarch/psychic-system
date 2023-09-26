"use client";
import React, { useState } from "react";
import InstitutionalWalletRequestTableItem from "@/pattern/requests/organisms/tables/institutional-wallet-requests-table-item";
import TopRequestsSection from "../organisms/requests-top-section";
import { VisuallyHidden } from "@emtech/ui";
import { useGetRequestsTableQuery } from "@/redux/services/requests/get-requests-table.api-slice";
import LoadingIcon from "@/app/(appPages)/requests/loading";
import CreateRequestFormWidget from "../organisms/create-request-form-widget";
import { FundingRequestIcon } from "@emtech/icons";
import { RequestType } from "@/redux/services/requests/create-initial-request-form";
import Thead from "../organisms/tables/t-head";
import { Pagination } from "@/lib/hooks/usePagination";

const requestWallets = [
  {
    name: "Reserve Wallet",
    value: "reserve",
  },
  {
    name: "Wholesale Wallet",
    value: "wholesale",
  },
  {
    name: "Retail Wallet",
    value: "retail",
  },
];

const FundingTab = () => {
  const [page, setPage] = useState<number>(1);

  // Determines Request Type
  const [requestType, setRequestType] = useState<
    "Reserve" | "Wholesale" | "Retail"
  >("Reserve");

  // API query for master wallet details
  const {
    data: requestTable,
    isLoading,
    isError,
    isSuccess,
  } = useGetRequestsTableQuery({
    requestType: RequestType.wallet,
    offset: page,
  });
  return (
    <div className='w-full space-y-[16px]'>
      {/* Top section */}
      <VisuallyHidden visible={isLoading ? false : true}>
        <TopRequestsSection
          setWalletType={setRequestType}
          walletType={requestType}
          totalRequests={requestTable?.requestTable?.length}
          wallets={requestWallets}
        />
      </VisuallyHidden>
      {/* Top section End */}
      <div className='w-full overflow-x-auto custom_scollbar space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <LoadingIcon />
        </VisuallyHidden>

        {/* Show Table when isSuccess and query is not empty */}
        <VisuallyHidden
          visible={isSuccess && requestTable?.requestTable?.length !== 0}
        >
          <table className='w-full'>
            {/* Table Head */}
            <thead className='bg-inherit'>
              <Thead />
            </thead>
            {/* Table Head End */}

            {/* Table Body */}
            <tbody className='bg-inherit'>
              {requestTable?.requestTable?.map((item, idx) => (
                <InstitutionalWalletRequestTableItem
                  key={idx}
                  id={item?.id}
                  requestType={item?.requestType}
                  entity={item?.entity}
                  status={item?.status}
                  timestamp={item?.timestamp}
                />
              ))}
            </tbody>
            {/* Table Body End */}
          </table>
          {/* Pagination */}
          <div className='w-full pb-6'>
            <Pagination
              totalPages={requestTable?.totalPages}
              page={page}
              setPage={setPage}
            />
          </div>
        </VisuallyHidden>

        {/* Show Placeholder when table is empty */}
        <VisuallyHidden
          visible={
            isError || (requestTable?.requestTable?.length === 0 && !isLoading)
          }
        >
          <div className='w-full h-[400px] flex justify-center items-center text-primaryText text-3xl font-bold'>
            <CreateRequestFormWidget
              description={`No requests for ${requestType} Wallets yet. Create a Request form for interested Institutions to get started,`}
              icon={<FundingRequestIcon />}
              actionText='Create an Institutional Request Form'
            />
          </div>
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default FundingTab;
