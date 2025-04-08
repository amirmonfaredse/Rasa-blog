import { actionUpdateCategory } from "@/app/_data/blogService/blogActions";
import { serviceGetCategory } from "@/app/_data/blogService/blogServices";
import Link from "next/link";

export default async function Page({ params }) {
  const { catId } = await params;
  const category = await serviceGetCategory(catId);

  return (
    <form action={actionUpdateCategory} className="flex flex-col py-5  gap-3">
      <label className="text-gray-50">عنوان دسته بندی : </label>
      <input
        name="id"
        defaultValue={category.id}
        hidden
        className="w-[400px]  bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
        type="number"
      />
      <input
        name="categoryTitle"
        defaultValue={category.title}
        className="w-[400px]  bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
        type="text"
      />
      <label className="text-gray-50">مقدار قابل ذخیره دسته بندی : </label>

      <input
        name="categoryValue"
        defaultValue={category.name}
        className="w-[400px] bg-gray-600 text-gray-100 h-9 rounded-sm p-2"
        type="text"
      />
      <button className="bg-gray-200 w-[100px] mt-5 p-2 rounded">ویرایش</button>
      <Link className="bg-red-500 text-gray-100 w-[100px] p-2 rounded text-center " href="/dashboard/blogs/categories">
        بازگشت
      </Link>
    </form>
  );
}
