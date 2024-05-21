import React from "react";
import { CarouselSize } from "./slider-component";
import { getSubProducts } from "@/service/subcategory";

const TopProducts: React.FC = async () => {
  const data = await getSubProducts("2181");
  return (
    <div>
      <h2 className="text-2xl font-medium">Top Products</h2>
      <CarouselSize data={data} />
    </div>
  );
};

export default TopProducts;
