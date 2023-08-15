import * as React from "react";
import classes from "../../styles/button.inputs.classes";
import { joinClasses } from "@emtech/utils";

export interface ILinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  className?: string;
  onClick?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
  disabled,
  fullwidth,
  className,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ): void => {
    !disabled && onClick && onClick(event);
  };
  return (
    <button
      {...props}
      type='button'
      disabled={disabled}
      onClick={handleClick}
      className={joinClasses(
        "text-[12px] text-semPrimary font-bold",
        className,
        fullwidth && classes.fullWidth
      )}
    >
      {children}
    </button>
  );
};
