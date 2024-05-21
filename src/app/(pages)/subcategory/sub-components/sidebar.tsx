import React from "react";
import { getSubcategory } from "@/service/subcategory";
import Link from "next/link";

interface Props {
  id: number;
}
const SidebarMenu: React.FC<Props> = async ({ id }) => {
  const data = await getSubcategory();

  return (
    <div>
      <ul className="flex flex-col gap-2 text-md">
        {data?.results?.map((item) => (
          <li
            key={item.id}
            className={`${id === item.id ? "text-regal-blue" : ""}`}
          >
            <Link href={`/subcategory/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
