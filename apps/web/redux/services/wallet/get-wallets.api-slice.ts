import { baseApiSlice } from "../../api/base.api-slice";

interface IWalletsResponse {
  id: string;
  category: string;
  owner: string;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
  level: "UNVERIFIED" | "MINIMUM" | "MEDIUM" | "ENHANCED" | "OTHER";
  createdAt: string;
  balances: {
    token: {
      id: string;
      name: string;
      symbol: string;
      decimal: number;
    };
    amount: number;
  }[];
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const WalletsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin Wallets
    getWallets: builder.query<IWalletsResponse, void>({
      query: () => ({
        url: "wallets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetWalletsQuery } = WalletsApiSlice;
