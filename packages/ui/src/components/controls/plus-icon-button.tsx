import * as React from "react";
import { IIconButtonProps, IconButton } from "./icon-button";
import { PlusIcon } from "@emtech/icons";

interface IPlusIconButton extends IIconButtonProps {
  iconColor?: string;
}

export const PlusIconButton: React.FC<IPlusIconButton> = ({
  children,
  iconColor,
  ...props
}) => {
  return (
    <IconButton {...props} lefticon={<PlusIcon color={iconColor ?? "#fff"} />}>
      {children}
    </IconButton>
  );
};
