"use client";
import { BlogFieldProps } from "@/types/app/data/types";
import { useBlogs } from "_data/fetchers";
import Link from "next/link";
import DeleteButtonBlog from "../_components/DeleteButtonBlog";
import { Td, Th } from "../_components/Table";

export default function Page() {
  const { blogs } = useBlogs();
 
  return (
    <div className="w-full flex flex-col items-start justify-start mt-5">
      <div className="w-full h-fit flex ">
        <Link
          className="w-full md:w-52  h-10 flex items-center justify-center bg-folly-500 text-white  px-5 py-1 mt-2 rounded-lg hover:bg-ghost-400 transition duration-300"
          href="/dashboard/blog/new"
        >
          پست جدید
        </Link>
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
        {blogs &&
          blogs.map((blog: BlogFieldProps, index: number) => (
            <tbody key={blog.id} className="w-fit md:w-full flex flex-col ">
              <tr className="w-fit h-12 flex items-center justify-start cursor-default bg-ghost-100 text-ghost-600 my-5 p-2  rounded">
                <Td row>{index + 1}</Td>
                <Td>{blog.title}</Td>
                <Td center>{blog.author}</Td>
                <Td center>{blog.created_at}</Td>
                <Td center>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="w-fit md: text-xs text-green-600 p-2 rounded-lg"
                  >
                    مشاهده
                  </Link>
                  <Link
                    href={`/dashboard/blog/${blog.id}`}
                    className="text-xs text-green-600 p-2 rounded-lg"
                  >
                    ویرایش
                  </Link>
                  <DeleteButtonBlog blogId={blog.id} />
                </Td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
