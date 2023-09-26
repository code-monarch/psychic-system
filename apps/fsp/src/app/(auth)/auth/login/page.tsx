"use client";
import React from "react";
import LeftAuthTemp from "@/pattern/auth/templates/left-auth-temp";
import LoginForm from "@/pattern/auth/organisms/login-form";

const Login = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <LeftAuthTemp />
      <LoginForm />
    </div>
  );
};

export default Login;
