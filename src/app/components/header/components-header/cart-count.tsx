"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


const CartCount = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  return (
  <Badge className="bg-regal-blue w-[25px] h-[25px] flex items-center justify-center">{products.length}</Badge>
  );
};

export default CartCount;
