import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "@/config/storage";

interface like {
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
}
interface LikeState {
  products: like[];
  likeCount:number;
}

const initialState: LikeState = loadState("liked-products") || {
  products: [],
  likeCount:0,
};
export const likeSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLike: (state, action: PayloadAction<like>) => {
      const test = state.products.find((item) => item.id === action.payload.id);

      if (!test) {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

      return state;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    },
    likeCount:(state)=>{
      return {...state,likeCount:state.products.length}
    }
  },
});

export const { addToLike, deleteItem,likeCount } = likeSlice.actions;
export const likeReducer = likeSlice.reducer;
