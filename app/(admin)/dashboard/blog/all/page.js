import { serviceGetBlogs } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteButtonBlog from "../_components/DeleteButtonBlog";

export default async function Page() {
  const blogs = await serviceGetBlogs();
  return (
    <div className=" w-full p-5">
      <div className="my-4">
        <Link
          className="bg-gray-50 text-gray-800  px-5 py-1 mt-2 rounded-lg hover:bg-gray-400 transition duration-300"
          href="/dashboard/blogs/new"
        >
          پست جدید
        </Link>
      </div>
      <table className="w-full flex flex-col items-start justify-center">
        <thead className="w-full">
          <tr className="w-full min-h-[40px] flex items-center gap-5 justify-start cursor-default bg-gray-500 text-gray-100 my-5 p-2 rounded">
            <th className="w-[5%] flex justify-start">شماره</th>
            <th className="w-[30%] flex justify-center">عنوان</th>
            <th className="w-[20%] flex justify-center">نویسنده</th>
            <th className="w-[20%] flex justify-center">تاریخ انتشار</th>
            <th className="w-[20%] flex justify-center">عملیات</th>
          </tr>
        </thead>
        {blogs &&
          blogs.map((blog, index) => (
            <tbody key={blog.id} className="w-full">
              <tr className="w-full h-[40px] flex items-center gap-5 justify-start cursor-default bg-gray-100 text-gray-600 my-5 p-2  rounded hover:bg-gray-400 transition duration-300">
                <td className="w-[5%] h-[25px] flex justify-center items-center bg-gray-600 text-gray-100  rounded-xl ">
                  {index + 1}
                </td>
                <td className="w-[30%] h-[30px] flex">
                  <div className="w-fit h-[30px]  line-clamp-1 leading-7 text-sm">
                    {blog.title}
                  </div>
                </td>
                <td className="w-[20%] flex justify-center text-sm">{blog.author}</td>
                <td className="w-[20%] flex justify-center text-sm "></td>
                <td className="w-[20%] flex justify-evenly ">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-xs text-green-600 hover:bg-gray-50 p-2 rounded-lg"
                  >
                    مشاهده
                  </Link>
                  <Link
                    href={`/dashboard/blog/${blog.id}`}
                    className="text-xs text-green-600 hover:bg-gray-50 p-2 rounded-lg"
                  >
                    ویرایش
                  </Link>
                  <DeleteButtonBlog blogId={blog.id} />
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
