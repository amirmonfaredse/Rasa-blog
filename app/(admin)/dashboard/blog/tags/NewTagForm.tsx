import { useCreateTag } from "_data/mutate";
import SpinnerLoader from "utility/SpinnerLoader";

export default function NewTagForm() {
  const { trigger, isMutating, response } = useCreateTag();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    await trigger(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-5 px-2">
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
      <button
        disabled={isMutating}
        className="w-full bg-folly-900 text-white  mt-5 p-2 rounded"
      >
        {isMutating ? <SpinnerLoader /> : "اضافه کن"}
      </button>
    </form>
  );
}
