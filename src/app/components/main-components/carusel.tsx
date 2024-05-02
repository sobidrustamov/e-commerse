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
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export const CarouselDemo: React.FC<Props> = ({ data }) => {
  return (
    <Carousel className="w-full h-[70vh] relative">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex  items-center justify-center">
                <img
                  className="w-full h-[70vh]"
                  src={item.image}
                  alt="banner img"
                />{" "}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
};
