"use client"
import React, { FC, useState } from "react";
import { VisuallyHidden, Vstack } from "@emtech/ui";
import { ClosedEyeIcon, OpenEyeIcon } from "@emtech/icons";
import { joinClasses } from "@emtech/utils";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";

interface IProps {
  label: "IN CIRCULATION" | "NOT IN CIRCULATION";
  value: string; // Amount
}

const NumberInputWithToggle: FC<IProps> = ({ label, value }) => {
  // Determines Amount
  const [amount, setAmount] = useState<string>(value);

  // Determines whether Amount is visible
  const [showAmount, setShowAmount] = useState(false);
  return (
    <Vstack gap='lg' className='!w-full'>
      {/* Label */}
      <h4
        className={joinClasses(
          "text-xs text-inputPlaceholder font-[800]",
          label === "IN CIRCULATION"
            ? "text-semanticGreen"
            : "text-inputPlaceholder"
        )}
      >
        {label}
      </h4>
      {/* Label End */}

      <div className='w-full h-[26px] flex justify-between items-center'>
        <input
          type={!showAmount ? "text" : "password"}
          className='bg-transparent placeholder-transparent text-primaryText text-lg font-sans font-[800] outline-none transition-all'
          value={formatAmountWithDecimals(amount!)}
          onChange={() => setAmount(value)}
        />
        {/* Amount visibility Toggler */}
        <button type='button' onClick={() => setShowAmount(!showAmount)}>
          <VisuallyHidden visible={!showAmount}>
            <ClosedEyeIcon />
          </VisuallyHidden>
          <VisuallyHidden visible={showAmount}>
            <OpenEyeIcon />
          </VisuallyHidden>
        </button>
        {/* Amount visibility Toggler End */}
      </div>
    </Vstack>
  );
};

export default NumberInputWithToggle;
