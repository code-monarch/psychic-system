import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
  SelectIcon,
} from "@emtech/ui";
import AllTransactionsButton from "../transactions/atoms/all-transactions-button";

const TransactionsTableTop = () => {
  const [select, setSelect] = useState<string>("wholesale wallet");
  return (
    <div className='text-sm flex justify-between items-center my-6'>
      <div className='flex items-center gap-4'>
        <p className='font-semibold'>RecentTransactions</p>
        <div>
          <Select value={select} defaultValue='' onValueChange={setSelect}>
            <SelectTrigger className='border rounded-md p-2 text-[#8499b1]'>
              <SelectValue value='Transactions' placeholder='Transactions' />
              <SelectIcon />
            </SelectTrigger>

            <SelectContent className='text-sm'>
              <SelectScrollUp />
              <SelectViewport className='font-semibold'>
                <SelectItem
                  value='wholesale wallet'
                  className=' data-[state=checked]:text-[#174cff]'
                >
                  <SelectItemText>Wholesale Wallet</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
                <SelectItem
                  value='retail wallet'
                  className=' data-[state=checked]:text-[#174cff]'
                >
                  <SelectItemText>Retail Wallet</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              </SelectViewport>
              <SelectScrollDown />
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <AllTransactionsButton>See All Transactions</AllTransactionsButton>
      </div>
    </div>
  );
};

export default TransactionsTableTop;
