"use client";
import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "../constants";
import { IGetCookieProps, ISetCookieProps } from "../types";

/**
 * @description sets Token cookie
 * @param value: Session token
 */
const setTokenCookie = (value: string) => {
  // Set the cookie to expire in one day
  const oneDayInSeconds = 24 * 60 * 60; // 1 day in seconds

  const expirationTime = new Date().getTime() + oneDayInSeconds * 1000;
  return Cookies.set(COOKIE_TOKEN, value, {
    expires: new Date(expirationTime),
  });
};

/**
 * @description gets access Token cookie
 */
const getTokenCookie = () => {
  return Cookies.get(COOKIE_TOKEN);
};

/**
 * @description gets any cookie
 *  @param value: Name of Cookie
 */
const getCookie = ({ key }: IGetCookieProps) => {
  return Cookies.get(key);
};

/**
 * @description sets any cookie
 *  @param key: Name of Cookie
 *  @param value: Cookie value
 */
const setCookie = ({ value, key }: ISetCookieProps) => {
  return Cookies.set(key, value);
};

/**
 * Function that gets access Token from cookies
 * @param value: Name of Cookie
 */
const removeCookie = (key: string) => {
  return Cookies.remove(key);
};

const CookiesManager = {
  setTokenCookie,
  getTokenCookie,
  getCookie,
  removeCookie,
  setCookie,
};

export default CookiesManager;
