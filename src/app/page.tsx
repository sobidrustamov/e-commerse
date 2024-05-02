import { CarouselDemo } from "./components/main-components/carusel";
import { getBanner } from "@/service/banner";
import { SidebarMenu } from "./components/main-components/sidebar-menu";
import { getCategory } from "@/service/category";

export default async function Home() {
  const data = await getBanner();
  const categories=await getCategory()
  console.log(categories);

  return (
    <main className="bg-slate-100">
      <div className="flex h-[80vh] gap-5 justify-between px-[15px] md:p-[30px]">
        <div className="w-1/5 hidden lg:flex bg-white p-3 rounded-lg overflow-y-scroll">
          <SidebarMenu data={categories}/>
        </div>
        <div className="lg:w-4/5">
          <CarouselDemo data={data.results} />
        </div>
      </div>
    </main>
  );
}
