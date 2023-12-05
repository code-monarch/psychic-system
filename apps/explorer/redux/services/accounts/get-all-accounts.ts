import { baseApiSlice } from "../../api/base.api-slice";

export interface IResponse {
  accounts: {
    account: string;
    alias: string | null;
    auto_renew_period: number;
    balance: {
      balance: number;
      timestamp: string;
      tokens: [];
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
  }[];
  links: {
    next: string;
  };
}

export const getAllFungibleTokensApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets all tokens
    getAllFungibleTokens: builder.query<IResponse, void>({
      query: () => ({
        url: `accounts?limit=15&order=desc`,
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
  useLazyGetAllFungibleTokensQuery,
  useGetAllFungibleTokensQuery,
} = getAllFungibleTokensApiSlice;

