import { baseApiSlice } from "../../api/base.api-slice";

interface ITransferTokenPayload {
  tokenId: string;
  sourceWalletId: string;
  destinationWalletId: string;
  amount: string;
  longitude?: string;
  latitude?: string;
}
interface ITransferTokenResponse {
  hash: string;
  fee: string;
  createdAt: string;
  tokenDescription: string;
  id: string;
  name: string;
  symbol: string;
  decimal: string;
  amount: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const transferTokenApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Transfer token
    transferToken: builder.mutation<
      ITransferTokenResponse,
      ITransferTokenPayload
    >({
      query: (transferPayload) => ({
        url: `transfers`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: transferPayload,
      }),
      invalidatesTags: ["DISTRIBUTE-TOKEN-TABLE" as any],
    }),
  }),
});

export const { useTransferTokenMutation } = transferTokenApiSlice;
