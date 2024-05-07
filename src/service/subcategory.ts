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
