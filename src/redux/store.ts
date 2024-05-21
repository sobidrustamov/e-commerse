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
import {likeReducer,addToLike, deleteItem,likeCount} from "./product-reducer/like-reducer";

import { saveState } from "@/config/storage";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addToCart, remove, toggleAnmount),
  effect: (_action, api) => {
    api.dispatch(totalPrice());
    api.dispatch(totalCount());
  },
});

storageMiddlware.startListening({
  matcher: isAnyOf(addToLike, deleteItem),
  effect: (_action, api) => {
    api.dispatch(likeCount());
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(storageMiddlware.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
  saveState("liked-products", store.getState().like);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
