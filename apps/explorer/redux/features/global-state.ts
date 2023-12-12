"use client";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  isPaginationClicked?: boolean;
}

const initialState: IGlobalState = {
  isPaginationClicked: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setPaginationClicked: (state, action: PayloadAction<boolean>) => {
      state.isPaginationClicked = action?.payload;
    },
  },
});

export const { setPaginationClicked } = globalStateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const GlobalState = (state: RootState) => state.globalState;

export default globalStateSlice.reducer;
