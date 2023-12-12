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
  result: "SUCCESS" | "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT" | "FAILED";
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
      transformResponse: (
        response: Record<"transactions", ITransactionResponse[]>
      ) => {
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

export const {
  useLazyGetSingleTransactionQuery,
  useGetSingleTransactionQuery,
} = getSingleTransactionApiSlice;
