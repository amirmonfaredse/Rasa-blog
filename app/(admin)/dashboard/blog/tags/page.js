import { actionCreateTag } from "@/app/_data/blog/blogActions";
import { serviceGetTags } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteTagButton from "./DeleteTagButton";

export default async function Page() {
  const tags = await serviceGetTags();
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <form action={actionCreateTag} className="flex flex-col gap-2 py-5 px-2">
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          ایجاد برچسب
        </h2>
        <label className="text-folly-900">عنوان تگ : </label>
        <input
          name="tagTitle"
          className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          type="text"
        />
        <label className="text-folly-900">نام یکتا : </label>

        <input
          name="tagSlug"
          className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          type="text"
        />
        <button className="w-full bg-folly-900 text-white  mt-5 p-2 rounded">
          اضافه کن
        </button>
      </form>
      <div className="w-full lg:w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          همه برچسب ها{" "}
        </h2>
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <div
              className="w-full h-[35px] flex items-center justify-between border-2 border-folly-200 rounded-sm  px-2"
              key={`${index}-${tag.id}`}
            >
              <p className="text-ghost-900 p-1 text-sm rounded-full">
                {index + 1}
              </p>
              <h4 className="flex justify-start text-ghost-900">{tag.title}</h4>
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
          ))
        ) : (
          <div className="text-ghost-900 text-sm">تگی یافت نشد ...</div>
        )}
      </div>
    </div>
  );
}
