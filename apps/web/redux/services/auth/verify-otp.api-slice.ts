import { baseApiSlice } from '@/redux/api/base.api-slice';

interface IPayload {
  token: string;
}

export const verifyOtpApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyOtp: builder.mutation<any, IPayload>({
      query: (token) => ({
        url: "auth/otp/verify",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: token,
      }),
    }),
  }),
});

export const { useVerifyOtpMutation } = verifyOtpApiSlice;
