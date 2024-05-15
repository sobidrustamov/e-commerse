import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "@/config/storage";

interface cart {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount:number;
  userPrice:number;
}
interface CartState {
  products: cart[];
  count: number;
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = loadState("products") || {
  products: [],
  count: 0,
  totalCount: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cart>) => {
      const test = state.products.find((item) => item.id === action.payload.id);

      if (!test) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: parseInt(action.payload.price),
            },
          ],
        };
      }

      return state;
    },
    remove: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    },
    toggleAnmount: (
      state,
      action: PayloadAction<{ type: string; id: number }>
    ) => {
      if (action.payload.type === "add") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * Number(item.price),
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
      if (action.payload.type === "remove") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * Number(item.price),
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => {
          return a + b.userPrice;
        }, 0),
      };
    },
    totalCount: (state) => {
      return {
        ...state,
        totalCount: state.products.reduce((a, b) => {
          return a + b.userCount;
        }, 0),
      };
    },
  },
});

export const { addToCart, remove, toggleAnmount, totalCount, totalPrice } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
