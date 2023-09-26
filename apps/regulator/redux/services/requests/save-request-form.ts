import { baseApiSlice } from "../../api/base.api-slice";

export const saveRequestFormApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create Initial Request form
    saveRequestForm: builder.mutation<
      any,
      any
    >({
      query: (requestFormPayload) => ({
        url: `/requests/form`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestFormPayload,
      }),
    }),
  }),
});

export const { useSaveRequestFormMutation } = saveRequestFormApiSlice;
