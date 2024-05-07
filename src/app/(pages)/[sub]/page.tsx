import Link from "next/link";
import React from "react";
import { NextPage } from "next";

const SubCategory: NextPage<{ params: { sub: string } }> = ({ params }) => {
  console.log(params.sub);
  return (
    <div>
      <Link href={`/${params.sub}/${44}`}>123</Link>
    </div>
  );
};

export default SubCategory;
