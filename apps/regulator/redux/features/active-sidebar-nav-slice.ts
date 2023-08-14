import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SIDEBAR_STATE } from "@/lib/constants/index.constants";
import LocalStore from "@/lib/helpers/session-manager.helpers";

interface IActiveSidebarNav {
  activeSidebarNav: string;
  toggleSidebar: boolean;
}

const initialState: IActiveSidebarNav = {
  activeSidebarNav: "/",
  toggleSidebar: false,
};

export const activeSidebarNavSlice = createSlice({
  name: "activeSidebarNav",
  initialState,
  reducers: {
    saveActiveNav: (state, action) => {
      state.activeSidebarNav = action.payload;
    },
    expandSidebar: (state) => {
      state.toggleSidebar = false;
      LocalStore.setItem({
        key: SIDEBAR_STATE,
        value: "false",
      });
    },
    collapseSidebar: (state) => {
      state.toggleSidebar = true;
      LocalStore.setItem({
        key: SIDEBAR_STATE,
        value: "true",
      });
    },
  },
});
// Action creators are generated for each case reducer function
export const { saveActiveNav, expandSidebar, collapseSidebar } =
  activeSidebarNavSlice.actions;

// This will help us get the current state of our main layout Visibility
export const activeSidebarNav = (state: RootState) => {
  state.activeSidebarNav;
};

export default activeSidebarNavSlice.reducer;
