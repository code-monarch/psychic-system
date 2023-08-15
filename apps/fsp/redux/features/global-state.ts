import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  appTourId?: string;

  // Determines whether app tour should run or not
  tour?: boolean;
}

const initialState: IGlobalState = {
  appTourId: "",
  tour: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    /**
     * @description
     * sets app tour id for current spotlight e.g: "#dashboard"
     */
    setAppTourId: (state, action: PayloadAction<IGlobalState>) => {
      state.appTourId = action.payload.appTourId;
    },
    /**
     *
     * @description Begins app tour
     */
    startTour: (state) => {
      state.tour = true;
    },
    /**
     *
     * @description Ends app tour
     */
    endTour: (state) => {
      state.tour = false;
    },
  },
});

export const { setAppTourId, startTour, endTour } = globalStateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const GlobalState = (state: RootState) => state.globalState;

export default globalStateSlice.reducer;
