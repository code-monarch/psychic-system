import * as React from "react";
import classes from "../../design/button.inputs.classes";
import {joinClasses} from "@emtech/utils";
import {ButtonType} from "../../types";

export interface IButtonClasses {
  base: string;
  fullWidth: string;
  variant: {
    primary: string;
    secondary: string;
    transparent: string;
    disabled: string;
    loading: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  size?: keyof IButtonClasses["size"];
  variant?: keyof IButtonClasses["variant"];
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
}

export const Button: React.FC<IButtonProps> = ({
  disabled,
  fullwidth,
  variant,
  size,
  className,
  type,
  loading,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ): void => {
    !disabled && !loading && onClick && onClick(event);
  };
  return (
    <button
      {...props}
      type={type ?? "button"}
      disabled={disabled}
      onClick={handleClick}
      className={joinClasses(
        classes.base,
        className,
        classes.variant[variant ?? "primary"],
        classes.size[size ?? "xl"],
        fullwidth && classes.fullWidth,
        loading && "cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};
