"use client";
import React from "react";
import AuthLeftTemplate from "@/pattern/auth/templates/left-Auth-temp";
import LoginForm from "@/pattern/auth/organisms/login-form";

const Login = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <AuthLeftTemplate />
      <LoginForm />
    </div>
  );
};

export default Login;
