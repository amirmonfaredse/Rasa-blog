import { actionCreateTag } from "@/app/_data/blog/blogActions";
import { serviceGetTags } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteTagButton from "./DeleteTagButton";

export default async function Page() {
  const tags = await serviceGetTags();
  return (
    <div className="w-full flex gap-10">
      <form action={actionCreateTag} className="py-5 px-2 flex flex-col gap-2">
        <h2 className="text-xl text-gray-50 mb-5">ایجاد برچسب</h2>
        <label className="text-gray-50">عنوان تگ : </label>
        <input
          name="tagTitle"
          className="w-[400px]  bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
          type="text"
        />
        <label className="text-gray-50">نام یکتا : </label>

        <input
          name="tagSlug"
          className="w-[400px] bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
          type="text"
        />
        <button className="bg-gray-200 w-[100px] mt-5 p-2 rounded">
          اضافه کن
        </button>
      </form>
      <div className="w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-xl text-gray-50 mb-4">همه برچسب ها </h2>
        {tags.map((tag, index) => (
          <div
            className="w-[500px] h-[30px] bg-gray-200 rounded-sm flex items-center justify-between px-2 "
            key={`${index}-${tag.id}`}
          >
            <p className="bg-gray-800 text-gray-300 p-1 text-sm rounded-full">
              {index + 1}
            </p>
            <h4 className="flex justify-start text-gray-800">{tag.title}</h4>
            <div>
              {/* <Link
                href={`/dashboard/blogs/tags/${tag.id}`}
                className="text-xs mx-2 "
              >
                ویرایش
              </Link> */}
              <DeleteTagButton slug={tag.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
