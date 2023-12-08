"use client";
import React from "react";
import TokenTemplate from "@/pattern/tokens/templates/token-template";

const Page = ({ params }: { params: { token_id: string } }) => {
  return (
    <div className='w-full'>
      <TokenTemplate tokenId={params.token_id} />
    </div>
  );
};

export default Page;
