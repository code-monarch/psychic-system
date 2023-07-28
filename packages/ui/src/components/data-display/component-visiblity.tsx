import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  appear: boolean; // Change this to visible or visibility
}

export const ComponentVisiblity = ({ children, appear }: IProps) => {
  return <>{appear ? children : null}</>;
};
