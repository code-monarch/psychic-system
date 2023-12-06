import { baseApiSlice } from "../../api/base.api-slice";
export interface ITransactionResponse {
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
}

interface IGetSingleTransactionPayload {
  timestamp: string;
}

export const getSingleTransactionApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets single transactions
    getSingleTransaction: builder.query<
      Record<"transactions", ITransactionResponse[]>,
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

export const {
  useLazyGetSingleTransactionQuery,
  useGetSingleTransactionQuery,
} = getSingleTransactionApiSlice;
