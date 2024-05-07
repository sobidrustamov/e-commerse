import React from "react";
import { AccardionMenu } from "./accardion";
import { getCategory } from "@/service/category";

export const SidebarMenu: React.FC = async () => {
  const categories = await getCategory();

  return <AccardionMenu data={categories} />;
};
