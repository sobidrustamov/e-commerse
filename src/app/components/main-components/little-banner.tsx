import Image from "next/image";
import React from "react";
import Banner1 from "@/images/banner1.jpg";
import Banner2 from "@/images/banner2.jpg";
import Banner3 from "@/images/banner3.jpg";

export const LittleBanner = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  justify-items-center gap-5">
      <Image src={Banner1} alt="little banner img" />
      <Image src={Banner2} alt="little banner img" />
      <Image src={Banner3} alt="little banner img" />
    </div>
  );
};
