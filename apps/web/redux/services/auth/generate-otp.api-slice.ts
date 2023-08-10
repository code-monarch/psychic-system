import { baseApiSlice } from "../../api/base.api-slice";


export const generateOtpApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generateOtp: builder.mutation<any, void>({
      query: () => ({
        url: "auth/otp/generate",
        method: "POST",
        headers: { "content-type": "application/json" },
      }),
    }),
  }),
});

export const { useGenerateOtpMutation } = generateOtpApiSlice;
