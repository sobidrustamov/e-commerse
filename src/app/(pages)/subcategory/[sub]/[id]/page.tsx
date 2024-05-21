import React from "react";
import { NextPage } from "next";
import { getSingleProduct } from "@/service/products";
import Image from "next/image";
import dynamic from "next/dynamic";
const Buttons=dynamic(()=>import("./buttons"), {
  ssr: false,
});

const SingleProduct: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getSingleProduct(params.id);

  return (
    <div className="container flex flex-col md:flex-row md:items-start items-center">
      <div className="md:w-[50%] flex flex-col items-center gap-5 py-5">
        {data.images.map((item) => (
          <Image
            key={item.image_id}
            width="600"
            height="400"
            src={item.image}
            alt="product img"
          />
        ))}
      </div>
      <div className="md:w-[50%] sticky top-0 p-10 flex flex-col items-start gap-3">
        <h2 className="uppercase text-4xl font-medium">{data.title}</h2>
        <p className="font-bold text-2xl">${data.price}</p>
        <span className="font-bold text-2xl">Description:</span>{" "}
        <p className="text-xl">{data.other_detail}</p>
        <Buttons data={data} />
      </div>
    </div>
  );
};

export default SingleProduct;
