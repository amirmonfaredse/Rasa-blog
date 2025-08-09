import { useUpsertTag } from "_data/mutate";
import { initTagFields } from "_lib/store/initials";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "_lib/store/types";
import TextInput from "_lib/validation/components/TextInput";
import { TagSchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";

export default function TagForm() {
  const tagId = useAdminStore.use.tagId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.tagManager();
  const onFormMode = useAdminStore.use.onTagFormMode();
  const onTagFields = useAdminStore.use.onTagFields();
  const setTagId = useAdminStore.use.setTagId();
  const { trigger, response, isMutating } = useUpsertTag(tagId);
  const tagFields = useAdminStore.use.initTagFields();
  const setInitFields = useAdminStore.use.setInitTagFields();
  useEffect(() => {
    if (fieldsValues?.slug) {
      setInitFields({
        id: fieldsValues.id,
        tagTitle: fieldsValues.title,
        tagSlug: fieldsValues.slug,
      });
    }
  }, [fieldsValues.id, fieldsValues.slug, fieldsValues.title, setInitFields]);

  const handleSubmit = async (values, actions) => {
    console.log(values);

    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // await trigger(formData);
    // onFormMode(Mode.Post);
    // onTagFields();
    // setTagId();
  };

  return (
    <Formik
      validationSchema={TagSchema}
      initialValues={tagFields}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
    >
      <Form
        key={fieldsValues.id}
        className="w-1/2 flex flex-col gap-2 py-5 px-2"
      >
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          {titleValues.headerTitle}
        </h2>
        <Field name="id" required readOnly hidden value={fieldsValues?.id} />
        <Field name="tagTitle" label="عنوان برچسب" component={TextInput} />
        <Field name="tagSlug" label="نام یکتا" component={TextInput} />
        <button
          disabled={isMutating}
          type="submit"
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
              setInitFields(initTagFields);
            }}
            className="w-full flex items-center justify-center  bg-cles-900 text-white p-2 rounded cursor-pointer"
          >
            لغو
          </span>
        )}
      </Form>
    </Formik>
  );
}
