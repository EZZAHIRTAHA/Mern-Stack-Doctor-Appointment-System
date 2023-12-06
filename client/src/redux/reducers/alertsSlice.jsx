import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

// Export the reducer directly
export const { reducer: alertsReducer, actions } = alertsSlice;
export const { showLoading, hideLoading } = actions;
