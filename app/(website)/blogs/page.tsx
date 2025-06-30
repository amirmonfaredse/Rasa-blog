import {
  serviceGetBlogs,
  serviceGetCategories,
  serviceGetCategorizeds,
} from "@/app/_data/blog/blogServices";
import { Suspense } from "react";
import { BlogContextProvider } from "../_providers/BlogProvider";
import BlogList from "./_components/BlogList";
import Sidebar from "./_components/Sidebar";

export const metadata = {
  title: "وبلاگ",
  description:
    "برای مشاهده آخرین پست ها  در حوزه طراحی سایت ، تکنولوژی و برنامه نویسی از این صفحه بازدید کنید",
};

export default async function Page() {
  const blogs = await serviceGetBlogs();
  const categories = await serviceGetCategories();
  const categorized = await serviceGetCategorizeds();

  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-between">
      <BlogContextProvider>
        <Suspense>
          <Sidebar categories={categories} categorized={categorized} />
          <BlogList blogs={blogs} />
        </Suspense>
      </BlogContextProvider>
    </div>
  );
}
