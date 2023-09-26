import { ICurrencyCode } from "@emtech/utils";
import { baseApiSlice } from "../../api/base.api-slice";

interface ITokenDetailsPayload {
  tokenId: string;
}
interface ITokenDetailsResponse {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  supply: number | string;
  createdAt: number | string;
  currency: ICurrencyCode;
}

export const tokenDetailsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets details about a token
    getTokenDetails: builder.query<ITokenDetailsResponse, ITokenDetailsPayload>(
      {
        query: ({ tokenId }) => ({
          url: `tokens/${tokenId}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }
    ),
  }),
});

export const { useGetTokenDetailsQuery } = tokenDetailsApiSlice;
