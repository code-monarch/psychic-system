"use";
import React from "react";
import SignUpForm from "@/pattern/auth/organisms/signup-form";
import AuthLeftTemplate from "@/pattern/auth/templates/left-Auth-temp";

const Signup = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <AuthLeftTemplate />
      <SignUpForm />
    </div>
  );
};

export default Signup;
