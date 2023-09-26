import { baseApiSlice } from "../../api/base.api-slice";

interface ICreateTokenPayload {
  name: string;
  symbol: string;
  countryCode: string;
  walletId: string;
  initialSupply: number;
  decimals: number;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, createTokenApiSlice for example, into our apiSlice
export const createTokenApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a Token
    createToken: builder.mutation<any, ICreateTokenPayload>({
      query: (tokenDetails) => ({
        url: `tokens`,
        method: "POST",
        body: tokenDetails,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCreateTokenMutation } = createTokenApiSlice;
