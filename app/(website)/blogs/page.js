import {
  serviceGetBlogs,
  serviceGetCategories,
} from "@/app/_data/blogService/blogServices";
import FilterBlogs from "./_components/FilterBlogs";

export default async function Page() {
  const blogs = await serviceGetBlogs();
  const categories = await serviceGetCategories();

  return (
    <div className="w-full  h-full flex flex-col sm:flex-row justify-between">
      <FilterBlogs blogs={blogs} categories={categories} />
    </div>
  );
}
