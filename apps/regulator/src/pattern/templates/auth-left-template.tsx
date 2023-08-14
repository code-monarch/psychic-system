"use client";
import React from "react";
import Image from "next/image";
import AuthIllustration from "@/public/auth-illustration.png";
import CBNLogo from "@/public/cbn-logo.png";
import PoweredByEmtech from "../molecules/powered-by-emtech";

const AuthLeftTemplate = () => {
  return (
    <div className='bg-darkBackground w-[50%] h-full flex flex-col justify-between items-center pl-6 py-12'>
      {/* CBN Logo */}
      <div className="w-full flex justify-start">
        <Image
          width={54}
          height={71.36}
          src={CBNLogo}
          alt='CBN Logo'
        />
      </div>
      {/* CBN Logo End */}

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

export default AuthLeftTemplate;
