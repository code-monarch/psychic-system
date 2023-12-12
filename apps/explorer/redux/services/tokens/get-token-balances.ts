import { baseApiSlice } from "../../api/base.api-slice";

export interface ITokenBalancesResponse {
  timestamp: string | number;
  balances: {
    account: string;
    balance: string;
  }[];
  links: {
    next: string;
  };
}

interface ITokenBalancesPayload {
  token_id: string;
}

export const getTokenBalancesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets token balances
    getTokenBalances: builder.query<
      ITokenBalancesResponse,
      ITokenBalancesPayload
    >({
      query: ({ token_id }) => ({
        url: `tokens/${token_id}/balances?limit=10&order=desc`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useGetTokenBalancesQuery } = getTokenBalancesApiSlice;
