import numbro from "numbro";
import { IFormatCurrencyProps } from "types";

/**
 * @description Formats currency amount to an average e.g: "1B","1M" 
 * @param {string|number} amount - currency amount
 * @param {string} currencySymbol - currency symbol e.g: $
 * @param {string} totalLength - Total length of number
 * @example
 * Formats 1000000000 to "1B"
 * Formats 2000000 to "2M"
 * @returns string
 */
export const formatCurrencyToAnAverage = ({
  amount,
  currencySymbol
}: IFormatCurrencyProps): any => {
  const formattedCurrency = numbro(amount)?.formatCurrency({
    spaceSeparated: false,
    thousandSeparated: true,
    average: true,
    mantissa: 2,
    optionalMantissa: true,
    currencySymbol: currencySymbol ?? "",
  });

  return formattedCurrency;
};
