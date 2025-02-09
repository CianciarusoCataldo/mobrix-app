import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import routingInitialState from "./initial-state";

const routingSlice = createSlice({
  name: "routing",
  initialState: routingInitialState,
  reducers: {
    "set-page": (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

export const { "set-page": setPage } = routingSlice.actions;

export default routingSlice;
