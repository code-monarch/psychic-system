import { baseApiSlice } from "../../api/base.api-slice";

interface IApproveRequestPayload {
  id: number;
  status: "approved" | "denied";
}

export const approveRequestFormApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Approve Request form
    approveRequestForm: builder.mutation<any, IApproveRequestPayload>({
      query: (payload) => ({
        url: `/requests/status`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }),
      invalidatesTags: ["REQUEST-DETAILS"],
    }),
    // Deny Request form
    denyRequestForm: builder.mutation<any, IApproveRequestPayload>({
      query: (payload) => ({
        url: `/requests/status`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }),
      invalidatesTags: ["REQUEST-DETAILS"],
    }),
  }),
});

export const { useApproveRequestFormMutation, useDenyRequestFormMutation } =
  approveRequestFormApiSlice;
