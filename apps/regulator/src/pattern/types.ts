import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type WalletTypes = "master wallet" | "distribution wallet" | "institutional wallet";
export type InstitutionWalletTypes = "reserve wallet" | "wholesale wallet" | "retail wallet";

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

export interface IRequestDetailsProps {
  // Request Number e.g: RN - 823344
  requestNumber: string;

  //Entity E.g: Paystack, numberr, Blu
  entity: string;

  //Wallet Request Type E.g: Reserve
  walletRequestType: string;

  date: string;

  time: string;

  status: "Success" | "Pending" | "Failed" | "active" | "closed";
}
export interface IMintDetailsProps {
  closeModal: any;
  isOpen: boolean; // Determines whether is visible
  destinationWallet: string; // E.g: "Master wallet"
  amount: string;
  entity: string; // Entity E.g: Paystack, numberr, Blu
  date: string;
  time: string;
  transactionId: string;
  transactionType: "credit" | "debit"; // Wallet Request Type E.g: Reserve
  status: "Success" | "Pending" | "Failed" | "active" | "closed";
}
