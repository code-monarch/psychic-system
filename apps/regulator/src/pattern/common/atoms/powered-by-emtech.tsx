import React from 'react'
import Image from 'next/image';
import SignupIllustration from "@/public/brand-logo.png";

const PoweredByEmtech = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[12px]'>
      <p className='uppercase font-sans text-xs text-inputPlaceholder'>Powered by</p>
      <Image
        width={113}
        height={28}
        src={SignupIllustration}
        alt='Brand Logo'
      />
    </div>
  );
}

export default PoweredByEmtech