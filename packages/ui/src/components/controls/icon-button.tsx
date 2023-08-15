import * as React from "react";
import classes from "../../styles/button.inputs.classes";
import { joinClasses } from "@emtech/utils";
import { IButtonProps } from "./button";
import { Spinner } from "../feedback/spinner";

export interface IIconButtonProps extends IButtonProps {
  loadingtext?: string; // Button label when loading is true

  lefticon?: React.ReactElement; // Adds icon before button label

  righticon?: React.ReactElement; // Adds icon before button label

  className?: string;

  onClick?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  loadingtext,
  lefticon,
  righticon,
  className,
  onClick,
  children,
  loading,
  disabled = false,
  variant,
  type,
  size,
  fullwidth,
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
        classes.variant[loading ? "loading" : variant ?? "primary"],
        classes.size[size ?? "sm"],
        fullwidth && classes.fullWidth
      )}
    >
      {lefticon && !loading && !disabled && <span>{lefticon}</span>}

      {loading && <Spinner />}
      {/* If lading is true and there is a loading text, display the loading text */}
      {loading && loadingtext && <span>{loadingtext}</span>}

      {/* Show the children of the button only when loading is false */}
      {!loading && <span>{children}</span>}

      {righticon && !loading && !disabled && <span>{righticon}</span>}
    </button>
  );
};
