import { useUpsertCategory } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "_lib/store/types";

export default function CategoryForm() {
  const catId = useAdminStore.use.catId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.categoryManager();
  const onFormMode = useAdminStore.use.onCatFormMode();
  const onCatFields = useAdminStore.use.onCatFields();
  const { trigger, response, isMutating } = useUpsertCategory(catId);
  const setCatId = useAdminStore.use.setCatId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
    onFormMode(Mode.Post);
    onCatFields();
    setCatId();
  };
  return (
    <form
      onSubmit={handleSubmit}
      key={fieldsValues.id}
      className="py-5 px-2 flex flex-col gap-2"
    >
      <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
        {titleValues.headerTitle}
      </h2>
      <input
        name="id"
        hidden
        readOnly
        defaultValue={fieldsValues.id}
        type="text"
      />
      <label className="text-folly-900">عنوان دسته بندی : </label>
      <input
        name="categoryTitle"
        defaultValue={fieldsValues.title}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <label className="text-folly-900">مقدار یکتا : </label>
      <input
        name="categoryValue"
        defaultValue={fieldsValues.name}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <button
        disabled={isMutating}
        className="w-full bg-folly-900 text-white mt-5 p-2 rounded"
      >
        {titleValues.buttonTitle}
      </button>

      {formMode === Mode.Put && (
        <span
          onClick={() => {
            onFormMode(Mode.Post);
            onCatFields();
            setCatId();
          }}
          className="w-full flex items-center justify-center  bg-cles-900 text-white p-2 rounded cursor-pointer"
        >
          لغو
        </span>
      )}
    </form>
  );
}
