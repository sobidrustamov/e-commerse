import React from "react";
import { CategoryCard } from "./category-card";
import { getSubcategory } from "@/service/subcategory";

export const TopCategories: React.FC = async () => {
  const subcategory = await getSubcategory();

  return (
    <div className="">
      <h2 className="text-2xl py-3">
        <span className="font-bold">Top Categories</span> Of The Month
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1py-5">
        {subcategory?.results?.slice(0,10).map((item) => {
          return <CategoryCard data={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};
