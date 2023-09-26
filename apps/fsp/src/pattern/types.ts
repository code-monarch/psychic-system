import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type WalletTypes =
  | "master wallet"
  | "distribution wallet"
  | "institutional wallet";
export type InstitutionWalletTypes =
  | "reserve wallet"
  | "wholesale wallet"
  | "retail wallet";

// UseForm CreateContext input Props
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
  innerRef?: any;
};

// custom input props
export interface IInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "spaceY" | "extraClass"
  > {
  label?: string;
  suffix?: any;
  prefix?: any;
  isFocused?: boolean;
  className?: string; // Classes for Input component
  inputClassName?: string; // classes for input field
  animatedLabel?: string; // Animated input label
  isDirty?: boolean;
}

export interface IIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}
