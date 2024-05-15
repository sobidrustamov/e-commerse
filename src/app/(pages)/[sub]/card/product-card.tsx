"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/product-reducer/cart-reducer";

interface Props {
  data: {
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
  };
  parent: string;
}

const ProductCard: React.FC<Props> = ({ data, parent }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart({ ...data, userCount: 0, userPrice: 0 }));
  };

  return (
    <div className="lg:w-[300px] p-2 border flex flex-col rounded-2xl overflow-hidden">
      <div className="h-[280px] flex items-center justify-center ">
        <img
          src={data.images[0].image}
          alt="product"
          className="object-contain"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <Link href={`/${parent}/${data.id}`}>
          <p className="text-center text-xl">{data.title}</p>
        </Link>
        <p className="text-center font-bold">$ {data.price}</p>
      </div>
      <button onClick={addItem} className="bg-green-400 py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
