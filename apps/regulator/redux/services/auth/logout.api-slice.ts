import { baseApiSlice } from "../../api/base.api-slice";

export const logoutApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.query<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "GET",
        headers: { "content-type": "application/json" },
      }),
    }),
  }),
});

export const { useLazyLogoutQuery } = logoutApiSlice;
