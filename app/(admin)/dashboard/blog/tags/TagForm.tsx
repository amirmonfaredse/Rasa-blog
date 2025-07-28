import { useUpsertTag } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "_lib/store/types";

export default function TagForm() {
  const tagId = useAdminStore.use.tagId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.tagManager();
  const onFormMode = useAdminStore.use.onTagFormMode();
  const onTagFields = useAdminStore.use.onTagFields();
  const setTagId = useAdminStore.use.setTagId();
  const { trigger, response, isMutating } = useUpsertTag(tagId);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
    onFormMode(Mode.Post);
    onTagFields();
    setTagId();
  };

  return (
    <form
      key={fieldsValues.id}
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 py-5 px-2"
    >
      <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
        {titleValues.headerTitle}
      </h2>
      <input
        name="id"
        readOnly
        hidden
        defaultValue={fieldsValues.id}
        type="text"
      />
      <label className="text-folly-900">عنوان تگ : </label>
      <input
        name="tagTitle"
        defaultValue={fieldsValues.title}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <label className="text-folly-900">نام یکتا : </label>
      <input
        name="tagSlug"
        defaultValue={fieldsValues.slug}
        className="w-full lg:w-[400px] border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        type="text"
      />
      <button
        disabled={isMutating}
        className="w-full bg-folly-900 text-white  mt-5 p-2 rounded"
      >
        {titleValues.buttonTitle}
      </button>
      {formMode === Mode.Put && (
        <span
          onClick={() => {
            onTagFields();
            setTagId();
            onFormMode(Mode.Post);
          }}
          className="w-full flex items-center justify-center  bg-cles-900 text-white p-2 rounded cursor-pointer"
        >
          لغو
        </span>
      )}
    </form>
  );
}
