/* eslint-disable no-unused-vars */
import { baseApiSlice } from "../../api/base.api-slice";

export enum RequestType {
  wallet = "wallet",
  funding = "funding",
  closure = "closure",
  redemption = "redemption",
}

export interface IRequestsFormToFillResponse {
  id: number;
  requestType: RequestType;
  json: Record<any, any>;
}

export interface IRequestsFormToFillPayload {
  requestType: RequestType;
}

export const getRequestFormToFillApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Request For to Fill
    getRequestFormToFill: builder.query<
      IRequestsFormToFillResponse,
      IRequestsFormToFillPayload
    >({
      query: ({ requestType }) => ({
        url: `requests/fill?requestType=${requestType}&regulatorId=EMTECH`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useLazyGetRequestFormToFillQuery,
  useGetRequestFormToFillQuery,
} = getRequestFormToFillApiSlice;
