import LocalStore from "./session-manager.helpers";
import { CURRENCY_DECIMALS, TOKEN_SYMBOL } from "../constants/index.constants";

const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });
const currencyDecimals = LocalStore.getItem({ key: CURRENCY_DECIMALS });

const formatter = new Intl.NumberFormat("en-US", {
  notation: "standard",
  // style:'currency',
  // currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

export const formatAmount = (amount: number | string): string => {
  if (amount) return formatter.format(Number(amount));
  if (!amount) return formatter.format(0);
};

export const formatAmountWithDecimals = (amount = "0"): string => {
  if (!currencySymbol) return formatAmount(amount);
  if (!currencyDecimals) return formatAmount(amount);

  const divisor = 10 ** Number(currencyDecimals);
  const amountWithDecimals = Number(amount!) / divisor;
  const formattedAmount = formatAmount(amountWithDecimals);
  return `${currencySymbol}${formattedAmount}`;
};
