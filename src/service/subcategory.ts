"use server";
interface SubCategoryData {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    image: string;
    parent: {
      id: number;
      title: string;
    };
    title: string;
  }[];
}

interface SubProducts {
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
}

export const getSubcategory = async (): Promise<SubCategoryData> => {
  try {
    const res = await fetch("http://135.181.108.207/api/subcategory/", {
      next: { revalidate: 1 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
export const getSubProducts = async (id:string): Promise<SubProducts> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/?product__category=${id}`, {
      next: { revalidate: 1 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
