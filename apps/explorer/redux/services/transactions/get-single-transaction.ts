import { baseApiSlice } from "../../api/base.api-slice";
import { ITransactionResponse } from "./get-all-transactions";


interface IGetSingleTransactionPayload{
   timestamp: string
}

export const getSingleTransactionApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets single transactions
    getSingleTransaction: builder.query<
      ITransactionResponse,
      IGetSingleTransactionPayload
    >({
      query: ({ timestamp }) => ({
        url: `transactions?limit=10&order=desc&timestamp=${timestamp}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useLazyGetSingleTransactionQuery, useGetSingleTransactionQuery } =
  getSingleTransactionApiSlice;
