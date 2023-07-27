import { months } from "./dates";

const returnMonth = (month: number) => {
  return months[month];
};

export const dateFormatter = (arg: string) => {
  const dateObj = new Date(arg);
  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const fullYear = dateObj.getFullYear();
  const formatter = {
    full: () => `${returnMonth(month).substring(0, 3)}, ${date} ${fullYear}`,
    short: (separator?: string) => {
      const formattedMonth = month < 9 ? `0${month + 1}` : `${month + 1}`;
      return `${date} ${separator ?? "-"} ${formattedMonth} ${
        separator ?? "-"
      } ${fullYear}`;
    },
  };

  return formatter;
};
