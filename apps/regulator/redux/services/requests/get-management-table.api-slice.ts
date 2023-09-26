import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./create-initial-request-form";

interface IRequestTableResponse {
    id: number,
    requestType: RequestType,
     json: any;
    }

interface IRequestTablePayload {
  requestType: RequestType; // Request type
}

export const managementTableApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets management table by request Type
    getManagementTable: builder.query<
      IRequestTableResponse,
      IRequestTablePayload
    >({
      query: ({ requestType }) => ({
        url: `requests/requestType?requestType=${requestType}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLazyGetManagementTableQuery, useGetManagementTableQuery } =
  managementTableApiSlice;
