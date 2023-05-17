/* eslint no-param-reassign: ["error", { "props": false }] */

import axios from 'axios';
import { QueryCache } from 'react-query';
import { MAIN_API, SECURE_MAIN_API } from './apiConstants';
import { LOCAL_STORAGE_KEYS } from './constants';
import { memoizedRefreshToken } from './refreshToken';

const queryCache = new QueryCache();
export type Tokens = {
  token: string;
  refreshToken: string;
  expiresAt: number;
  refreshExpiresAt: string;
};

export const getUserEmail = async () => {
  try {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DATA));
    return userData.email;
  } catch (e) {}
  return '';
};

export const getRefreshToken = async () => {
  try {
    const refreshToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN));
    return refreshToken;
  } catch (e) {}
  return '';
};

export const setAuthTokensAtLocal = async (data: Tokens) => {
  await localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, JSON.stringify(data.refreshToken));
  await localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, JSON.stringify(data.token));
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

// mainApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   config.headers.common['Accept-Language'] = i18next.resolvedLanguage;
//   return config;
// });

export const logUserOutAndClearCache = () => {
  localStorage.clear();
  queryCache.clear();
  window.location.href = '/';
};

secureMainApi.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN));

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

secureMainApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.token}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  },
);
