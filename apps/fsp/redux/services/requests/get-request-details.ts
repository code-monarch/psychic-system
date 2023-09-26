import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./get-request-form-to-fill.api-slice";

export interface IRequestDetailsResponse {
  requestType: RequestType;
  id: string;
  status: "Success" | "Pending" | "Failed" | "active" | "closed";
  entity: string;
  timestamp: number;
}

interface IRequestDetailsPayload {
  id: string; // Request ID
}

export const getRequestDetailsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets request details
    getRequestDetails: builder.query<
      IRequestDetailsResponse,
      IRequestDetailsPayload
    >({
      query: ({ id }) => ({
        url: `requests/details?id=${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetRequestDetailsQuery, useGetRequestDetailsQuery } =
  getRequestDetailsApiSlice;
