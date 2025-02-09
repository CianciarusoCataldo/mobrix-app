import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { SupportedLanguages } from "@src/localization/types";
import i18next from "i18next";

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<{ lang: SupportedLanguages }>) => {
      state.lang = action.payload.lang;
      state.loading = false;
    },
    "set-language": (state, action: PayloadAction<SupportedLanguages>) => {
      state.lang = action.payload;
      i18next.changeLanguage(action.payload);
    },
  },
});

export const { init: initLocalization, "set-language": setLanguage } =
  localizationSlice.actions;

export default localizationSlice;
