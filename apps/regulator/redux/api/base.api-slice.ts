import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";
import { COOKIE_TOKEN, REFRESH_TOKEN } from "@/lib/constants/index.constants";
import CookiesManager from "@/lib/helpers/cookies-manager.helpers";
import { ILoginResponse } from "../services/auth/login.api-slice";

// Create a new mutex
const mutex = new Mutex();

// Get auth Token
const token = Cookies.get(COOKIE_TOKEN);

// Define the URL you want to fetch data from
// eslint-disable-next-line turbo/no-undeclared-env-vars
const refreshApiUrl = `${process.env.BASE_AUTH_API_URL}/refreshToken`;

// Define custom headers
const headers = new Headers();
// Add a Content-Type header
headers.append("Content-Type", "application/json; charset=UTF-8");

// Create fetch options with headers
const fetchOptions = {
  method: "GET", // You can change the HTTP method here (e.g., 'POST', 'PUT', etc.)
  headers: headers,
};

const baseQuery = fetchBaseQuery({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  baseUrl: process.env.BASE_API_URL,
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  { shout?: boolean | undefined }
> = async (args, api, extraOptions) => {
  // Wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result?.error?.status === 401) {
    // Checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      fetch(refreshApiUrl, fetchOptions)
        .then((response) => {
          // Parse the response as JSON
          return response.json() as Promise<ILoginResponse>;
        })
        .then((refreshResponse) => {
          const accessToken = refreshResponse?.token;
          const refreshToken = refreshResponse?.refreshToken;

          // Save the new token
          CookiesManager.setTokenCookie(accessToken as string);
          // Save refresh token
          CookiesManager.setCookie({
            key: REFRESH_TOKEN,
            value: refreshToken,
          });

          release();
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error("Fetch error:", error);
        });
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

// All we've done so far is good, Now we will create a base apiSlice for our entire app.
// This will keep our ApiSlices modular.
export const baseApiSlice = createApi({
  reducerPath: "baseApi",
  tagTypes: [
    "MINT-TOKEN-TABLE",
    "BURN-TOKEN-TABLE",
    "DISTRIBUTE-TOKEN-TABLE",
    "REQUEST-DETAILS",
  ],
  baseQuery: baseQueryWithReauth,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
