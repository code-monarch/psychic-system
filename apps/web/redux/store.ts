import { configureStore } from "@reduxjs/toolkit";

import { baseApiSlice } from "./api/base.api-slice";
// import { baseAuthApiSlice } from "./api/base-auth.api-slice";

// Import Setup Listener
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./features/auth-slice";
import activeSidebarNavReducer from "./features/active-sidebar-nav-slice";
import userDetailsSliceReducer from "./features/user-slice";

// Create Redux Store with our base apiSlice
export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    // [baseAuthApiSlice.reducerPath]: baseAuthApiSlice.reducer,
    auth: authReducer,
    activeSidebarNav: activeSidebarNavReducer,
    userDetails: userDetailsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(baseApiSlice.middleware),
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  devTools: process.env.NODE_ENV !== "production",
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;