/* eslint-disable no-unused-vars */
export interface IJoinClassesProps {
  classes: string | false | undefined;
}

export interface IGetAllDaysProps {
  selectedMonth: string;
  selectedYear: string;
}

export interface IGetDayProps {
  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;
}

export interface ICountryDailCodesProps {
  name: string;
  dial_code: string;
  code: string;
}

export interface IFormatToBritishNumberProps {
  x: number | string;
}

export interface IFormatTimeProps {
  time: number;
}

export interface IFormatDateProps {
  date: string | number | Date;
}

export interface IUseBooleanOutputProps<T> {
  value: boolean;
  setValue: T;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export interface UseCountdownType {
  seconds: number;
  interval: number;
  isIncrement?: boolean;
}
export interface CountdownHelpers {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

// New interface IN & OUT
export interface CountdownOption {
  countStart: number;
  intervalMs?: number;
  isIncrement?: boolean;
  countStop?: number;
}
export interface CountdownControllers {
  startCountdown: () => void;
  stopCountdown: () => void;
  resetCountdown: () => void;
}

export interface UseCounterOutput<T> {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: T;
}

export interface IUseIntervalProps {
  callback: () => void;
  delay: number | null;
}

export interface IUseIsActiveProps {
  initialState: boolean;
}

export type CopiedValue = string | null;

export type CopyFn = (text: string) => Promise<boolean>; // Return success

export interface IFormatCurrencyProps {
  amount: number | string;
  currencySymbol: string;
  totalLength?: number;
}