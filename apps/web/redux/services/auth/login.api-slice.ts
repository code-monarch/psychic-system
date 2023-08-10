import { baseApiSlice } from "../../api/base.api-slice";

interface ILoginResData {
  token: string;
  refreshToken: string;
  error: boolean;
  error_description: boolean;
  message: string;
  errorMessage: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const loginApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResData, ILoginPayload>({
      query: (loginDetails) => ({
        url: "signIn",
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
