import { serviceGetBlogs } from "@/app/_data/blogService/blogServices";
import Link from "next/link";

export default async function Page() {
  const blogs = await serviceGetBlogs();
  return (
    <div className=" w-full p-5">
      <div className="my-4">
        <Link
          className="text-gray-100 border px-2 py-1 mt-2 rounded-lg"
          href="/dashboard/blogs/new"
        >
          پست جدید
        </Link>
      </div>

      <table className="w-full">
        <thead className="w-full">
          <tr className="w-fit min-h-[40px] flex items-center gap-5 justify-start cursor-pointer bg-gray-500 text-gray-100 my-5 p-2  rounded hover:bg-gray-400 transition duration-300">
            <th className="w-[250px] flex justify-start">عنوان</th>
            <th className="w-[250px] flex justify-start">نویسنده</th>
            <th className="w-[250px] flex justify-start">تاریخ انتشار</th>
          </tr>
        </thead>
        {blogs &&
          blogs.map((blog, index) => (
            <tbody key={blog.id}>
              <tr className="w-fit min-h-[40px] flex items-center gap-5 justify-start cursor-pointer bg-gray-100 text-gray-600 my-5 p-2  rounded hover:bg-gray-400 transition duration-300">
                <td className="w-[30px] h-[25px] flex justify-center items-center bg-gray-600 text-gray-100  rounded-xl ">
                  {index + 1}
                </td>
                <td className="w-[250px] flex ">{blog.title}</td>
                <td className="w-[250px] flex flex-col ">{blog.author}</td>
                <td className="w-[250px] flex flex-col "></td>
                <td className="w-[250px] flex justify-evenly gap-2 ">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-xs  text-green-600"
                  >
                    مشاهده
                  </Link>
                  <Link
                    href={`/dashboard/blogs/${blog.id}`}
                    className="text-xs  text-green-600"
                  >
                    ویرایش
                  </Link>
                  <Link
                    href="/dashboard/blogs/edit"
                    className="text-xs  text-red-600"
                  >
                    حذف
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
