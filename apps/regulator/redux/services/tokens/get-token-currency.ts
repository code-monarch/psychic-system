import { baseApiSlice } from "../../api/base.api-slice";

interface ITokenDetailsResponse {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  supply: number | string;
  createdAt: number | string | null;
  currency: number | string;
  inCirculation: number | string;
  notInCirculation: number | string;
  wallets: string | null;
}
interface ITokenCurrencyPayload {
  tokenId: string;
}

export const tokenCurrencyApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets details about a token
    getTokenCurrency: builder.query<
      ITokenDetailsResponse,
      ITokenCurrencyPayload
    >({
      query: ({ tokenId }) => ({
        url: `tokens/${tokenId}/wallets-summary`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetTokenCurrencyQuery, useGetTokenCurrencyQuery } =
  tokenCurrencyApiSlice;
