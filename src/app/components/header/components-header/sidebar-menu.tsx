"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { InputDemo } from "./input";
import Link from "next/link";

const SidebarMobile: React.FC = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <FaBars className="w-[17.15px] h-[20px] text-[#777] " />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="w-[90%] border-2 m-4 border-yellow-400 overflow-hidden">
                <InputDemo />
              </div>
            </SheetTitle>
            <SheetDescription>
              <ul className="uppercase">
                <li className="border-t-2 text-black font-medium text-md py-2 px-4">
                  <Link href="/">Home</Link>
                </li>
                <li className="border-t-2 text-black font-medium text-md py-2 px-4">
                  <Link href="/">Shop</Link>
                </li>
                <li className="border-t-2 text-black font-medium text-md py-2 px-4">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SidebarMobile;
