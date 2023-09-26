"use client";
import React from "react";
import Image from "next/image";
import AuthIllustration from "@/public/auth-illustration.png";
import PoweredByEmtech from "../molecules/powered-by-emtech";

const LeftAuthTemp = () => {
  return (
    <div className='bg-darkBackground w-[50%] h-full flex flex-col justify-between items-center pl-6 py-12'>
      {/* Illustration */}
      <div>
        <Image
          width={350}
          height={412}
          src={AuthIllustration}
          alt='Authentication Illustration'
        />
      </div>
      {/* Illustration End */}

      {/* Powered by Emtech */}
      <PoweredByEmtech />
      {/* Powered by Emtech End */}
    </div>
  );
};

export default LeftAuthTemp;
