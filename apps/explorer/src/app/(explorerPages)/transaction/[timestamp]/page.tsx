"use client";
import React from "react";
import TransactionTemplate from "@/pattern/transactions/templates/transaction-template";

const Page = ({ params }: { params: { timestamp: string } }) => {

  return (
    <div className='w-full'>
      <TransactionTemplate timeStamp={params.timestamp} />
    </div>
  );
};

export default Page;
