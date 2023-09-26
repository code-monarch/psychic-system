"use client";
import React, { useState } from "react";
import TotalTokensIssuedCard from "../../common/organisms/cards/total-tokens-issued-card";
import TotalTokensBurnedCard from "../../common/organisms/cards/total-tokens-burned-card";
import Credits from "../molecules/credits-widget";
import Debits from "../molecules/debits-widget";
import TokensTotalSummary from "../organisms/tokens-total-summary";
import { joinClasses } from "@emtech/utils";
import InstitutionalWalletTableItem from "@/pattern/wallets/organisms/tables/institutional-wallet-table-item";
import { VisuallyHidden } from "@emtech/ui";
import {
  IWalletDetailsPayload,
  useGetInstitutionalWalletDetailsQuery,
} from "@/redux/services/wallet/get-wallet-details.api-slice";
import { FilterIcon } from "@emtech/icons";
import SelectDropDown from "@/pattern/common/organisms/select-dropdown";
import LoadingIcon from "@/app/(appPages)/wallet/loading";
import { Pagination } from "@/lib/hooks/usePagination";

const styles = {
  th: `bg-surfaceColor text-primaryText text-sm font-extrabold font-sans whitespace-nowrap  border-b border-[rgba(132, 153, 177, 0.2)] py-4`,
};

const filterTypes = [
  {
    name: "Active",
    value: "active",
  },
  {
    name: "Inactive",
    value: "inactive",
  },
];

const InstitutionalWalletTab = () => {
  const [page, setPage] = useState<IWalletDetailsPayload["offset"]>(1);
  const [filter, setfilter] = useState<"active" | "inactive">("active");

  // API query for INSTITUTIONAL WALLET
  const {
    data: institutionalWalletDetails,
    isSuccess,
    isLoading,
    isError,
  } = useGetInstitutionalWalletDetailsQuery({
    offset: page,
  });
  return (
    <div className='w-full space-y-[50px] overflow-x-auto'>
      {/* top */}
      <div className='w-full space-y-[52px] overflow-x-auto pb-16 custom_scollbar border-spacing-3 border-b border-b-[#C6D0DB]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <LoadingIcon />
        </VisuallyHidden>

        {/* Show Table when isSuccess and query is not empty */}
        <VisuallyHidden
          visible={isLoading ? false : true}
        >
          <table className='w-full min-h-[400px]'>
            {/* Table Head */}
            <thead className='bg-inherit'>
              <tr>
                {/* Wallet ID */}
                <th
                  scope='col'
                  className={joinClasses(
                    styles.th,
                    "pr-[87px] pl-4 text-left rounded-tl-lg"
                  )}
                >
                  Wallet ID
                </th>
                {/* Wallet ID End */}

                {/* Institution's name */}
                <th
                  scope='col'
                  className={joinClasses(styles.th, "pr-[87px] text-center")}
                >
                  Institution&apos;s name
                </th>
                {/* Institution's name End */}

                {/* Balance */}
                <th
                  scope='col'
                  className={joinClasses(styles.th, "pr-[107px] text-center")}
                >
                  Balance
                </th>
                {/* Balance End */}

                {/* Wallet Type */}
                <th
                  scope='col'
                  className={joinClasses(styles.th, "pr-[76px] text-left")}
                >
                  Wallet Type
                </th>
                {/* Wallet Type */}

                {/* Number Of End User Wallet */}
                <th
                  scope='col'
                  className={joinClasses(styles.th, "pr-[76px] text-ccenter")}
                >
                  Number of End User Wallet
                </th>
                {/* Number Of End User Wallet */}

                {/* Status */}
                <th
                  scope='col'
                  className={joinClasses(
                    styles.th,
                    "px-[16px] text-left rounded-tr-lg"
                  )}
                >
                  Status
                </th>
                {/* Status */}

                {/* Filter Icon */}
                <th
                  scope='col'
                  className={joinClasses("px-[16px] text-left rounded-tr-lg")}
                >
                  <SelectDropDown
                    trigger={<FilterIcon />}
                    list={filterTypes}
                    value={filter}
                    setValue={setfilter}
                    hideSelectValue
                  />
                </th>
                {/* Filter Icon */}
              </tr>
            </thead>
            {/* Table Head End */}

            {/* Table Body */}
            <tbody className='bg-inherit'>
              {institutionalWalletDetails?.institutionalTable?.map(
                (item, idx) => (
                  <InstitutionalWalletTableItem
                    key={idx}
                    walletId={item?.walletId}
                    balance={String(item?.balance)}
                    NumberOfEndUsers={String(item?.endUsers)}
                    walletType={item?.walletType}
                    institutionName={item?.institutionName}
                    status={item?.status}
                  />
                )
              )}
            </tbody>
            {/* Table Body End */}
          </table>
          <div className='w-full'>
            <Pagination
              totalPages={institutionalWalletDetails?.totalPages}
              page={page}
              setPage={setPage}
            />
          </div>
        </VisuallyHidden>

        {/* Show Placeholder when table is empty */}
        <VisuallyHidden
          visible={
            institutionalWalletDetails?.institutionalTable?.length !== 0 &&
            !isSuccess &&
            !isLoading
          }
        >
          <div className='w-full h-[400px] flex justify-center items-center text-primaryText text-3xl font-bold'>
            No Records Found
          </div>
        </VisuallyHidden>
      </div>
      {/* Bottom */}
      <div className='w-full grid grid-cols-4 smLaptops:grid-cols-4 desktop:grid-cols-5 grid-rows-2 desktop:grid-rows-1 gap-y-[40px] gap-x-[25px]'>
        <div className='col-span-2 '>
          <TokensTotalSummary series={[23, 11, 54, 72]} />
        </div>
        <div className='col-span-1'>
          <TotalTokensIssuedCard totalTokensIssued={46} />
        </div>
        <div className='col-span-1'>
          <TotalTokensBurnedCard totalTokensBurned={46} />
        </div>
        <div className='col-span-1 space-y-[32px]'>
          <Credits />
          <Debits />
        </div>
      </div>
    </div>
  );
};

export default InstitutionalWalletTab;
