import { configureStore } from "@reduxjs/toolkit";

import { baseApiSlice } from "./api/base.api-slice";
import { baseAuthApiSlice } from "./api/base-auth.api-slice";

// Import Setup Listener
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./features/auth";
import activeSidebarNavReducer from "./features/active-sidebar";
import userDetailsSliceReducer from "./features/user";
import globalStateReducers from "./features/global-state";

// Create Redux Store with our base apiSlice
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    [baseAuthApiSlice.reducerPath]: baseAuthApiSlice.reducer,
    activeSidebarNav: activeSidebarNavReducer,
    userDetails: userDetailsSliceReducer,
    globalState: globalStateReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      baseApiSlice.middleware,
      baseAuthApiSlice.middleware
    ),
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  devTools: process.env.NODE_ENV !== "production",
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;
