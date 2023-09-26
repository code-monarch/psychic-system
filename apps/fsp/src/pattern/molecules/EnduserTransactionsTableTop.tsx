import React from "react";
import AllTransactionsButton from "../transactions/atoms/all-transactions-button";

const EnduserTransactionsTableTop = () => {
  return (
    <div className='text-sm flex justify-between items-center my-6'>
      <div className='flex items-center gap-4'>
        <p className='font-semibold'>RecentTransactions</p>
      </div>

      <div>
        <AllTransactionsButton>See All Transactions</AllTransactionsButton>
      </div>
    </div>
  );
};

export default EnduserTransactionsTableTop;
