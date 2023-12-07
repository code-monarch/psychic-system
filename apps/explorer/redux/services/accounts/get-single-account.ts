import { baseApiSlice } from "../../api/base.api-slice";
import { ITransactionsResponse } from "../transactions/get-transactions";

export interface IResponse {
  account: string;
  alias: null | string;
  auto_renew_period: number;
  balance: {
    balance: number;
    timestamp: string;
    tokens: [
      {
        token_id: string;
        balance: number;
      }
    ];
  };
  created_timestamp: string;
  decline_reward: boolean;
  deleted: boolean;
  ethereum_nonce: number;
  evm_address: string;
  expiry_timestamp: string;
  key: {
    _type: string;
    key: string;
  };
  max_automatic_token_associations: number;
  memo: string;
  pending_reward: number;
  receiver_sig_required: boolean;
  staked_account_id: string | number | null;
  staked_node_id: string | number | null;
  stake_period_start: string | number | null;
  transactions: ITransactionsResponse["transactions"];
  links: {
    next: null;
  };
}

interface IPayload {
    account_id: string;
}

export const getSingleAccountApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets Single Account
    getSingleAccount: builder.query<IResponse, IPayload>({
      query: ({ account_id }) => ({
        url: `accounts/${account_id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useLazyGetSingleAccountQuery, useGetSingleAccountQuery } =
  getSingleAccountApiSlice;
