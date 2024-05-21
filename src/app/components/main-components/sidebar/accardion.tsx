"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { getCategory } from "@/service/category";

interface CategoryData {
  data: {
    count: number;
    next: string;
    previous: string;
    results: [
      {
        id: number;
        title: string;
        image: string;
        children: [
          {
            id: number;
            title: string;
            image: string;
          }
        ];
      }
    ];
  };
}
export const AccardionMenu: React.FC<CategoryData> = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data?.results.map((category, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger className="text-left text-sm">
            {category.title}
          </AccordionTrigger>
          {category.children.map((item) => (
            <AccordionContent key={item.id}>
              <Link href={`/subcategory/${item.id}`}>{item.title}</Link>{" "}
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
