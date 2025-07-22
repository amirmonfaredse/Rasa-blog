import { useCategory } from "_data/fetchers";
import { useUpdateCategory } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SpinnerLoader from "utility/SpinnerLoader";

export default function EditCategoryForm() {
  const query = useSearchParams();
  const catId = query.get("catId");
  const onFormMode = useAdminStore.use.onCategoryForm();

  const { category } = useCategory(catId);
  const { trigger, response, isMutating } = useUpdateCategory(catId);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
  };
  useEffect(() => {
    if (!isMutating && response) onFormMode();
  }, [response, isMutating, onFormMode]);
  return (
    <form onSubmit={handleSubmit} className="py-5 px-2 flex flex-col gap-2">
      <input
        name="id"
        defaultValue={category?.id}
        type="text"
        hidden
        readOnly
      />
      <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
        ویرایش دسته بندی
      </h2>

      <label className="text-folly-900">عنوان دسته بندی : </label>

      <input
        name="categoryTitle"
        defaultValue={category?.title}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <label className="text-folly-900">مقدار یکتا : </label>
      <input
        name="categoryValue"
        defaultValue={category?.name}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <button
        disabled={isMutating}
        className="w-full bg-folly-900 text-white  mt-5 p-2 rounded"
      >
        {isMutating ? <SpinnerLoader /> : "ویرایش"}
      </button>
    </form>
  );
}
