import { IGetAllDaysProps, IGetDayProps } from "../types";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const year = date.getFullYear();

// Array of Progessive 5 years
const dateArray = Array(5)
  .fill(null)
  .map((_, index) =>
    index === 0 ? year.toString() : (index + year).toString()
  );

// Array of hours count from 1 to 12
const hours = Array(24)
  .fill(null)
  .map((_, index) => (index + 1).toString());

// Number of days 1-31
const noOfDays = Array(31)
  .fill(null)
  .map((_, index) => (index + 1).toString());

// Array of minutes from 1 to 60
const minutes = Array(60)
  .fill(null)
  .map((_, index) => (index < 10 ? `0${index}` : index.toString()));

// get all the days in a particular month
const getAllDays = ({ selectedMonth, selectedYear }: IGetAllDaysProps) => {
  const findMonth = months.findIndex((month) => month === selectedMonth);
  const month = findMonth + 1;
  const totalDays = new Date(Number(selectedYear), month, 0).getDate();

  const days = Array(totalDays)
    .fill(null)
    .map((_, index) => (index + 1).toString());
  return days;
};

// Get the day of a date
const getDay = ({ selectedDay, selectedMonth, selectedYear }: IGetDayProps) => {
  const findMonth = months.findIndex((month) => month === selectedMonth);
  const month = findMonth;
  const date = new Date(
    Number(selectedYear),
    Number(month),
    Number(selectedDay)
  ).getDay();
  return days[date];
};

// Meridiem array
const meridiem = ["PM", "AM"];

export {
  days,
  months,
  dateArray,
  minutes,
  hours,
  noOfDays,
  meridiem,
  getAllDays,
  getDay,
};
