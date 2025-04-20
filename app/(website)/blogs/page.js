import {
  serviceGetBlogs,
  serviceGetCategories,
} from "@/app/_data/blog/blogServices";
import { Suspense } from "react";
import FilterBlogs from "./_components/FilterBlogs";
export const metadata = {
  title: "وبلاگ",
  description:
    "برای مشاهده آخرین پست ها  در حوزه طراحی سایت ، تکنولوژی و برنامه نویسی از این صفحه بازدید کنید",
};
export default async function Page() {
  const blogs = await serviceGetBlogs();
  const categories = await serviceGetCategories();

  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-between">
      <Suspense>
        <FilterBlogs blogs={blogs} categories={categories} />
      </Suspense>
    </div>
  );
}
