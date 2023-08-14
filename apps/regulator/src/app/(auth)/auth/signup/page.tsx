"use";
import React from "react";
import SignUpForm from "@/pattern/organisms/forms/signup-form";
import AuthLeftTemplate from "@/pattern/templates/auth-left-template";

const Signup = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <AuthLeftTemplate />
      <SignUpForm />
    </div>
  );
};

export default Signup;
