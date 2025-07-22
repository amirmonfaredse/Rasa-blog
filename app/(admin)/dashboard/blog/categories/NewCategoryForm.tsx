import { useCreateCategory } from "_data/mutate";
import React from "react";
import SpinnerLoader from "utility/SpinnerLoader";

export default function NewCategoryForm() {
  const { trigger, response, isMutating } = useCreateCategory();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="py-5 px-2 flex flex-col gap-2">
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
      <button
        disabled={isMutating}
        className="w-full bg-folly-900 text-white  mt-5 p-2 rounded"
      >
        {isMutating ? <SpinnerLoader /> : "اضافه کن"}
      </button>
    </form>
  );
}
