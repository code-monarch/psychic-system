import { baseApiSlice } from "../../api/base.api-slice";
import { ITransactionResponse } from "./get-single-transaction";

export interface ITransactionsResponse {
  transactions: ITransactionResponse[];
  links: {
    next: string;
  };
}

interface IPayload {
  transactiontype?:
    | "TOKENGRANTKYC"
    | "TOKENREVOKEKYC"
    | "TOKENMINT"
    | "TOKENBURN"
    | "TOKENDELETION"
    | "TOKENWIPE"
    | "FREEZE"
    | "TOKENUNFREEZE";
}

export const getAllTransactionsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets all transactions
    getAllTransactions: builder.query<ITransactionsResponse, Partial<IPayload>>(
      {
        query: ({ transactiontype }) => ({
          url: `transactions?limit=10&order=desc${
            transactiontype ? `&transactiontype=${transactiontype}` : ""
          }`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
        //   providesTags: ["REQUEST-DETAILS"],
      }
    ),
  }),
});

export const { useLazyGetAllTransactionsQuery, useGetAllTransactionsQuery } =
  getAllTransactionsApiSlice;
