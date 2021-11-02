import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  bookmarkArray: [],
};

export const cartSlice = createSlice({
  name: "user/cart",
  initialState,
  reducers: {
    setCartSlice: (
      state,
      action
    ) => {
      return {
        cartArray: action.payload.cartArray && state.cartArray.find(el => el.item === action.payload.cartArray)
          ? state.cartArray.filter(el => el.item !== action.payload.cartArray)
          : action.payload.cartArray
            ? [...state.cartArray, { item: action.payload.cartArray, amount: action.payload.amount }]
            : [...state.cartArray],

        bookmarkArray: action.payload.bookmarkArray && state.bookmarkArray.indexOf(action.payload.bookmarkArray) !== -1
          ? state.bookmarkArray.filter(item => item !== action.payload.bookmarkArray)
          : action.payload.bookmarkArray
            ? [...state.bookmarkArray, action.payload.bookmarkArray]
            : [...state.bookmarkArray],
      };
    },
    setAmountSlice: (
      state,
      action
    ) => {
      console.log( action.payload )
      return {
        cartArray: [...state.cartArray.filter(el => el.item !== action.payload.item), { item: action.payload.item, amount: action.payload.amount }],
        bookmarkArray: [...state.bookmarkArray],
      };
    },
    setEmptyCartSlice: (
      state,
    ) => {
      return {
        cartArray: [],
        bookmarkArray: [...state.bookmarkArray],
      };
    },

  },
});

export const { setCartSlice, setAmountSlice, setEmptyCartSlice } = cartSlice.actions;

export default cartSlice.reducer;
