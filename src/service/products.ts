'use server';

interface ProductType{
  id: number;
  is_available: boolean;
  title: string;
  images: [
    {
      image: string;
      image_id: number;
    }
  ],
  product: number;
  attribute_value: [ number ];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
}

export const getSingleProduct = async (id:string): Promise<ProductType> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/${id}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};