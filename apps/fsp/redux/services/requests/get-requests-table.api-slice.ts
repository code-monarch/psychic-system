import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./get-request-form-to-fill.api-slice";

export type RequestTable = {
  id: string;
  requestType: RequestType;
  entity: string;
  timestamp: number;
  status: "pending" | "Active";
};

export interface IRequestsTableResponse {
  requestTable: RequestTable[];
  totalItems: number;
  totalPages: number;
  offset: number;
  limit: number;
}


interface IRequestsTablePayload {
  requestType: RequestType; // requestType: "wallet" | "funding" | "closure";
}

export const getRequestTableApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Request Table data
    getRequestsTable: builder.query<
      IRequestsTableResponse,
      IRequestsTablePayload
    >({
      query: ({ requestType }) => ({
        url: `/requests/fsp?requestType=${requestType}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetRequestsTableQuery, useGetRequestsTableQuery } =
  getRequestTableApiSlice;
