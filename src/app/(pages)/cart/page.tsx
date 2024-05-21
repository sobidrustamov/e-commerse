"use client";
import dynamic from "next/dynamic";
import BreadcrumbMenu from './components/breadcrumb'
const CartTable = dynamic(()=>import("@/app/(pages)/cart/components/table"),{ssr:false})

const Cart = () => {


  return (
    <div>
      <div className='cart-box min-h-[60vh] flex flex-col items-center justify-center'>
       <h2 className='text-[4rem] text-white font-medium'>My Cart</h2>
       <BreadcrumbMenu children='Cart'/>
      </div>
      <div className="container py-8">
        <CartTable/>
      </div>
    </div>
  );
};

export default Cart;
