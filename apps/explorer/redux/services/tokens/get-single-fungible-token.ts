import { baseApiSlice } from "../../api/base.api-slice";

interface IPayload {
  token_id: string;
}
export interface IResponse {
  admin_key: {
    _type: string;
    key: string;
  };
  auto_renew_account: string;
  auto_renew_period: number;
  created_timestamp: string;
  custom_fees: {
    created_timestamp: string;
    fixed_fees: [];
    royalty_fees: {
      all_collectors_are_exempt: boolean;
      amount: {
        denominator: number;
        numerator: number;
      };
      collector_account_id: string;
      fallback_fee: string | number | null;
    }[];
  };
  decimals: string;
  deleted: boolean;
  expiry_timestamp: number;
  fee_schedule_key: {
    _type: string;
    key: string;
  };
  freeze_default: boolean;
  freeze_key: {
    _type: string;
    key: string;
  };
  initial_supply: string;
  kyc_key: {
    _type: string;
    key: string;
  };
  max_supply: string;
  memo: string;
  modified_timestamp: string;
  name: string;
  pause_key: {
    _type: string;
    key: string;
  };
  pause_status: "UNPAUSED";
  supply_key: {
    _type: string;
    key: string;
  };
  supply_type: "INFINITE";
  symbol: string;
  token_id: string;
  total_supply: string;
  treasury_account_id: string;
  type: "FUNGIBLE_COMMON";
  wipe_key: {
    _type: string;
    key: string;
  };
}

export const getSingleFungibleTokenApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets single Fungible Token
    getSingleFungibleToken: builder.query<
      IResponse,
      IPayload
    >({
      query: ({ token_id }) => ({
        url: `tokens/${token_id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      //   providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useLazyGetSingleFungibleTokenQuery, useGetSingleFungibleTokenQuery } =
  getSingleFungibleTokenApiSlice;
