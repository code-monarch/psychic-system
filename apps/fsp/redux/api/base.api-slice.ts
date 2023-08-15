import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "@/lib/constants/index.constants";

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  baseUrl: process.env.BASE_API_URL,
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    const token = Cookies.get(COOKIE_TOKEN);

    if (token) {
      headers.set("Authorization", `${token}`);
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
    result = await baseQuery(args, api, extraOptions);
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
