import i18next from "@localization/index";
import { SupportedLanguages } from "@localization/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initial-state";

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  selectors: {
    isLocalizationLoading: (state) => state.loading,
    getLanguage: (state) => state.lang,
  },
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

export const { isLocalizationLoading, getLanguage } =
  localizationSlice.selectors;

export default localizationSlice;
