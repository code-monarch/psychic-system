"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import AnimatedInput from "@/pattern/molecules/inputs/animated-input";
import { Checkbox } from "@emtech/ui";
import { LinkButton } from "@emtech/ui";
import { IconButton } from "@emtech/ui";

const LoginForm = () => {
  // state for remembering user's login credentials for future login
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const methods = useForm();
  const onSubmit = (data) => console.log(data);

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
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='space-y-[40px]'
          >
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
              <IconButton fullwidth size='md'>
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
