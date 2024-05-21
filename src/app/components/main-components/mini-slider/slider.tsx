import React from 'react'
import { CarouselSize } from './slider-component'
import { getSubProducts } from '@/service/subcategory'

const Slider:React.FC =async () => {
  const data = await getSubProducts('2176')
  return (
    <div>
      <h2 className='text-2xl font-medium'>Resent Products</h2>
      <CarouselSize data={data}/>
    </div>
    
  )
}

export default Slider
