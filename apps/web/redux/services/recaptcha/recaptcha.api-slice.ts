import { baseApiSlice } from "../../api/base.api-slice";

export interface IRecaptchaPayload {
  reCaptchaToken: string;
}

export const recaptchaApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    recaptcha: builder.mutation<void, IRecaptchaPayload>({
      query: (recaptchaToken) => ({
        url: "recaptcha",
        method: "POST",
        body: recaptchaToken,
      }),
    }),
  }),
});

export const { useRecaptchaMutation } = recaptchaApiSlice;
