import React from "react";
import { joinClasses } from "@emtech/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Text } from "../inputs/text";

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
  <div className='w-full flex flex-col items-end'>
    <div className='flex items-center space-x-[20px]'>
      {/* Previous button */}
      <button
        type='button'
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
        className={joinClasses(
          "flex items-center space-x-[8px]",
          page === 1 && "cursor-not-allowed"
        )}
      >
        <div>
          <ChevronLeftIcon />
        </div>
        <Text
          textsize='xs'
          color='gray'
          className={joinClasses(
            currentPage === 1 && "text-inputPlaceholder",
            "font-[500] !font-serif"
          )}
        >
          Previous
        </Text>
      </button>
      {/* Previous button End */}

      {/* Page Count */}
      <div className='flex items-center space-x-[8px]'>
        {/* Current page */}
        <div className='bg-[#EAE7F8] font-[700] font-serif text-semPrimary py-[2.5px] px-[9px] rounded-[2px]'>
          {currentPage}
        </div>
        <span className='font-serif text-[0.875rem]'>out of</span>
        {/* Total Pages */}
        <span className='font-[500] font-serif text-semPrimary'>
          {totalPages}
        </span>
      </div>
      {/* Page Count End */}

      {/* Next button */}
      <button
        type='button'
        onClick={() => {
          if (page !== totalPages) {
            setPage(page + 1);
          }
        }}
        className={joinClasses(
          "flex items-center space-x-[8px]",
          page === totalPages && "cursor-not-allowed"
        )}
      >
        <Text
          textsize='xs'
          color='gray'
          className={joinClasses(
            currentPage === totalPages && "text-inputPlaceholder",
            "font-[500] !font-serif"
          )}
        >
          Next
        </Text>
        <div>
          <ChevronRightIcon />
        </div>
      </button>
    </div>
  </div>
);
