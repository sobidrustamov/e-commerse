'use client';
import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, remove } from "@/redux/product-reducer/cart-reducer";
import { addToLike, deleteItem } from "@/redux/product-reducer/like-reducer";

interface Props {
  data: any;
}
const Buttons:React.FC<Props> = ({data}) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.like);
  const { products: cart } = useSelector((state: RootState) => state.cart);
  const like = products.find((item) => item.id === data.id);
  const cartItem = cart.find((item) => item.id === data.id);

  const addItem = () => {
    dispatch(addToCart({ ...data, userCount: 0, userPrice: 0 }));
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };
  const addLiked = () => {
    dispatch(addToLike(data));
  };
  const removeLiked = (id: number) => {
    dispatch(deleteItem(id));
  };
  return (
    <div>
      <div className="p-2 flex gap-2 items-center justify-evenly">
        {!cartItem ? (
          <button
            onClick={addItem}
            className="w-full bg-regal-blue text-white px-4 py-2 rounded-md"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => removeItem(data.id)}
            className="w-full bg-cyan-100 px-4 py-2 rounded-md"
          >
            Remove at Cart
          </button>
        )}
        {!like ? (
          <button onClick={addLiked} className="">
            <FcLikePlaceholder size={30} />
          </button>
        ) : (
          <button onClick={() => removeLiked(data.id)} className="">
            <FcLike size={30} />
          </button>
        )}
        
      </div>
    </div>
  );
}

export default Buttons
