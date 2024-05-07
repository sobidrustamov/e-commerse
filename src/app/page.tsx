import { SidebarMenu } from "./components/main-components/sidebar/sidebar-menu";
import OurServices from "./components/main-components/our-services";
import { LittleBanner } from "./components/main-components/little-banner";
import { Banner } from "./components/main-components/banner/banner";
import { TopCategories } from "./components/main-components/top-categories/top-categories";

export default function Home() {
  return (
    <main className="bg-slate-100 dark:bg-black">
      <div className="container flex h-[80vh] gap-5 justify-between px-[15px] md:p-[30px]">
        <div className="w-1/5 hidden lg:flex light:bg-white dark:bg-black p-3 rounded-lg overflow-y-scroll">
          <SidebarMenu />
        </div>
        <div className="lg:w-4/5">
          <Banner />
        </div>
      </div>
      <div className="container px-[15px] md:px-[30px]">
        <OurServices />
      </div>
      <div className="container py-[30px]">
        <LittleBanner />
      </div>
      <div className="container px-[15px] md:px-[30px]">
        <TopCategories />
      </div>
    </main>
  );
}
