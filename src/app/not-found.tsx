import Image from "next/image";
import React from "react";
import NotFound from '@/images/404.png'

const NOtFound = () => {
  return <div>
    <Image src={NotFound} alt='not found page'/>
  </div>;
};

export default NOtFound;
