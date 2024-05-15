import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import {
  cartReducer,
  addToCart,
  remove,
  toggleAnmount,
  totalPrice,
  totalCount,
} from "./product-reducer/cart-reducer";

import { saveState } from "@/config/storage";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addToCart, remove, toggleAnmount),
  effect: (_action, api) => {
    api.dispatch(totalPrice());
    api.dispatch(totalCount());
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(storageMiddlware.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
