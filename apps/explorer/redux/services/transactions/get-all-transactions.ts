import { baseApiSlice } from "../../api/base.api-slice";

export interface ITransactionResponse {
  transactions: {
    bytes: string | number | null;
    charged_tx_fee: number;
    consensus_timestamp: string;
    entity_id: string;
    max_fee: string;
    memo_base64: string;
    name: string;
    nft_transfers: [];
    node: string;
    nonce: number;
    parent_consensus_timestamp: string | number | null;
    result: "SUCCESS" | "FAILED" | "ONGOING";
    scheduled: false;
    staking_reward_transfers: [];
    token_transfers: [];
    transaction_hash: string;
    transaction_id: string;
    transfers: {
      account: string;
      amount: number;
      is_approval: boolean;
    }[];
    valid_duration_seconds: string;
    valid_start_timestamp: string;
  }[];
  links: {
    next: string;
  };
}

export const getAllTransactionsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets all transactions
    getAllTransactions: builder.query<ITransactionResponse, void>({
      query: () => ({
        url: `transactions?limit=10&order=desc`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useLazyGetAllTransactionsQuery, useGetAllTransactionsQuery } =
  getAllTransactionsApiSlice;
