/* eslint-disable turbo/no-undeclared-env-vars */
"use client"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Cookies from "js-cookie";
import {REFRESH_TOKEN } from "@/lib/constants/index.constants";
import { IRefreshResponse } from "../services/auth/refresh-token.api-slice";

export const baseAuthQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_AUTH_API_URL,
  // credentials: "include",
  // credentials: "same-origin",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    const refreshToken = Cookies.get(REFRESH_TOKEN);

    if (refreshToken) {
      headers.set("x-refresh-token", `${refreshToken}`);
    }
    return headers;
  },
});

// All we've done so far is good, but creating a base apiSlice for our entire app is even better.
// Keeps our ApiSlices modular.

export const baseAuthApiSlice = createApi({
  reducerPath: "baseAuthApi",
  baseQuery: baseAuthQuery,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getRefreshToken: builder.query<IRefreshResponse, void>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
