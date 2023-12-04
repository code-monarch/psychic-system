import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Mutex } from "async-mutex";

// Create a new mutex
const mutex = new Mutex();

// Define custom headers
const headers = new Headers();
// Add a Content-Type header
headers.append("Content-Type", "application/json; charset=UTF-8");


const baseQuery = fetchBaseQuery({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  baseUrl: process.env.BASE_API_URL,
  // credentials: "same-origin",
  // credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, {}) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");

    return headers;
  },
});

// All we've done so far is good, Now we will create a base apiSlice for our entire app.
// This will keep our ApiSlices modular.
export const baseApiSlice = createApi({
  reducerPath: "baseApi",
  tagTypes: [],
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
