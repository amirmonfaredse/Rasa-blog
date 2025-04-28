import {
  serviceGetTags
} from "@/app/_data/blog/blogServices";
import Link from "next/link";

export default async function Page() {
  const tags = await serviceGetTags();
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <h1 className="w-full h-[80px] text-2xl flex items-center ">
        لیست برچسب ها
      </h1>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag, index) => (
          <Link
            className="w-fit flex gap-2 bg-gray-50 text-gray-800 px-2 py-0.5 rounded-lg hover:bg-gray-600 hover:text-gray-300 transition-colors duration-500"
            key={`${tag.slug}-${index}`}
            href={`/blogs/tags/${tag.slug}`}
          >
            <div className="flex gap-2">
              <h4>عنوان : </h4>
              <h3>{tag.title}</h3>
            </div>
            {"|"}
            <div className="flex">
              <h4>شناسه یکتا :</h4>
              <h3>{tag.slug}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
