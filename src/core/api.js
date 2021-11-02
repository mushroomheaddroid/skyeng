import { setCatalogSlice } from "./toolkit/catalog/catalogSlice";
import { setConfigSlice } from "./toolkit/config/configSlice";
import { setCartSlice, setAmountSlice, setEmptyCartSlice } from "./toolkit/cart/cartSlice";

const api = {
  catalog: {
    setCatalogSlice,
  },
  config: {
    setConfigSlice,
  },
  cart: {
    setCartSlice,
    setAmountSlice,
    setEmptyCartSlice,
  }
};

export { api };