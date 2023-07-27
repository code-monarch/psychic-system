import { GoodStrengthBars } from "./good-strength-bars";
import { GreatStrengthBars } from "./great-strength-bars";
import { VeryWeakStrengthBars } from "./very-weak-strength-bars";
import { WeakStrengthBars } from "./weak-strength-bars";

interface IProps {
  passwordStrength: number;
  strengthBarWidth?: number;
}

const PasswordStrengthBar = ({
  passwordStrength,
  strengthBarWidth,
}: IProps) => {
  return (
    <div>
      {passwordStrength === 1 && (
        <VeryWeakStrengthBars width={strengthBarWidth} />
      )}
      {passwordStrength === 2 && <WeakStrengthBars width={strengthBarWidth} />}
      {passwordStrength === 3 && <GoodStrengthBars width={strengthBarWidth} />}
      {passwordStrength === 4 && <GreatStrengthBars width={strengthBarWidth} />}
    </div>
  );
};

export default PasswordStrengthBar;
