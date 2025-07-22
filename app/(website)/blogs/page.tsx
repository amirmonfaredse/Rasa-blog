import { Suspense } from "react";
import { BlogContextProvider } from "../_providers/BlogProvider";
import BlogList from "./_components/BlogList";
import Sidebar from "./_components/Sidebar";
import { getBlogs } from "_data/services/blogs.services";
import {
  getCategories,
  getCategorizedList,
} from "_data/services/categories.services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وبلاگ",
  description:
    "برای مشاهده آخرین پست ها  در حوزه طراحی سایت ، تکنولوژی و برنامه نویسی از این صفحه بازدید کنید",
};

export default async function Page() {
  const blogs = await getBlogs();
  const categories = await getCategories();
  const categorized = await getCategorizedList();

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
