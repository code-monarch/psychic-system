import React, { ReactNode, ButtonHTMLAttributes } from "react";
import DoubleArrowIcon from "../../atoms/icons/DoubleArrowIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const AllTransactionsButton: React.FC<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className='text-[#174cff] font-medium p-4 border border-[#174cff] rounded-md bg-white flex items-center gap-4'
      {...props}
    >
      <DoubleArrowIcon />
      {/* See All Transactions */}
      {children}
    </button>
  );
};

export default AllTransactionsButton;
