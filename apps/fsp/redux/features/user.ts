/* eslint-disable turbo/no-undeclared-env-vars */
import LocalStore from "@/lib/helpers/session-manager";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSlice {
  isVerified?: boolean;
  completeKYC?: boolean;
  email2fa?: boolean;
  sms2fa?: boolean;
  google2fa?: boolean;
}

const initialState: IUserSlice = {
  isVerified: false,
  completeKYC: false,
  email2fa: false,
  sms2fa: false,
  google2fa: false,
};

// Profile 2FA security Preferences. To be stored in Local storage
export type I2FApref = Pick<
  Required<IUserSlice>,
  "email2fa" | "sms2fa" | "google2fa"
>;

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    // set2FaPreference Action
    set2FaPreference: (state, action: PayloadAction<I2FApref>) => {
      state.email2fa = action.payload.email2fa;
      state.google2fa = action.payload.google2fa;
      state.sms2fa = action.payload.sms2fa;
      const securityPreference = JSON.stringify({
        email2FA: state.email2fa,
        google2FA: state.google2fa,
        sms2FA: state.sms2fa,
      });
      LocalStore.setItem({
        key: process.env.NEXT_PUBLIC_2FA_PREF,
        value: securityPreference,
      });
    },
    // set2FaPreference Action End
  },
});

// Action creators are generated for each case reducer function
export const { set2FaPreference } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
