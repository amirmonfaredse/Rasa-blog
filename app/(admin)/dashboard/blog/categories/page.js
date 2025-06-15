import { actionCreateCategory } from "@/app/_data/blog/blogActions";
import { serviceGetCategories } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteButtonCategory from "../_components/DeleteButtonCategory";

export default async function Page() {
  const categories = await serviceGetCategories();
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      <form
        action={actionCreateCategory}
        className="py-5 px-2 flex flex-col gap-2"
      >
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          ایجاد دسته بندی
        </h2>

        <label className="text-folly-900">عنوان دسته بندی : </label>
        <input
          name="categoryTitle"
          className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          type="text"
        />
        <label className="text-folly-900">مقدار یکتا : </label>
        <input
          name="categoryValue"
          className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          type="text"
        />
        <button className="w-full bg-folly-900 text-white  mt-5 p-2 rounded">
          اضافه کن
        </button>
      </form>
      <div className="w-full lg:w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md ">
          همه دسته بندی ها :
        </h2>
        {categories.map((cat, index) => (
          <div
            className="w-full h-[35px] flex items-center justify-between border-2 border-folly-200 rounded-sm  px-2"
            key={`${index}-${cat.id}`}
          >
            <p className="text-ghost-900 p-1 text-sm rounded-full">
              {index + 1}
            </p>
            <h4 className="flex justify-start text-ghost-900">{cat.title}</h4>
            <div>
              <Link
                href={`/dashboard/blog/categories/${cat.id}`}
                className="text-xs mx-2 "
              >
                ویرایش
              </Link>
              <DeleteButtonCategory catId={cat.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
