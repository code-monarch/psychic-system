import { baseApiSlice } from "../../api/base.api-slice";

export interface IAllFungibleTokensResponse {
  tokens: {
    admin_key: {
      _type: string;
      key: string;
    };
    symbol: string;
    token_id: string;
    type: "FUNGIBLE_COMMON";
  }[];
  links: {
    next: string;
  };
}

interface IAllFungibleTokensPayload{
  lastTokenId?: string
}

export const getAllFungibleTokensApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets all tokens
    getAllFungibleTokens: builder.query<
      IAllFungibleTokensResponse,
      IAllFungibleTokensPayload
    >({
      query: ({ lastTokenId }) => ({
        url: `tokens?limit=10${
          lastTokenId ? `&token.id=lt:${lastTokenId}` : ""
        }&order=desc&type=FUNGIBLE_COMMON`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const {
  useLazyGetAllFungibleTokensQuery,
  useGetAllFungibleTokensQuery,
} = getAllFungibleTokensApiSlice;
