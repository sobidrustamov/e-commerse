import React from "react";
import { NextPage } from "next";
import { getSubProducts } from "@/service/subcategory";
import ProductCard from "./card/product-card";

const SubCategory: NextPage<{ params: { sub: string } }> = async ({
  params,
}) => {
  const products = await getSubProducts(params.sub);
  return (
    <div className="container grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-5 place-items-stretch gap-3 ">
      {products.results.map((product) => (
        
          <ProductCard data={product} parent={params.sub} key={product.id}/>
      ))}
    </div>
  );
};

export default SubCategory;
