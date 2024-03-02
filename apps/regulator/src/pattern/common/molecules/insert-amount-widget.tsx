import { TOKEN_SYMBOL } from "@/lib/constants/index.constants";
import { formatAmountInput } from "@/lib/helpers/format-amount-input";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import { VisuallyHidden } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

interface IProps {
  // Determines whether component is for mint or burn
  type: "mint" | "burn";

  // Amount of tokens to be minted or burned
  amount: string;

  // eslint-disable-next-line no-unused-vars
  setAmount: Dispatch<SetStateAction<number | string>>;
}

const InsertAmountWidget: FC<IProps> = ({ amount, setAmount, type }) => {
  const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });

  const [formattedValue, setFormattedValue] = useState<string>(amount);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Remove non-digit characters from the input value
    const rawValue = event.target.value.replace(/\D/g, "");
    console.log("RAW VALUE: ", rawValue);

    // Format the raw value as needed (e.g., add commas for thousands)
    const formatted = formatAmountInput(rawValue);

    // Update amount with the formatted value
    setAmount(rawValue);

    // Update the state with the formatted value
    setFormattedValue(formatted);
  };

  return (
    <div className='w-[568px] h-[127px] flex items-top justify-between p-[18px] border border-[rgba(132, 153, 177, 0.4)] rounded-[8px]'>
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-[14px] text-inputPlaceholder font-[500]'>
          <VisuallyHidden visible={type === "mint"}>Mint Amount</VisuallyHidden>
          <VisuallyHidden visible={type === "burn"}>Burn Amount</VisuallyHidden>
        </h3>
        {/* Label End */}

        {/* Insert Wallet Amount */}
        <div className='w-[300px] flex items-center justify-end'>
          <span className='text-primaryText text-[24px] text-right uppercase font-sans font-[800]'>
            {currencySymbol!}&nbsp;
          </span>
          <input
            type='text'
            placeholder='1,023,90'
            autoFocus
            value={formattedValue}
            onChange={(e) => handleInputChange(e)}
            className={joinClasses(
              "no-increment w-full text-primaryText text-[24px] text-left uppercase font-sans font-[800]",
              "outline-none border-none focus:outline-none focus:ring-none focus:border-none pl-[2px]"
            )}
          />
        </div>
        {/* Insert Wallet Amount End */}
      </div>
    </div>
  );
};

export default InsertAmountWidget;
