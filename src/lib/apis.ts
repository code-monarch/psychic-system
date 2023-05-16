/* eslint no-param-reassign: ["error", { "props": false }] */

import axios, { AxiosRequestConfig } from 'axios';
import { QueryCache } from 'react-query';
import createAuthRefreshInterceptor, { AxiosAuthRefreshRequestConfig } from 'axios-auth-refresh';
import { MAIN_API, SECURE_MAIN_API } from './apiConstants';
import { LOCAL_STORAGE_KEYS } from './constants';
import i18next from '../i18next/config';
import { REALMS } from '../services/authentication-service';

const COMMON_HEADERS = {
  'Content-Type': 'application/json',
};

const queryCache = new QueryCache();
export type Tokens = {
  token: string;
  refreshToken: string;
  expiresAt: number;
  refreshExpiresAt: string;
};

const getAccessToken = async () => {
  try {
    const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN));
    return token;
  } catch (e) {}
  return '';
};

const getUserEmail = async () => {
  try {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DATA));
    return userData.email;
  } catch (e) {}
  return '';
};

const getRefreshToken = async () => {
  try {
    const refreshToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN));
    return refreshToken;
  } catch (e) {}
  return '';
};

export const setAuthTokensAtLocal = async (data: Tokens) => {
  await localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  await localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.token);
};

const getSecureHeaders = async (config) => {
  config.headers.common = COMMON_HEADERS;
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const mainApi = axios.create({
  baseURL: MAIN_API,
});

export const secureMainApi = axios.create({
  baseURL: SECURE_MAIN_API,
});

export const ratesApi = axios.create({
  baseURL: 'https://openexchangerates.org/api/',
});

export const refreshAuthLogic = async (failedRequest) => {
  const refreshToken = await getRefreshToken();
  const email = await getUserEmail();

  // if (!refreshToken) {
  //   // logUserOutAndClearCache();
  //   return Promise.reject(new Error('Login is required'));
  // }
  mainApi
    .post(
      `/refreshToken`,
      {
        refreshToken,
        email,
      },
      {
        skipAuthRefresh: true,
        headers: {
          'Content-Type': 'application/json',
          Realm: REALMS.EMTECH,
        },
      } as AxiosAuthRefreshRequestConfig,
    )
    .then(async (response) => {
      const tokens: Tokens = response.data || {};
      await setAuthTokensAtLocal(tokens);
      // localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, tokens.refreshToken);
      // localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, tokens.token);
      failedRequest.response.config.headers.Authorization = `Bearer ${tokens.token}`;
      return Promise.resolve();
    });
};

// mainApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   config.headers.common['Accept-Language'] = i18next.resolvedLanguage;
//   return config;
// });

const logUserOutAndClearCache = () => {
  localStorage.clear();
  queryCache.clear();
  window.location.href = '/';
};

createAuthRefreshInterceptor(secureMainApi, refreshAuthLogic, {
  pauseInstanceWhileRefreshing: false,
});
secureMainApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const configWithHeaders = await getSecureHeaders(config);
  configWithHeaders.headers.common['Accept-Language'] = i18next.resolvedLanguage;
  return configWithHeaders;
});
