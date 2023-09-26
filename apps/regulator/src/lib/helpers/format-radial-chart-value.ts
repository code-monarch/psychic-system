import { formatCurrencyToAnAverage } from "@emtech/utils";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import { TOKEN_SYMBOL } from "@/lib/constants/index.constants";

const currencySymbol = LocalStore.getItem({ key: TOKEN_SYMBOL });

export const formatRadialChartValue = (value: number) => {
  return formatCurrencyToAnAverage({
    amount: value,
    currencySymbol: currencySymbol ?? "",
  });
};
