import { configureStore } from "@reduxjs/toolkit";
import { alertsReducer } from "./reducers/alertsSlice";

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    // Add other reducers here if needed
  },
});
