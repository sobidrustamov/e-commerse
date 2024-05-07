import Link from 'next/link';
import React from 'react';

interface Props {
  data: {
    id: number;
    image: string;
    parent: {
      id: number;
      title: string;
    };
    title: string;
  };
}

export const CategoryCard:React.FC<Props> = ({data}) => {
  return (
    <div className='flex justify-between items-center border bg-white p-3'>
      <Link href='#'>{data.title}</Link>
      <p>{}</p>
      <img width={100} src={data.image} alt={data.title} />
      </div>
  )
}
