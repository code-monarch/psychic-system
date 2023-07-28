import { baseApiSlice } from "@/redux/api/base.api-slice";


export const forgotPasswordApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation<any, Record<string, string>>({
      query: (forgotPasswordDetails) => ({
        url: "auth/forgot-password",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: forgotPasswordDetails,
      }),
    }),
  }),
});

export const { useForgotPasswordMutation } = forgotPasswordApiSlice;
