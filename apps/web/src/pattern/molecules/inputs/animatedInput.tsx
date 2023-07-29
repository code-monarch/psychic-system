import { useState } from "react";
import {
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { useToggle } from "@emtech/utils";
import { joinClasses } from "@emtech/utils";
import HiddenEyeIcon from "@/pattern/atoms/icons/hidden-eye";
import EyeOpenIcon from "@/pattern/atoms/icons/eye-open-icon";
import FormError from "./form-error";
import { IInputProps, TInputProps } from "@/pattern/types";


const AnimatedInput = <TFormValues extends FieldValues>({
  name,
  required = true,
  rules,
  label,
  prefix,
  suffix,
  className = "",
  inputClassName = "",

  ...props
}: TInputProps<TFormValues> & Omit<IInputProps, "name" | "required">) => {

  // Get form methods from useFormcontext
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<TFormValues>();

  // toggle hide or show password
  const [hidePassword, setHidePassword] = useToggle(true);

  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div>
      <div
        className={joinClasses(
          "relative w-full flex border rounded-[8px]",
          isFocused ? "border-blue-500" : "border-[#CECDE0]",
          className
        )}
      >
        {/* prefix icon at the left side of the input field */}
        {prefix && (
          <span className='pl-3 flex justify-center items-center'>
            {prefix}
          </span>
        )}

        <input
          {...register(name, {
            required: required ? "This field is required" : false,
            ...rules,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus={false}
          {...props}
          type={!hidePassword ? "text" : props.type}
          className={joinClasses(
            "relative bg-transparent w-full h-[60px] pt-4 px-5 outline-none z-20",
            prefix ? "pl-3" : "",
            inputClassName
          )}
        />

        {/* animated label */}
        {label && (
          <label
            className={joinClasses(
              "absolute transition-all top-1/2 duration-300 px-5 text-[#8E8DA1]",
              !isFocused && !dirtyFields[name]
                ? "-translate-y-1/2 text-[1rem]"
                : "translate-y-[-20px] z-20 text-sm",
              prefix ? "left-[26px]" : ""
            )}
          >
            {label}
          </label>
        )}
        {/* animated label end */}

        {/* suffix icon at the right side of the input field */}
        {suffix && (
          <div className='pr-3 flex justify-center items-center'>{suffix}</div>
        )}

        {/* use the visibility button is input type is password */}
        {props.type === "password" && (
          <button
            type='button'
            className='absolute right-[17px] z-20 top-0 bottom-0'
            onClick={setHidePassword}
          >
            {!hidePassword ? <HiddenEyeIcon /> : <EyeOpenIcon />}
          </button>
        )}
      </div>
      <FormError name={name} errors={errors} />
    </div>
  );
};

export default AnimatedInput;
