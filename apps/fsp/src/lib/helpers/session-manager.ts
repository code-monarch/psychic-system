/* eslint-disable turbo/no-undeclared-env-vars */
"use client";

interface ISessionProps {
  key: string | undefined;
  value?: string;
}

/**
 *
 * @description Sets Item to local storage
 */
const setItem = ({ key, value }: ISessionProps) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key!, value!);
  }
};

/**
 *
 * @description Retrieves Item from Local storage
 */
const getItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key!);
  }
};

/**
 * @description Removes a particular key value from store
 */
const removeItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key!);
  }
};

/**
 * @description Clears all Local storage Keys and values
 */
const clearStore = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

const LocalStore = {
  setItem,
  getItem,
  removeItem,
  clearStore,
};

/**
 * @description sets session token to Local Storage
 */
export const setSessionToken = (value: string) => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_TOKEN}`;
  return LocalStore.setItem({ key, value });
};

/**
 * @description gets session token from local storage
 */
export const getSessionToken = () => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_TOKEN}`;
  return LocalStore.getItem({ key });
};

export default LocalStore;
