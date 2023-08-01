"use";
import React from "react";
import AuthLeftTemplate from "@/pattern/templates/auth-left-template";
import LoginForm from "@/pattern/organisms/forms/login-form";

const Login = () => {
  return (
    <div className='w-full max-w-[1440px] h-full max-h-[900px] flex justify-center items-center'>
      <AuthLeftTemplate />
      <LoginForm />
    </div>
  );
};

export default Login;
