import { baseApiSlice } from '@/redux/api/base.api-slice';

interface IPayload {
  email: string | null | undefined
}

export const resendEmailAPISlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resendEmail: builder.mutation<any, IPayload>({
      query: (email) => ({
        url: "auth/resend-email",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: email,
      }),
    }),
  }),
});

export const { useResendEmailMutation } = resendEmailAPISlice;