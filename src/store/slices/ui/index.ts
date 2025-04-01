import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import routingInitialState from "./initial-state";

const uiSlice = createSlice({
  name: "ui",
  initialState: routingInitialState,
  selectors: {
    isDarkMode: (state) => state.dark,
    isDrawerOpen: (state) => state.drawerOpen,
  },
  reducers: {
    "set-dark-mode": (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
    "switch-dark-mode": (state) => {
      state.dark = !state.dark;
    },
    "open-drawer": (state) => {
      state.drawerOpen = true;
    },
    "close-drawer": (state) => {
      state.drawerOpen = false;
    },
    "switch-drawer-visibility": (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const {
  "switch-dark-mode": switchDarkMode,
  "set-dark-mode": setDarkMode,
  "open-drawer": openDrawer,
  "close-drawer": closeDrawer,
  "switch-drawer-visibility": switchDrawerVisibility,
} = uiSlice.actions;

export const { isDarkMode, isDrawerOpen } = uiSlice.selectors;

export default uiSlice;
