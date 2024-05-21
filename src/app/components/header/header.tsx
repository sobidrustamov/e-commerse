import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { InputDemo } from "./components-header/input";
import SidebarMobile from "./components-header/sidebar-menu";
import dynamic from "next/dynamic";
import { ModeToggle } from "./components-header/dark-mode-button";
import UserIcon from "./components-header/user-icon";
const CartCount = dynamic(() => import("./components-header/cart-count"), {
  ssr: false,
});
const LikeCounter = dynamic(() => import("./components-header/like-counter"), {
  ssr: false,
});

export const Header = async () => {
  return (
    <div>
      <div className="container text-center border-b-2 hidden py-5 lg:flex lg:items-center justify-between ">
        <p className="text-sm">Welcome to Worldwide Electronics Store</p>
        <ul className="flex gap-5 ">
          <li>
            <Link
              href="#"
              className="hover:text-regal-blue hover:border-b-2 hover:border-b-regal-blue font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-regal-blue hover:border-b-2 hover:border-b-regal-blue font-medium"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-regal-blue hover:border-b-2 hover:border-b-regal-blue font-medium"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="hover:text-regal-blue hover:border-b-2 hover:border-b-regal-blue font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="container  flex justify-between items-center border-b-2 py-5 sm:px-[30px] px-[15px] sm:py-6">
        <div>
          <Link href="/" className="text-[36px] font-[900] uppercase">
            Amera
          </Link>
        </div>
        <div className="hidden xl:flex items-center gap-2">
          <SlEarphonesAlt className="w-[40px] h-[40px]" />
          <div>
            <p>Hotline Free:</p>
            <h3 className="font-semibold">06-900-6789-00</h3>
          </div>
        </div>
        <form className="hidden w-[45%] lg:flex items-center rounded-[40px] border-2 border-regal-blue overflow-hidden">
          <InputDemo />
          <label htmlFor="search" className="bg-regal-blue py-3 px-5">
            Search
          </label>
        </form>
        <div className="gap-8 fixed right-0 bottom-0 bg-white flex lg:static dark:bg-black">
          <Link href="/profile">
            <UserIcon />
          </Link>
          <Link href="/liked">
            <div className="flex items-start gap-1">
              <FaRegStar className="w-[30px] h-[32px]" />
              <LikeCounter />
            </div>
            <p className="text-sm">Favorites</p>
          </Link>
          <Link href="/cart">
            <div className="flex items-start gap-1">
              <BsHandbag className="w-[30px] h-[32px]" />
              <CartCount />
            </div>
            <p className="text-sm">My Cart</p>
          </Link>
          <ModeToggle />
        </div>
        <div className="lg:hidden">
          <SidebarMobile />
        </div>
      </div>
    </div>
  );
};
