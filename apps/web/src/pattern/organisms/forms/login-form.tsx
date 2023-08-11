"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import AnimatedInput from "@/pattern/molecules/inputs/animated-input";
import { LinkButton, IconButton, Checkbox } from "@/ui";
import { useRouter } from "next/navigation";
import {
  ILoginPayload,
  useLoginMutation,
} from "@/redux/services/auth/login.api-slice";
import { toastError, toastSuccess } from "@/pattern/atoms/toast";
import CookiesManager from "@/lib/helpers/cookies-manager.helpers";
import { REFRESH_TOKEN } from "@/lib/constants/index.constants";

const LoginForm = () => {
  const { push } = useRouter();
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const [
    login, // This is the mutation trigger
    { isLoading }, // This is the destructured mutation result
  ] = useLoginMutation();

  const {
    handleSubmit,
  } = useForm<ILoginPayload>();

  const methods = useForm<ILoginPayload>();

  const onSubmit: SubmitHandler<ILoginPayload> = ({ email, password }) => {
    login({
      email: email,
      password: password,
    })
      .unwrap()
      .then(({ token, refreshToken }) => {
        toastSuccess("Logged In Successfully");

        // Save access Token
        CookiesManager.setTokenCookie(token);
        // Save refresh token
        CookiesManager.setCookie({ key: REFRESH_TOKEN, value: refreshToken });

        if (token) {
          push("/wallets");
        }
      })
      .catch((err) => {
        toastError(`${err?.errorMessage}`);
      });
  };
  return (
    <div className='bg-grayBackGround w-[50%] h-full flex flex-col justify-center items-center'>
      <div className='w-[458px] max-w-[458px] space-y-[64px]'>
        {/* Header */}
        <h2 className='text-primaryText text-4xl text-center font-semibold'>
          Sign In
        </h2>
        {/* Header End */}

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-[40px]'>
            {/* Company Email */}
            <AnimatedInput name='company-email' label='Company Email' />
            {/* Company Email End */}

            {/* Password */}
            <AnimatedInput name='password' label='Password' type='password' />
            {/* Password End */}

            {/* Remember Password Btn And Forgot Password Link */}
            <div className='w-full flex items-center justify-between'>
              {/* Remember password checkbox */}
              <Checkbox
                labelfor='remember-me'
                labeltext='Remember Me'
                value='remember-me'
                checked={rememberMe}
                onCheckedChange={setRememberMe}
                required={false}
                className='!text-inputPlaceholder'
              />

              {/* Forgot Password Link */}
              <LinkButton className='!text-secondaryText !text-base !font-medium !underline'>
                Forgot Password?
              </LinkButton>
            </div>
            {/* Remember Password Btn And Forgot Password Link End */}

            {/* Form Controls */}
            <div className='w-full flex flex-col items-center gap-y-10'>
              {/* Login Button */}
              <IconButton fullwidth size='md' loading={isLoading}>
                Login
              </IconButton>
              {/* Login Button End */}

              <p className='text-center text-[#8E8DA1]'>
                Don&apos;t have an account?&nbsp;
                {/* Sign Up Link */}
                <LinkButton className='!text-secondaryText !text-base !font-medium'>
                  Sign Up
                </LinkButton>
              </p>
            </div>
            {/* Form Controls */}
          </form>
        </FormProvider>
        {/* Form End */}
      </div>
    </div>
  );
};

export default LoginForm;
