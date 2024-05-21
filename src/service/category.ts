"use server";
interface CategoryData {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      title: string;
      image: string;
      children: [
        {
          id: number;
          title: string;
          image: string;
        }
      ];
    }
  ];
}

export const getCategory = async (): Promise<CategoryData> => {
  try {
    const res = await fetch("http://135.181.108.207/category/", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
