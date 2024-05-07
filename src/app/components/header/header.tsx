"use client";
import React from "react";
import Logo from "@/images/logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { SlLayers } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { InputDemo } from "./input";
import { SelectDemo } from "./select";
import { ModeToggle } from "./dark-mode-button";

export const Header = () => {
  return (
    <div>
      <div className="container text-center border-b-2 hidden sm:flex sm:flex-col md:flex-row md:items-center justify-between ">
        <p className="text-sm">Welcome to Worldwide Electronics Store</p>
        <ul className="flex items-center justify-center py-3">
          <li className="lg:px-5 pr-5 lg:border-e-2">
            <Link href="#" />
            My account
          </li>
          <li className="lg:px-5 pr-5 lg:border-e-2 cursor-pointer hover:underline">
            <Link href="#" className="" />
            Checkout
          </li>
          <li className="lg:px-5 pr-5 lg:border-e-2">
            <Link href="#" />
            Shop
          </li>
          <li className="lg:ps-5">
            <Link href="#" />
            Wishlist
          </li>
        </ul>
      </div>
      <div className="container flex justify-between items-center border-b-2 py-5 sm:px-[30px] px-[15px] sm:py-6">
        <div>
          <Link href="#">
            <Image src={Logo} alt="logo" priority />
          </Link>
        </div>
        <div className="hidden xl:flex items-center gap-2">
          <SlEarphonesAlt className="w-[40px] h-[40px]" />
          <div>
            <p>Hotline Free:</p>
            <h3 className="font-semibold">06-900-6789-00</h3>
          </div>
        </div>
        <form className="hidden w-[45%] lg:flex items-center rounded-[40px] border-2 border-yellow-400 overflow-hidden">
          {/* <SelectDemo /> */}
          <InputDemo />
          <label htmlFor="search" className="bg-yellow-400 py-3 px-5">
            Search
          </label>
        </form>
        <div className="gap-8 hidden lg:flex">
          <button>
            <div className="flex items-start gap-1">
              <SlLayers className="w-[30px] h-[32px]" />
              <Badge variant="secondary" className="">
                0
              </Badge>
            </div>
            <p className="text-sm">Compare</p>
          </button>
          <Link href="#">
            <div className="flex items-start gap-1">
              <FaRegStar className="w-[30px] h-[32px]" />
              <Badge variant="secondary" className="">
                0
              </Badge>
            </div>
            <p className="text-sm">Favorites</p>
          </Link>
          <button>
            <div className="flex items-start gap-1">
              <BsHandbag className="w-[30px] h-[32px]" />
              <Badge className="bg-yellow-400">0</Badge>
            </div>
            <p className="text-sm">My Cart</p>
          </button>
        </div>
        <div className="lg:hidden">
          <FaBars className="w-[17.15px] h-[20px] text-[#777] " />
        </div>
      </div>
      <div className="container hidden lg:flex justify-between items-center border-b-2 sm:shadow-md  sm:px-[30px] px-[15px] sm:py-3">
        <div>
          <ul className="flex gap-5">
            <li className="flex items-center gap-1">
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Home
              </Link>
              {/* <FaChevronDown size={10} /> */}
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 font-medium">
                Page
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <SelectDemo />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
