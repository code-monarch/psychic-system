import { baseApiSlice } from "../../api/base.api-slice";

interface ILoginResData {
  error: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
  otp_enabled: boolean;
  isVerified: boolean;
  timestamp: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const loginApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResData, ILoginPayload>({
      query: (loginDetails) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginDetails,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
