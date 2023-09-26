import React from "react";

import { PaginationIcon } from "@emtech/icons";

interface IPaginationProps {
  page: number;
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  page,
  setPage,
}) => (
  <div className='w-full flex items-center justify-between'>
    <div className='flex items-center space-x-[16px]'>
      <button
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
        disabled={page === 1}
      >
        <PaginationIcon translateX={true} color={page === 1 ? "#114CFF21" : "#174CFF"} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => {
          if (page !== totalPages) {
            setPage(page + 1);
          }
        }}
        disabled={page === totalPages}
      >
        <PaginationIcon
          color={page === totalPages ? "#114CFF21" : "#174CFF"}
        />
      </button>
      {/* Next button */}
    </div>

    {/* Page Count */}
    <div className='flex items-center space-x-[8px] font-sans text-base font-medium'>
      <div className='text-primaryText'>
        Page &nbsp;
        {currentPage}
      </div>
      <div className='text-inputPlaceholder'>
        of &nbsp;
        {totalPages}
      </div>
    </div>
    {/* Page Count End */}
  </div>
);
