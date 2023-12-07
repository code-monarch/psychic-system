import { baseApiSlice } from "../../api/base.api-slice";
import {
  ITransactionsPayload,
  ITransactionsResponse,
} from "./get-transactions";

type Payload = {
  accountId: string;
} & Partial<ITransactionsPayload>;

export const getAccountTransactionsByTransactionTypeApiSlice =
  baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      // Gets single transactions
      getAccountTransactionsByTransactionType: builder.query<
        ITransactionsResponse,
        Payload
      >({
        query: ({ transactiontype, accountId }) => ({
          url: `transactions?limit=10&order=desc&account.id=${accountId}${
            transactiontype ? `&transactiontype=${transactiontype}` : ""
          }`,
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
  useLazyGetAccountTransactionsByTransactionTypeQuery,
  useGetAccountTransactionsByTransactionTypeQuery,
} = getAccountTransactionsByTransactionTypeApiSlice;
