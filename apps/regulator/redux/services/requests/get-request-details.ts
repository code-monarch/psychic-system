import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./create-initial-request-form";

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
      providesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useLazyGetRequestDetailsQuery, useGetRequestDetailsQuery } =
  getRequestDetailsApiSlice;
