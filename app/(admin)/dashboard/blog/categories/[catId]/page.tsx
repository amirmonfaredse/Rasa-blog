import { actionUpdateCategory } from "../../../../../_data/blog/blogActions";
import { serviceGetCategory } from "../../../../../_data/blog/blogServices";
import Link from "next/link";

export default async function Page({ params }) {
  const { catId } = await params;
  const category = await serviceGetCategory(catId);

  return (
    <form action={actionUpdateCategory} className="flex flex-col py-5  gap-3">
      <label className="text-folly-900">عنوان دسته بندی : </label>
      <input
        name="id"
        defaultValue={category.id}
        hidden
        className="w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="number"
      />
      <input
        name="categoryTitle"
        defaultValue={category.title}
        className="w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <label className="text-folly-900">مقدار یکتا : </label>

      <input
        name="categoryValue"
        defaultValue={category.name}
        className="w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <button className="w-full bg-folly-900 text-white  mt-5 p-2 rounded">
        ویرایش
      </button>
      <Link
        className="w-full bg-avocado-500 text-center text-white p-2 rounded"
        href="/dashboard/blog/categories"
      >
        بازگشت
      </Link>
    </form>
  );
}
