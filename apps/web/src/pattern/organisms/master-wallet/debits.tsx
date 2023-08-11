"use client"
import React from "react";
import { CreditsArrow } from "@emtech/icons";
import { Button } from "@/ui";

const Debits = () => {
  return (
    <div className='space-y-[16px]'>
      <div className='flex items-center gap-[4px]'>
        <CreditsArrow color='red' rotate='yes' />
        <h5 className='text-semanticRed text-[12px] font-sans font-[900]'>
          DEBITS:
        </h5>
      </div>
      <h2 className='text-primaryText text-[24px] font-[800] font-sans'>
        ₦10,204,000
      </h2>
      <Button variant='secondary' size='sm' className='!w-[100px]'>
        View all
      </Button>
    </div>
  );
};

export default Debits;
