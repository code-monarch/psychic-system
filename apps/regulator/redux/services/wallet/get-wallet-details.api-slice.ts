import { InstitutionWalletTypes } from "@/pattern/types";
import { baseApiSlice } from "../../api/base.api-slice";

interface IWalletDetailsResponse {
  walletId: string;
  balance: string;
  tokenIssued: string | number;
  tokenBurned: string | number;
  tokenSupply: string | number;
  tokenDistributed: string | number;
  credits: string | number;
  debits: string | number;
}
interface IInstitutionWalletResponse {
  institutionalTable: {
    walletId: string;
    institutionName: string;
    balance: number;
    walletType: InstitutionWalletTypes;
    endUsers: number;
    status: "Active" | "Inactive";
  }[];
  walletBalance: number;
  totalItems: number;
  totalPages: number;
  offset: number;
  limit: number;
}

export interface IWalletDetailsPayload {
  offset: number;
  limit?: number;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const WalletDetailsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets details of master wallet
    getMasterWalletDetails: builder.query<IWalletDetailsResponse, void>({
      query: () => ({
        url: "wallets/single/master",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // Gets details of distribution wallet
    getDistributionWalletDetails: builder.query<IWalletDetailsResponse, void>({
      query: () => ({
        url: "wallets/single/distribution",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // Gets details of institutional wallet
    getInstitutionalWalletDetails: builder.query<
      IInstitutionWalletResponse,
      IWalletDetailsPayload
    >({
      query: ({offset}) => ({
        url: `wallets/page/institutional?offset=${offset}&limit=10`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetMasterWalletDetailsQuery,
  useGetDistributionWalletDetailsQuery,
  useGetInstitutionalWalletDetailsQuery,
} = WalletDetailsApiSlice;
