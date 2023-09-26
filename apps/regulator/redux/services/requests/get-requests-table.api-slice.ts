import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./create-initial-request-form";

interface IRequestTableResponse {
  requestTable: {
    id: string;
    requestType: RequestType;
    json: Record<string, string>;
    requestNumber: string;
    fspId: string;
    regulatorId: string;
    entity: string;
    status: "Success" | "Pending" | "Failed" | "active" | "closed";
    walletType: string;
    timestamp: number;
  }[];
  totalItems: number;
  totalPages: number;
  offset: number;
  limit: number;
}

interface IRequestTablePayload {
  requestType: RequestType; // Request type
  offset: number; // page 
}

export const requestsTableApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets request table by request Type
    getRequestsTable: builder.query<
      IRequestTableResponse,
      IRequestTablePayload
    >({
      query: ({ requestType, offset }) => ({
        url: `requests?requestType=${requestType}&offset=${offset}&limit=10`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetRequestsTableQuery, useGetRequestsTableQuery } =
  requestsTableApiSlice;
