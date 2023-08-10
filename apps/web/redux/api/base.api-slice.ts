/* eslint-disable turbo/no-undeclared-env-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";
import { logOut } from "../features/auth-slice";
import { COOKIE_TOKEN, REFRESH_TOKEN } from "@/lib/constants/index.constants";
import { baseAuthApiSlice } from "./base-auth.api-slice";
import CookiesManager from "@/lib/helpers/cookies-manager.helpers";
import { store } from "../store";

interface IRefreshResponse {
  error: boolean;
  accessToken: string;
  refreshToken: string;
  timestamp: string;
}

let refreshResponse: IRefreshResponse | any;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_API_URL,
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    const token = Cookies.get(COOKIE_TOKEN);

    if (token) {
      headers.set("x-access-token", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result?.error?.status === 401) {
    // checking whether the mutex is locked
    // async-mutex to prevent multiple requests to the refresh endpoint endpoint when the first request to refresh the access token fails.
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // send refresh token to get new access token
        const refreshResponse = await store.dispatch(
          baseAuthApiSlice.endpoints.getRefreshToken.initiate()
        );
        if (refreshResponse?.data) {
          // Delete previous auth cookie
          CookiesManager.removeCookie(COOKIE_TOKEN);
          CookiesManager.removeCookie(REFRESH_TOKEN);

          // Save new access token
          if (refreshResponse?.data?.accessToken) {
            CookiesManager.setTokenCookie(refreshResponse?.data?.accessToken);
          }

          // Save new refresh token
          if (refreshResponse?.data?.refreshToken) {
            CookiesManager.setCookie({
              key: REFRESH_TOKEN,
              value: refreshResponse?.data?.refreshToken,
            });
          }

          // retry the original query with new access token
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

// All we've done so far is good, but creating a base apiSlice for our entire app is even better.
// Keeps our ApiSlices modular.

export const baseApiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
