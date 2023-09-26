"use client";
import React from "react";
import { CreditsArrow } from "@emtech/icons";
import { Button } from "@emtech/ui";

const CreditsWidget = () => {
  return (
     <div className='space-y-[16px]'>
      <div className='flex items-center gap-[4px]'>
        <CreditsArrow color='green' />
        <h5 className='text-semanticGreen text-[12px] font-sans font-[900]'>
          CREDITS:
        </h5>
      </div>
      <h2 className='text-primaryText text-[24px] font-[800] font-sans'>
        ₦200,000,000
      </h2>
      <Button variant='secondary' size='sm' className='!w-[100px]'>
        View all
      </Button>
    </div>
  );
};

export default CreditsWidget;
