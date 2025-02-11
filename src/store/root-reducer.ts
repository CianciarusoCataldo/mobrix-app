import { combineReducers } from "@reduxjs/toolkit";
import localizationSlice from "./slices/localization";
import modalSlice from "./slices/modal";
import routingSlice from "./slices/routing";
import uiSlice from "./slices/ui";

export default combineReducers({
  routing: routingSlice.reducer,
  localization: localizationSlice.reducer,
  ui: uiSlice.reducer,
  modal: modalSlice.reducer,
});
