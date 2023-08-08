import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  visible: boolean; // Change this to visible or visibility
}

export const VisuallyHidden = ({ children, visible }: IProps) => {
  return <>{visible ? children : null}</>;
};
