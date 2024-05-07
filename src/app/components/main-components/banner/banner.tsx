import { getBanner } from '@/service/banner';
import React from 'react'
import { CarouselPlugin } from './carusel';

export const Banner = async () => {
      const data = await getBanner();

  return (
    <div>
      <CarouselPlugin data={data}/>
    </div>
  )
}
