import { serviceGetBlogs } from "@/app/_data/blog/blogServices";
import { htmlToText } from "html-to-text";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const blogs = await serviceGetBlogs();

  const filteredBlogs = blogs.filter((blog) => {
    const blogTags = JSON.parse(blog.tags);
    return blogTags.some((blogTag) => blogTag.slug === slug);
  });

  return (
    <div className="">
      <h1 className="w-full h-[100px] flex items-center text-2xl">
        لیست بلاگ های مربوط به {slug}
      </h1>
      <div className="flex flex-col my-2">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div
              key={`${index}-${blog.id}`}
              className="h-fit shadow-2xl mb-8 border-gray-100 rounded-xl overflow-hidden"
            >
              {blog.image.length > 0 && (
                <div className="w-full h-[400px] relative">
                  <Image
                    className="object-cover"
                    src={blog.image}
                    fill
                    alt={blog.title}
                  />
                </div>
              )}
              <div className="h-fit sm:h-[50px]flex flex-col items-start justify-start sm:mx-6 mt-2 sm:mt-4 ">
                <h1 className="text-2xl p-4">{blog.title}</h1>
              </div>

              <div className="mx-3 my-3">
                <div className="h-[200px] w-fit line-clamp-5  mx-5 text-sm leading-10 text-gray-300 text-justify">
                  {/* CONTENT  */}
                  {htmlToText(blog.content)}
                </div>
                <div className="flex justify-between mt-5 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:items-center ">
                    <span className="text-xs mx-2 text-gray-400">توسط : </span>
                    <span className="text-xs text-gray-400">{blog.author}</span>
                  </div>
                  <Link
                    prefetch={true}
                    href={`/blogs/${blog.id}`}
                    className="w-[130px] h-[40px] flex items-center justify-center rounded-lg text-sm bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors duration-300 "
                  >
                    ادامه مطلب
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>پستی با این تگ وجود ندارد</div>
        )}
      </div>
    </div>
  );
}
