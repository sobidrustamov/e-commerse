import Link from "next/link";
import React from "react";
import FooterImg from "@/images/footer.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className="bg-slate-800 text-white">
        <Link
          href="#"
          className="block text-center bg-slate-700 py-5 w-full hover:bg-slate-600"
        >
          Back to Top
        </Link>
        <div className="container grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-5">
          <ul className="text-sm flex flex-col gap-2">
            <li className="text-lg my-3">Company Info</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Business With us</li>
            <li>Find a Store</li>
            <li>Press & Talent</li>
          </ul>
          <ul className="text-sm flex flex-col gap-2">
            <li className="text-lg my-3">Company Info</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Business With us</li>
            <li>Find a Store</li>
            <li>Press & Talent</li>
          </ul>
          <ul className="text-sm flex flex-col gap-2">
            <li className="text-lg my-3">Company Info</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Business With us</li>
            <li>Find a Store</li>
            <li>Press & Talent</li>
          </ul>
          <ul className="text-sm flex flex-col gap-2">
            <li className="text-lg my-3">Company Info</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Business With us</li>
            <li>Find a Store</li>
            <li>Press & Talent</li>
          </ul>
        </div>
        <div className="h-[80px] border-t border-t-slate-500"></div>
      </div>
      <div className="bg-slate-900">
        <div className="container py-5 grid xl:grid-cols-3 gap-4 place-items-center sm:grid-cols-1 text-slate-200">
          <p>Copyright © 2019 amera Theme by Lionthemes88</p>
          <ul className="flex gap-3">
            <li>
              <Link href="#">Site Map</Link>
            </li>
            <li>
              <Link href="#">Search Terms</Link>
            </li>
            <li>
              <Link href="#">Advanced Search</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
          <div>
            <Link href="#">
              <Image src={FooterImg} alt="logo" priority />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
