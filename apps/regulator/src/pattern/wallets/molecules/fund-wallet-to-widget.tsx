import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  ChangeEvent,
} from "react";
import { joinClasses } from "@emtech/utils";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import { TOKEN_SYMBOL } from "@/lib/constants/index.constants";
import { formatAmountInput } from "@/lib/helpers/format-amount-input";

interface IProps {
  destinationWallet: "Master" | "Distribution"; // Determines which wallet funds should be traferred from
  amount: string; // Determines amount to be sent
  setAmount: Dispatch<SetStateAction<number | string>>; // Updates amount when input value is changed
}

const FundWalletToWidget: FC<IProps> = ({
  amount,
  setAmount,
  destinationWallet,
}) => {
  const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });

  const [formattedValue, setFormattedValue] = useState<string>(amount);
  console.log("FORMATTED AMOUNT: ", formattedValue);
  
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
      {/* Left */}
      <div className='space-y-[16px]'>
        {/* Label */}
        <h3 className='text-base text-primaryText font-[800]'>To:</h3>
        {/* Label End */}
        <div className='bg-surfaceColor h-[56px] flex items-center gap-[8px] p-[8px] rounded-[8px] z-3'>
          {/* abbrv */}
          <div className='outer_circle'>
            <div className='inner_circle !uppercase text-primaryText font-[800]'>
              {destinationWallet?.charAt(0)}W
            </div>
          </div>
          {/* abbrv End */}
          <p className='text-inputPlaceholder'>
            {destinationWallet}&nbsp;Wallet
          </p>
        </div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className='self-end space-y-[30px]'>
        {/* Label */}
        <h3 className='text-sm text-inputPlaceholder text-right font-[500] capitalize'>
          {destinationWallet === "Master"
            ? "Insert transfer Amount"
            : "Insert Fund Amount"}
        </h3>
        {/* Label End */}

        {/* Amount Input */}
        <div className='flex items-center justify-end'>
          <span className='text-primaryText text-[24px] text-right uppercase font-sans font-[800]'>
            {currencySymbol}
          </span>
          <input
            type='text'
            placeholder='1,023,90'
            value={formattedValue}
            onChange={(e) => handleInputChange(e)}
            autoFocus
            className={joinClasses(
              "appearance-none no-increment max-w-[150px] text-primaryText text-[24px] text-right uppercase font-sans font-[800]",
              "outline-none border-none focus:outline-none focus:ring-none focus:border-none pl-[2px]"
            )}
          />
        </div>
        {/* Amount Input End */}
      </div>
      {/* Right End */}
    </div>
  );
};

export default FundWalletToWidget;
