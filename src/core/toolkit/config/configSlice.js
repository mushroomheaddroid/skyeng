import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sorter: "order_cheaper",
};

export const configSlice = createSlice({
  name: "user/config",
  initialState,
  reducers: {
    setConfigSlice: (
      state,
      action
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setConfigSlice } = configSlice.actions;

export default configSlice.reducer;
