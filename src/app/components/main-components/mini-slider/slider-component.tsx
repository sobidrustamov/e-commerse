import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  data: {
    count: number;
    next: null | string;
    previous: null | string;
    results: {
      id: number;
      is_available: boolean;
      title: string;
      images: {
        image: string;
      }[];
      product: number;
      attribute_value: [];
      other_detail: string;
      price: string;
      price_with_discount: null;
      quantity: number;
    }[];
  };
}

export const CarouselSize: React.FC<Props> = ({ data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data?.results?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-around p-6">
                  <img
                    src={item.images[0].image}
                    alt="product image"
                    className="h-[200px]"
                  />
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
};
