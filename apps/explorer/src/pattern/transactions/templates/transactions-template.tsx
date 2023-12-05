import React, { useState } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import SelectDropDown from "@/pattern/common/organisms/select-dropdown";
import { TRANSACTION_TYPE } from "@/lib/constants";
import { SelectIcon, VisuallyHidden } from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";

const TransactionsTemplate = () => {
  const [transacType, setTransacType] = useState<string>("all");
  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      {/* Top Section */}
      <div className='w-full flex items-center justify-between'>
        <PageTitle title='Transactions' />
        <SelectDropDown
          trigger={<SelectIcon />}
          list={TRANSACTION_TYPE}
          value={transacType}
          setValue={setTransacType}
        />
      </div>
      {/* Top Section End */}

      <div className='w-full overflow-x-auto custom_scollbar space-y-[52px]'>
        {/* Show Loading Icon when isLoading */}
        <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
          <Loading />
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
              icon={<WalletRequestIcon />}
              actionText='Create an Institutional Request Form'
            />
          </div>
        </VisuallyHidden>
      </div>
    </div>
  );
};

export default TransactionsTemplate;
