import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import routingInitialState from "./initial-state";

const routingSlice = createSlice({
  name: "routing",
  initialState: routingInitialState,
  selectors: {
    getPath: (state) => state.path,
  },
  reducers: {
    "set-page": (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

export const { "set-page": setPage } = routingSlice.actions;
export const { getPath } = routingSlice.selectors;

export default routingSlice;
