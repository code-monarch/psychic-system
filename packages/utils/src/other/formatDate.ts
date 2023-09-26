export const formatDate = (date: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateToFormat = new Date(date);
  return dateToFormat.toLocaleDateString("en-GB", options);
};
