"use client";
import React from "react";
import { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { useToggle } from "@emtech/utils";
import { joinClasses } from "@emtech/utils";
import HiddenEyeIcon from "@/pattern/atoms/icons/hidden-eye";
import EyeOpenIcon from "@/pattern/atoms/icons/eye-open-icon";
import FormError from "./form-error";
import { IInputProps, TInputProps } from "@/pattern/types";
import VisuallyHidden from "@/pattern/atoms/visually-hidden";

const AnimatedInput = <TFormValues extends FieldValues>({
  name,
  required = true,
  rules,
  label,
  className,
  inputClassName,

  ...props
}: TInputProps<TFormValues> & Omit<IInputProps, "name" | "required">) => {
  // Get form methods from useFormcontext hook
  // useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  // Determines whether Password is hidden or visible
  const [hidePassword, setHidePassword] = useToggle(true);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='space-y-[4px]'>
      <div
        className={joinClasses(
          "relative w-full flex border-b",
          isFocused ? "border-b-black" : "border-b-inputBorder",
          className
        )}
      >
        <input
          {...register(name, {
            required: required ? "This field is required" : false,
            ...rules,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus={false}
          placeholder='john@doe.com'
          {...props}
          type={!hidePassword ? "text" : props.type}
          className={joinClasses(
            "peer relative bg-transparent w-full h-[25px] placeholder-transparent pb-1 outline-none transition-all z-20",
            inputClassName
          )}
        />

        {/* animated Input label */}
        <VisuallyHidden visible={label ? true : false}>
          <label
            className={joinClasses(
              "absolute transition-all -top-[25px] text-sm duration-300 text-inputPlaceholder",
              "peer-placeholder-shown:-top-1 peer-focus:-top-[25px]"
            )}
          >
            {label}
          </label>
        </VisuallyHidden>
        {/* animated Input label End */}

        {/* Show toggle password button when input type is password */}
        <VisuallyHidden visible={props.type === "password" ? true : false}>
          <button
            type='button'
            className='absolute right-[17px] z-20 top-0 bottom-0'
            onClick={setHidePassword}
          >
            {!hidePassword ? <HiddenEyeIcon /> : <EyeOpenIcon />}
          </button>
        </VisuallyHidden>
        {/* Show toggle password button when input type is password End */}
      </div>
      <FormError name={name} errors={errors} />
    </div>
  );
};

export default AnimatedInput;
