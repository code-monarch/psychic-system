import * as React from "react";
import { joinClasses } from "@emtech/utils";
import { useToggle } from "@emtech/utils";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import classes from "../../styles/inputs.classes";

export interface IPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  value?: string;
  width?: string;
  className?: string;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  name,
  placeholder,
  value,
  width,
  className,
}) => {
  // This utility hook helps us  toggle the show and Hide password icon
  const [hidePassword, setHidePassword] = useToggle(true);
  return (
    <div className='relative w-full'>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        type={hidePassword ? "password" : "text"}
        className={joinClasses(
          classes.passwordInputBase,
          width,
          className
        )}
      />
      <button
        type='button'
        className='absolute right-[17px] top-0 bottom-0'
        onClick={setHidePassword}
      >
        {hidePassword ? <DotsVerticalIcon /> : <DotsVerticalIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;
