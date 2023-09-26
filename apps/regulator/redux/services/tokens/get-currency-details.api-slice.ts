import { baseApiSlice } from "../../api/base.api-slice";

export interface ICurrencyPayload {
  offset: number;
  limit?: number;
}

interface IPageDetails {
  walletId: string;
  amount: string;
  createdAt: string;
}

type ICurrencyDetails = {
  totalMinted: string;
  walletBalance: string;
  circulatingSupply: string;
  notInCirculationSupply: string;
  totalItems: number;
  totalPages: number;
  offset: number;
  limit: number;
};

// Responses
interface IMintPageResponse extends ICurrencyDetails {
  mintTable: IPageDetails[];
}
interface IDistributionPageResponse extends ICurrencyDetails {
  distributionTable: IPageDetails[];
}
interface IBurnPageResponse extends ICurrencyDetails {
  burnTable: IPageDetails[];
}

export const currencyDetailsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get table details of currency mint tab
    mintTableDetails: builder.query<IMintPageResponse, ICurrencyPayload>({
      query: ({ offset }) => ({
        url: `tokens/mint/page?offset=${offset}&limit=7`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["MINT-TOKEN-TABLE"],
    }),
    // Get table details of currency distribution tab
    distributionTableDetails: builder.query<
      IDistributionPageResponse,
      ICurrencyPayload
    >({
      query: ({ offset }) => ({
        url: `tokens/distribution/page?offset=${offset}&limit=7`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["DISTRIBUTE-TOKEN-TABLE"],
    }),
    // Get table details of currency burn tab
    burnTableDetails: builder.query<IBurnPageResponse, ICurrencyPayload>({
      query: ({ offset }) => ({
        url: `tokens/burn/page?offset=${offset}&limit=7`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["BURN-TOKEN-TABLE"],
    }),
  }),
});

export const {
  useMintTableDetailsQuery,
  useBurnTableDetailsQuery,
  useDistributionTableDetailsQuery,
} = currencyDetailsApiSlice;
