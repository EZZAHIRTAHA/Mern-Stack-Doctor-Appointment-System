import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
});

// Export the reducer directly
export const { reducer: userReducer, actions } = userSlice;
export const { setUser } = actions;
