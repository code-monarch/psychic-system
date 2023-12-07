"use client";
import React from "react";
import AccountTemplate from "@/pattern/accounts/templates/account-template";

const Page = ({ params }: { params: { account_id: string } }) => {
  return (
    <div className='w-full'>
      <AccountTemplate accountId={params.account_id} />
    </div>
  );
};

export default Page;
