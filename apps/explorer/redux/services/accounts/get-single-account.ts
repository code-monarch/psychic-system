import { baseApiSlice } from "../../api/base.api-slice";

export interface IResponse {
  account: string;
  alias: null;
  auto_renew_period: 7776000;
  balance: {
    balance: 0;
    timestamp: "1701778078.959878285";
    tokens: [
      {
        token_id: "0.0.2035606";
        balance: 1;
      }
    ];
  };
  created_timestamp: "1701778078.959878285";
  decline_reward: false;
  deleted: false;
  ethereum_nonce: 0;
  evm_address: "0x00000000000000000000000000000000003f5d7a";
  expiry_timestamp: "1709554078.959878285";
  key: {
    _type: "ECDSA_SECP256K1";
    key: "0380cedfdbc987c8dd6678c0bf209176367c2510f5f016a4a9df46de92c4e018e4";
  };
  max_automatic_token_associations: number;
  memo: string;
  pending_reward: number;
  receiver_sig_required: boolean;
  staked_account_id: string | number | null;
  staked_node_id: string | number | null;
  stake_period_start: string | number | null;
  transactions: [];
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
