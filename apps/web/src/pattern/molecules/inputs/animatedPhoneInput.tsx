import React, { useState } from "react";
import { joinClasses } from "@emtech/utils";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import FormError from "./form-error";
import { IInputProps, TInputProps } from "@/pattern/types";

const AnimatedPhoneInput = <TFormValues extends FieldValues>({
  name,
  animatedLabel,
  className,
}: IInputProps & TInputProps<TFormValues>) => {
  const [focus, setFocus] = useState<string>("");

  const {
    control,
    formState: { errors, dirtyFields },
  } = useFormContext<TFormValues>();

  return (
    <div>
      <div
        className={joinClasses(
          "relative w-full h-fit border !rounded-[8px]",
          focus === `${name}`
            ? "!border-blue-500"
            : "!border-[#CECDE0] !z-[15]",
          className
        )}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <PhoneInput
              country='ng'
              value={value}
              placeholder=''
              onChange={(value) =>
                onChange(value as PathValue<TFormValues, Path<TFormValues>>)
              }
              enableSearch
              onFocus={() => setFocus(`${name}`)}
              onBlur={() => onblur}
              inputProps={{
                name: `${name ?? "Animated"}`,
                required: true,
                autoFocus: false,
              }}
              containerClass={joinClasses(
                // classes.base,
                "relative !w-full !h-full !flex !items-center !text-sans"
              )}
              inputClass={joinClasses(
                "!relative !w-full !bg-transparent !flex !h-[60px] !text-base !text-sans px-5 !py-[12px] !outline-none !border-none"
              )}
              buttonClass='!appearance-none !h-[60px] !text-[18px] !px-[8px] !pt-[2px] !border-none !bg-transparent !rounded-l-[8px] hover:!rounded-[8px] !z-[40]'
              dropdownClass='!z-[40]'
            />
          )}
        />
        {/* Animated label */}
        {animatedLabel && (
          <label
            className={joinClasses(
              "left-[20px]",
              !focus && !dirtyFields[name]
                ? "text-[#8E8DA1] top-[50%] translate-y-[-50%] text-[2px] opacity-0 z-[5]"
                : "text-blue-500 translate-y-[30%] z-20 top-[-30%] bg-white text-sm",
              "absolute z-10  transition-all duration-300"
            )}
          >
            {animatedLabel}
          </label>
        )}
        {/* Animated label End */}
      </div>
      <FormError name={name} errors={errors} />
    </div>
  );
};

export default AnimatedPhoneInput;
