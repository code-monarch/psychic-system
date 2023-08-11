import { joinClasses } from "@emtech/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export interface ISwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  oncheckedchange?: (value: boolean) => void;
  disabled?: boolean;
  name: string;
  value: string;
}

export const Switch = ({
  defaultChecked,
  checked,
  oncheckedchange,
  disabled,
  ...props
}: ISwitchProps) => (
  <SwitchPrimitive.Root
    {...props}
    checked={checked}
    defaultChecked={defaultChecked}
    onCheckedChange={oncheckedchange}
    disabled={disabled}
    className={joinClasses(
      "group",
      "radix-state-checked:bg-semBlue600",
      "radix-state-unchecked:bg-[#EDEBFD] radix-disabled:!bg-gray-200",
      "radix-disabled:cursor-not-allowed",
      "relative inline-flex h-[30px] w-[58px] flex-shrink-0 cursor-pointer rounded-[19px] border-2 border-transparent transition-colors duration-200 ease-in-out",
      "focus:outline-none focus-visible:ring focus-visible:ring-semBlue600 focus-visible:ring-opacity-75"
    )}
  >
    <SwitchPrimitive.Thumb
      className={joinClasses(
        "group-radix-state-checked:translate-x-7",
        "group-radix-state-unchecked:translate-x-0 group-radix-state-unchecked:border-[2px] group-radix-disabled:!border-none group-radix-state-unchecked:border-white group-radix-state-unchecked:bg-semBlue600 group-radix-disabled:!bg-white",
        "pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      )}
    />
  </SwitchPrimitive.Root>
);
