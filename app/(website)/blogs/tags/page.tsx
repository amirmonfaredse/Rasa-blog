import { getTags } from "_data/services/tags.services";
import Link from "next/link";

export default async function Page() {
  const tags = await getTags();
  if ("code" in tags) throw new Error("Error");

  return (
    <div className="w-full min-h-96 flex flex-col justify-start items-start">
      <h1 className="w-full h-[80px] text-2xl flex items-center ">
        لیست برچسب ها
      </h1>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag, index) => (
          <Link
            className="w-fit flex gap-2 bg-gray-50 text-ghost-800 text-sm px-2 py-1  shadow-lg  duration-500"
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
