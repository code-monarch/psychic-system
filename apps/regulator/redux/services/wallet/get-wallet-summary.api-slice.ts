import { baseApiSlice } from "../../api/base.api-slice";

export interface IWalletsSummaryResponse {
  walletId: string;
  tokenId: string;
  ITransferTokenResponse: string;
  masterWalletBalance: string;
  distributionWalletBalance: string;
  institutionalWalletBalance: string;
  masterWalletId: string;
  distributionWalletId: string;
  institutionalWalletId: string;
  inCirculation: string;
  notInCirculation: string;
  totalSupply: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const getWalletsSummaryApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets details about a wallet
    getWalletsSummary: builder.query<IWalletsSummaryResponse, void>({
      query: () => ({
        url: `wallets/summary`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetWalletsSummaryQuery, useLazyGetWalletsSummaryQuery } =
  getWalletsSummaryApiSlice;
