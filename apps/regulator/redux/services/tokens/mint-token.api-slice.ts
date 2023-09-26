import { baseApiSlice } from "../../api/base.api-slice";

interface IMintTokenPayload {
  tokenId: string;
  amount: string | number;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, mintTokenApiSlice for example, into our apiSlice
export const mintTokenApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mint a Token
    mintToken: builder.mutation<any, IMintTokenPayload>({
      query: ({ tokenId, amount }) => ({
        url: `tokens/${tokenId}/mint`,
        method: "POST",
        body: { amount: amount },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["MINT-TOKEN-TABLE"],
    }),
  }),
});

export const { useMintTokenMutation } = mintTokenApiSlice;
