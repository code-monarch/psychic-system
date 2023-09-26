import { baseApiSlice } from "../../api/base.api-slice";

interface IBurnTokenPayload {
  tokenId: string;
  amount: string | number;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, burnTokenApiSlice for example, into our apiSlice
export const burnTokenApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Burn a Token
    burnToken: builder.mutation<any, IBurnTokenPayload>({
      query: ({ tokenId, amount }) => ({
        url: `tokens/${tokenId}/burn`,
        method: "POST",
        body: { amount },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["BURN-TOKEN-TABLE"],
    }),
  }),
});

export const { useBurnTokenMutation } = burnTokenApiSlice;
