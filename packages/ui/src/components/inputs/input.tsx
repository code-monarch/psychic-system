import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {joinClasses, useToggle} from "@emtech/utils";
import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";

export interface IInputClasses {
  base: string;
  passwordInputBase: string;
  authTokenInputBase: string;
  authTokenInputClicked: string;
}

export interface TInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "spaceY" | "extraClass"
  > {
  label?: string;
  extraClass?: string;
  suffix?: any;
  prefix?: any;
  isFocused?: boolean;
  className?: string;
  inputClassName?: string;
  isDirty?: boolean;
}

export const Input = ({
  name,
  label,
  prefix,
  suffix,
  className = "",
  isFocused = false,
  isDirty = false,
  inputClassName = "",
  ...props
}: TInputProps) => {
  // toggle hide or show password
  const [hidePassword, setHidePassword] = useToggle(true);

  return (
    <div
      className={joinClasses(
        "relative w-full flex border rounded-[8px]",
        isFocused ? "border-blue-500" : "border-[#CECDE0]",
        className
      )}
    >
      {/* prefix icon at the left side of the input field */}
      {prefix && (
        <span className="pl-3 flex justify-center items-center">{prefix}</span>
      )}

      <input
        name={name}
        {...props}
        type={!hidePassword ? "text" : props.type}
        className={joinClasses(
          "relative bg-transparent w-full h-[50px] pt-4 px-5 outline-none z-20",
          inputClassName
        )}
      />

      {/* animated label */}
      {label && (
        <label
          className={joinClasses(
            "absolute transition-all duration-300 px-5",
            !isFocused && !isDirty
              ? "text-[#8E8DA1] top-[50%] translate-y-[-50%] text-[1rem]"
              : "text-blue-500 translate-y-[90%] z-20 top-[-30%] bg-white text-sm"
          )}
        >
          {label}
        </label>
      )}

      {/* suffix icon at the right side of the input field */}
      {suffix && (
        <div className="pr-3 flex justify-center items-center">{suffix}</div>
      )}
      {/* use the visibility button is input type is password */}
      {props.type === "password" && (
        <button
          type="button"
          className="absolute right-[17px] z-20 top-0 bottom-0"
          onClick={setHidePassword}
        >
          {hidePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      )}
    </div>
  );
};
