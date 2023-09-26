"use";
import React from "react";
import SignUpForm from "@/pattern/auth/organisms/signup-form";
import LeftAuthTemp from "@/pattern/auth/templates/left-auth-temp";

const Signup = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <LeftAuthTemp />
      <SignUpForm />
    </div>
  );
};

export default Signup;
