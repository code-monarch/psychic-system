import { baseAuthApiSlice } from "@/redux/api/base-auth.api-slice";

export interface IRefreshResponse {
  error: boolean;
  accessToken: string;
  refreshToken: string;
  timestamp: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, RefreshApiSlice for example, into our apiSlice
export const refreshApiSlice = baseAuthApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRefreshToken: builder.query<IRefreshResponse, void>({
      query: () => ({
        url: "/refresh",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetRefreshTokenQuery } = refreshApiSlice;
