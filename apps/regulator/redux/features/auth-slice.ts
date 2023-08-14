import { createSlice } from "@reduxjs/toolkit";

// initial State is either empty or not
interface IAuthSlice {
  user?: null | string;
  token?: null | string;
}
const initialState: IAuthSlice = { user: null, token: null };

// Let's get our User onboarded, shall we?
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     *
     * They are frustrated, life sucks, so they would like to log out of our platform, help them out by
     * removing their credentials from state. They're prolly owing a lot of tax
     */
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// We've created our Authentication actions, now let's expose them so we are able to use them in our App
export const { logOut } = authSlice.actions;

/**
 *
 * This will help us get our user details in a useSelector hook without nesting i.e useSelector((state)=> {state.auth.user})
 */
export const selectCurrentUser = (state: { auth: { user: string } }) => {
  state.auth.user;
};

// Get the their refresh token with this function and store it in local storage. The refresh token gets their access token as implemented the apiSlice
export const selectCurrentToken = (state: { auth: { token: string } }) => {
  state.auth.token;
};
// This goes to our redux store
export default authSlice.reducer;
