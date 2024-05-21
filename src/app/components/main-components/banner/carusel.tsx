'use client'
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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
    next: string | null;
    previous: string | null;
    results: [
      {
        id: number;
        created_at: string;
        updated_at: string;
        image: string;
        title: string;
        description: string;
      }
    ];
  };
}

export const CarouselPlugin: React.FC<Props> = ({ data }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel 
      plugins={[plugin.current]}
      className="w-full h-[70vh] relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.results.map((item, index) => (
          <CarouselItem key={index} >
            <Card>
              <CardContent className="flex  items-center justify-center">
                <img
                  className="w-full h-[70vh]"
                  src={item.image}
                  alt="banner img"
                />
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
