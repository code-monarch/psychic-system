import { baseApiSlice } from "../../api/base.api-slice";

export interface IResetPasswordPayload {
  email: string;
  resetString: string;
  password: string;
}

export const resetPasswordApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation<any, Record<string, string>>({
      query: (resetPasswordDetails) => ({
        url: "auth/reset-password",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: resetPasswordDetails,
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = resetPasswordApiSlice;
