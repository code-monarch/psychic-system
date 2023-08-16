// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
//   notation: "standard",
  // style:'currency',
  // currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

export const formatAmount = (amount: number | string): string => {
  if (!amount) return '0';
  return formatter.format(Number(amount));
};

export const formatAmountWithDecimals = (amount: number | string | undefined, decimals?: number): string => {
  if (!amount) return '0';
  if (!decimals) return formatAmount(amount);

  const divisor = 10 ** decimals;
  const amountWithDecimals = Number(amount) / divisor;
  return formatAmount(amountWithDecimals);
};