import { joinClasses } from "@emtech/utils";
import { useState, useEffect } from "react";
import { useWatch } from "react-hook-form";
import PasswordStrengthBar from "./password-strength-bar";

export const veryWeakPasswordRegex = new RegExp(
  /^(?=.*[a-z])(?=.{1,})/
);
export const weakPasswordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.{4,})/
);
export const goodPasswordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/
);
export const greatPasswordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/
);

interface IProps {
  control: any;
  name?: string;
  strengthBarWidth?: number;
  // eslint-disable-next-line no-unused-vars
  getMessage: (message: string) => void;
}

export const PasswordStrength = ({
  control,
  name,
  strengthBarWidth,
  getMessage,
}: IProps) => {
  const [passwordStrength, setPasswordStrength] = useState<number>();
  const [message, setMessage] = useState<string>("");

  /**
   * Watch the value of the password input as it changes
   */
  const password = useWatch({
    control,
    name: `${name ?? "password"}`,
  });

  // Todo: Create a hook for this
  useEffect(() => {
    if (greatPasswordRegex.test(password)) {
      setPasswordStrength(4);
      setMessage("Strong");
      getMessage("Strong");
    } else if (goodPasswordRegex.test(password)) {
      setPasswordStrength(3);
      setMessage("Good");
      getMessage("Good");
    } else if (weakPasswordRegex.test(password)) {
      setPasswordStrength(2);
      setMessage("Weak");
      getMessage("Weak");
    } else if (veryWeakPasswordRegex.test(password)) {
      setPasswordStrength(1);
      setMessage("Very Weak");
      getMessage("Very Weak");
    }
  }, [getMessage, password, passwordStrength]);

  return (
    <div
      className={joinClasses(
        password ? "block transition-all ease-in-out delay-150" : "hidden",
        "space-y-[5px]"
      )}
    >
      <PasswordStrengthBar
        passwordStrength={passwordStrength!}
        strengthBarWidth={strengthBarWidth!}
      />
      <div className="text-[12px]">
        <span
          className={joinClasses(
            passwordStrength === 1 && "text-red-500",
            passwordStrength === 2 && "text-amber-500",
            passwordStrength === 3 && "text-lime-600",
            passwordStrength === 4 && "text-green-600",
            "text-[10px] font-[500]"
          )}
        >
          {message}
        </span>
      </div>
    </div>
  );
};
