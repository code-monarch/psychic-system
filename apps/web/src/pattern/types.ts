import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

// UseForm CreateContext Props
export type TInputProps<
  TFormValues extends FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFormValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  required?: boolean;
  errMsg?: string;
  showError?: boolean;
};

export interface IInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "spaceY" | "extraClass"
  > {
  label?: string;
  suffix?: any;
  prefix?: any;
  isFocused?: boolean;
  className?: string;
  inputClassName?: string; // classes for input
  animatedLabel?: string; // Animated label
  isDirty?: boolean;
}
