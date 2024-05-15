'use server'
interface BannerData {
  count: number,
  next: string|null,
  previous: string|null,
  results: [
    {
      id: number,
      created_at: string,
      updated_at: string,
      image: string,
      title: string,
      description: string,
    }],
  };

export const getBanner = async (): Promise<BannerData> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/",{      
      next: { revalidate: 60 },
});
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
