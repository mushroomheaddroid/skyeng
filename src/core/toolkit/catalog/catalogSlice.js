import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const catalogSlice = createSlice({
  name: "user/catalog",
  initialState,
  reducers: {
    setCatalogSlice: (
      state,
      action
    ) => {
      return [
        ...action.payload,
      ];
    },
  },
});

export const { setCatalogSlice } = catalogSlice.actions;

export default catalogSlice.reducer;
