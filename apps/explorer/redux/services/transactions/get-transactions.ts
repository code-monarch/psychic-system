import { baseApiSlice } from "../../api/base.api-slice";
import { ITransactionResponse } from "./get-single-transaction";

export interface ITransactionsResponse {
  transactions: ITransactionResponse[];
  links: {
    next: string;
  };
}

export interface ITransactionsPayload {
  transactiontype?:
    | "TOKENGRANTKYC"
    | "TOKENREVOKEKYC"
    | "TOKENMINT"
    | "TOKENBURN"
    | "TOKENDELETION"
    | "TOKENWIPE"
    | "FREEZE"
    | "TOKENUNFREEZE";
  timestamp?: string;
}

export const getAllTransactionsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets all transactions
    getAllTransactions: builder.query<
      ITransactionsResponse,
      Partial<ITransactionsPayload>
    >({
      query: ({ transactiontype, timestamp }) => ({
        url: `transactions?limit=10&order=desc${
          timestamp ? `&timestamp=lt:${timestamp}` : ""
        }&${transactiontype ? `&transactiontype=${transactiontype}` : ""}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response: ITransactionsResponse) => {
        // Use map to iterate through the response
        if (response?.transactions?.length !== 0) {
          response?.transactions?.map((transaction) => {
            // Check if the 'result' field does not match "SUCCESS"
            if (transaction?.result?.toLowerCase() !== "success") {
              // If it does not match, we will assign the 'result' field to "FAILED"
              transaction.result = "FAILED";
            }
          });
        }
        return response;
      },
    }),
  }),
});

export const { useLazyGetAllTransactionsQuery, useGetAllTransactionsQuery } =
  getAllTransactionsApiSlice;
