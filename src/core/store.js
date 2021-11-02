import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catalogSlice from "./toolkit/catalog/catalogSlice";
import configSlice from "./toolkit/config/configSlice";
import cartSlice from "./toolkit/cart/cartSlice";

export const store = configureStore({
  reducer: {
    catalog: combineReducers({
      catalog: catalogSlice,
    }),
    config: combineReducers({
      config: configSlice,
    }),
    cart: combineReducers({
      cart: cartSlice,
    }),
  },
});
