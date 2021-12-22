/* eslint no-param-reassign: ["error", { "props": false }] */

import axios, { AxiosRequestConfig } from 'axios';
import { MAIN_API, SECURE_MAIN_API } from './apiConstants';

export const mainApi = axios.create({
  baseURL: MAIN_API,
});

export const secureMainApi = axios.create({
  baseURL: SECURE_MAIN_API,
});

// mainApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   config.headers.common = { 'Content-Type': 'application/json', 'X-API-KEY': API_KEY };
//
//   return config;
// });
