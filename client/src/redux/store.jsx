import { configureStore } from "@reduxjs/toolkit";
import { alertsReducer } from "./reducers/alertsSlice";
import { userReducer } from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    user: userReducer,
    // Add other reducers here if needed
  },
});
