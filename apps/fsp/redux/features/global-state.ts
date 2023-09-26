"use client"
import { WalletType } from "@/lib/types";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  appTourId?: string;
  tour?: boolean; // Determines whether app tour should run or not
  walletType?: WalletType; // Value of wallet wallet type select dropdown
}

const initialState: IGlobalState = {
  appTourId: "",
  tour: false,
  walletType: "Institutional"
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    /**
     * @description
     * sets app tour id for current spotlight e.g: "#dashboardd"
     */
    setAppTourId: (state, action: PayloadAction<IGlobalState>) => {
      state.appTourId = action.payload.appTourId;
    },

    startTour: (state) => {
      state.tour = true;
    },

    endTour: (state) => {
      state.tour = false;
    },

    setWalletType: (state, action: PayloadAction<IGlobalState>) => {
      state.walletType = action.payload.walletType;
    },
  },
});

export const { setAppTourId, startTour, endTour, setWalletType } =
  globalStateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const GlobalState = (state: RootState) => state.globalState;

export default globalStateSlice.reducer;
