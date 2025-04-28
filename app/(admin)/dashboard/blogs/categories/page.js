import { actionCreateCategory } from "@/app/_data/blog/blogActions";
import { serviceGetCategories } from "@/app/_data/blog/blogServices";
import Link from "next/link";
import DeleteButtonCategory from "../_components/DeleteButtonCategory";

export default async function Page() {
  const categories = await serviceGetCategories();
  return (
    <div className="w-full flex gap-10">
      <form
        action={actionCreateCategory}
        className="py-5 px-2 flex flex-col gap-2"
      >
        <h2 className="text-xl text-gray-50 mb-5">ایجاد دسته بندی</h2>

        <label className="text-gray-50">عنوان دسته بندی : </label>

        <input
          name="categoryTitle"
          className="w-[400px]  bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
          type="text"
        />
        <label className="text-gray-50">مقدار قابل ذخیره دسته بندی : </label>

        <input
          name="categoryValue"
          className="w-[400px] bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
          type="text"
        />
        <button className="bg-gray-200 w-[100px] mt-5 p-2 rounded">
          اضافه کن
        </button>
      </form>
      <div className="w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-xl text-gray-50 mb-4">همه دسته بندی ها :</h2>
        {categories.map((cat, index) => (
          <div
            className="w-[500px] h-[30px] bg-gray-200 rounded-sm flex items-center justify-between px-2 "
            key={`${index}-${cat.id}`}
          >
            <p className="bg-gray-800 text-gray-300 p-1 text-sm rounded-full">
              {index + 1}
            </p>
            <h4 className="flex justify-start">{cat.title}</h4>
            <div>
              <Link
                href={`/dashboard/blogs/categories/${cat.id}`}
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
