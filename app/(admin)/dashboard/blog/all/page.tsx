"use client";
import { BlogFieldProps } from "@/types/app/data/types";
import { useBlogs } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { Th } from "../_components/utilities";
import TRowBlog from "./_components/TRowBlog";

export default function Page() {
  const { blogs } = useBlogs();
  const filteredBlogs = useAdminStore.use.filteredBlogs();
  const setFilteredBlogs = useAdminStore.use.setFilteredBlogs();

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs, setFilteredBlogs]);
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.includes(e.target.value))
    );
  }
  return (
    <div className="w-full flex flex-col items-start justify-start mt-5">
      <div className="w-[90%] h-10 flex justify-start items-center gap-5 ">
        <Link
          className="w-full h-full md:w-52 flex items-center justify-center bg-folly-500 text-white  px-5 py-1 rounded-lg hover:bg-ghost-400 transition duration-300"
          href="/dashboard/blog/new"
        >
          پست جدید
        </Link>
        <div className="w-full h-full flex items-center justify-start">
          <input
            className="w-full h-full border-2 border-ghost-1000 p-2 text-sm text-ghost-900"
            placeholder="جستجو ..."
            onChange={handleChange}
          />
        </div>
      </div>

      <table className="w-[95%] flex flex-col overflow-x-scroll">
        <thead className="w-full">
          <tr className="w-fit h-12 flex items-center justify-start  cursor-default bg-ghost-500 text-white my-5  px-2 rounded">
            <Th row>شماره</Th>
            <Th center>عنوان</Th>
            <Th center>نویسنده</Th>
            <Th>تاریخ انتشار</Th>
            <Th center>عملیات</Th>
          </tr>
        </thead>
        <tbody className="w-fit md:w-full flex flex-col ">
          {blogs &&
            filteredBlogs &&
            filteredBlogs.map((blog: BlogFieldProps, index: number) => (
              <TRowBlog key={blog.id} index={index} blog={blog} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
