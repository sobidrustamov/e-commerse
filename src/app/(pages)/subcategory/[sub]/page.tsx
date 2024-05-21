import React from "react";
import { NextPage } from "next";
import { getSubProducts } from "@/service/subcategory";
import dynamic from "next/dynamic";
import SidebarMenu from "../sub-components/sidebar";
import Image from "next/image";
import NoData from "@/images/no-data.jpg";
const ProductCard = dynamic(() => import("./card/product-card"), {
  ssr: false,
});

const SubCategory: NextPage<{ params: { sub: string } }> = async ({
  params,
}) => {
  const products = await getSubProducts(params.sub);
  return (
    <div className="container flex gap-2 py-4">
      <div className="w-[20%] h-[100%] sticky top-0">
        <h2 className="text-2xl font-medium pb-3 border-b-2">
          Product Categories
        </h2>
        <SidebarMenu id={Number(params.sub)} />
      </div>
      <div className='w-full'>
        {products.results.length ? (
          <div className=" grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 place-items-stretch gap-3 ">
            {products?.results.map((product) => (
              <ProductCard
                data={product}
                parent={params.sub}
                key={product.id}
              />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center'>
            <Image className='w-[50%]' src={NoData} alt="no data" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
