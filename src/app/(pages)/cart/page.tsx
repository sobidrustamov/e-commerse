"use client";
import dynamic from "next/dynamic";
import React from "react";
const CartTable = dynamic(()=>import("@/app/(pages)/cart/components/table"),{ssr:false})

const Cart = () => {


  return (
    <div>
      <div className="container py-4">
        <CartTable/>
      </div>
    </div>
  );
};

export default Cart;
