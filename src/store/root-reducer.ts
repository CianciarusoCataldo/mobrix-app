import { combineReducers } from "@reduxjs/toolkit";
import routingSlice from "./slices/routing";
import localizationSlice from "./slices/localization";

export default combineReducers({
  routing: routingSlice.reducer,
  localization: localizationSlice.reducer,
});
