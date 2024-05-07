import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Icon1 from "@/images/icon1.png";
import Icon2 from "@/images/icon2.png";
import Icon3 from "@/images/icon3.png";
import Icon4 from "@/images/icon4.png";
import Icon5 from "@/images/icon5.png";

interface Props {
  img: StaticImageData;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ img, title, description }) => {
  return (
    <div className="flex  items-center p-4 gap-2">
      <Image src={img} alt="Icon 1" />
      <div className="text-[13px]">
        <h3 className="uppercase font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 justify-between bg-white lg:py-[30px] lg:px-[10px]">
      <Card
        img={Icon1}
        title="Free delivery"
        description="For all oders over $120"
      />
      <Card
        img={Icon2}
        title="Free delivery"
        description="For all oders over $120"
      />
      <Card
        img={Icon3}
        title="Free delivery"
        description="For all oders over $120"
      />
      <Card
        img={Icon4}
        title="Free delivery"
        description="For all oders over $120"
      />
      <Card
        img={Icon5}
        title="Free delivery"
        description="For all oders over $120"
      />
    </div>
  );
};

export default OurServices;
