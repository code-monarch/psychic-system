"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Cookies from "js-cookie";
import { REFRESH_TOKEN } from "@/lib/constants/index.constants";

export const baseAuthQuery = fetchBaseQuery({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  baseUrl: "http://20.102.77.57:5500/dap/api/v1",
  // credentials: "include",
  // credentials: "same-origin",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    const refreshToken = Cookies.get(REFRESH_TOKEN);

    if (refreshToken) {
      headers.set("Authorization", `Bearer ${refreshToken}`);
    }
    return headers;
  },
});

// All we've done so far is good, but creating a base auth apiSlice for our entire app is even better.
// Keeps our ApiSlices modular.
export const baseAuthApiSlice = createApi({
  reducerPath: "baseRefreshApi",
  baseQuery: baseAuthQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
