import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import routingInitialState from "./initial-state";
import { ModalState } from "./types";

const modalSlice = createSlice({
  name: "modal",
  initialState: routingInitialState,
  reducers: {
    "open-modal": (
      state,
      action: PayloadAction<{ type: string; context?: ModalState["context"] }>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.context = action.payload.context || {};
    },
    "close-modal": (state) => {
      state.isOpen = false;
      state.type = null;
      state.context = {};
    },
  },
});

export const { "open-modal": openModal, "close-modal": closeModal } =
  modalSlice.actions;

export default modalSlice;
