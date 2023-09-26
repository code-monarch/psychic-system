/* eslint-disable no-unused-vars */
// import { WalletTypes } from "@/pattern/types";
import { baseApiSlice } from "../../api/base.api-slice";

export enum RequestType {
  wallet = "wallet",
  funding = "funding",
  closure = "closure",
  redemption = "redemption",
}

interface ICreateInitialRequestFormPayload {
  requestType: RequestType;
  name: string;
  walletType: string;
}
interface ICreateInitialRequestFormResponse {
  id: number;
  requestType: RequestType;
  json: Record<any, any>;
}

export const createInitialRequestFormApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create Initial Request form
    createInitialRequestForm: builder.mutation<
      ICreateInitialRequestFormResponse,
      ICreateInitialRequestFormPayload
    >({
      query: (requestFormPayload) => ({
        url: `/requests/form`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestFormPayload,
      }),
    }),
  }),
});

export const { useCreateInitialRequestFormMutation } =
  createInitialRequestFormApiSlice;
