import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { joinClasses } from "@emtech/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const RequestButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={joinClasses(
        className,
        "rounded bg-[#174cff] text-white font-medium px-6 py-2 flex justify-center items-center gap-2"
      )}
    >
      {children}
    </button>
  );
};

export default RequestButton;
