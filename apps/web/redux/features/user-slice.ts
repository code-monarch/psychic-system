/* eslint-disable turbo/no-undeclared-env-vars */
import LocalStore from "@/lib/helpers/session-manager";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSlice {
  currentPlan?: string;
  email?: string;
  businessName?: string;
  isVerified?: boolean;
  completeKYC?: boolean;
  email2fa?: boolean;
  sms2fa?: boolean;
  google2fa?: boolean;
}

const initialState: IUserSlice = {
  currentPlan: "",
  email: "",
  businessName: "",
  isVerified: false,
  completeKYC: false,
  email2fa: false,
  sms2fa: false,
  google2fa: false,
};

// Some User details to store in Local Storage
export type IUserdetails = Pick<
  IUserSlice,
  "currentPlan" | "email" | "businessName" | "isVerified"
>;

// Profile 2FA security Preferences. To be stored in Local storage
export type I2FApref = Pick<
  Required<IUserSlice>,
  "email2fa" | "sms2fa" | "google2fa"
>;

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    // setPlan Action
    setPlan: (
      state,
      action: PayloadAction<Pick<IUserSlice, "currentPlan">>
    ) => {
      state.currentPlan = action.payload.currentPlan;
      const userDetails: IUserdetails = {
        currentPlan: state.currentPlan!,
      };
      LocalStore.setItem({
        key: process.env.NEXT_PUBLIC_USER_DETAILS,
        value: JSON.stringify({ ...userDetails }),
      });
    },

    setEmail: (state, action: PayloadAction<Pick<IUserSlice, "email">>) => {
      state.email = action.payload.email;
      const userDetails: IUserdetails = {
        email: state.email!,
      };
      LocalStore.setItem({
        key: process.env.NEXT_PUBLIC_USER_DETAILS,
        value: JSON.stringify({ ...userDetails }),
      });
    },
    // setPlan Action End

    // setBusinessName Action
    setBusinessName: (
      state,
      action: PayloadAction<Pick<IUserSlice, "businessName">>
    ) => {
      state.businessName = action.payload.businessName;
      const userDetails: IUserdetails = {
        currentPlan: state.businessName!,
      };
      LocalStore.setItem({
        key: process.env.NEXT_PUBLIC_USER_DETAILS,
        value: JSON.stringify({ ...userDetails }),
      });
    },
    // setBusinessName Action End

    // setIsVerified Action
    setIsVerified: (
      state,
      action: PayloadAction<Pick<IUserSlice, "isVerified">>
    ) => {
      state.isVerified = action.payload.isVerified!;
      const userDetails: IUserdetails = {
        isVerified: state.isVerified!,
      };
      LocalStore.setItem({
        key: process.env.NEXT_PUBLIC_USER_DETAILS,
        value: JSON.stringify({ ...userDetails }),
      });
    },
    // setIsVerified Action End

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
export const {
  setPlan,
  setEmail,
  setBusinessName,
  setIsVerified,
  set2FaPreference,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
