import { useUpsertCategory } from "_data/mutate";
import { initCatFields } from "_lib/store/initials";
import { useAdminStore } from "_lib/store/store";
import { InitCatFieldsProps, Mode } from "@/types/app/store/types";
import TextInput from "_lib/validation/components/TextInput";
import { CategorySchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";

export default function CategoryForm() {
  const catId = useAdminStore.use.catId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.categoryManager();
  const onFormMode = useAdminStore.use.onCatFormMode();
  const onCatFields = useAdminStore.use.onCatFields();
  const setCatId = useAdminStore.use.setCatId();

  const { trigger, response, isMutating } = useUpsertCategory(catId);
  const catFields = useAdminStore.use.initCatFields();
  const setInitFields = useAdminStore.use.setInitCatFields();
  useEffect(() => {
    if (fieldsValues?.name) {
      setInitFields({
        id: fieldsValues.id,
        categoryTitle: fieldsValues.title,
        categoryValue: fieldsValues.name,
      });
    }
  }, [fieldsValues.id, fieldsValues.name, fieldsValues.title, setInitFields]);

  const handleSubmit = async (values: InitCatFieldsProps) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    await trigger(formData);
    onFormMode(Mode.Post);
    onCatFields();
    setCatId();
    setInitFields(initCatFields);
  };

  return (
    <Formik
      validationSchema={CategorySchema}
      initialValues={catFields}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
    >
      <Form
        key={fieldsValues.id}
        className="w-1/2 py-5 px-2 flex flex-col gap-2"
      >
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          {titleValues.headerTitle}
        </h2>
        <Field name="id" required hidden readOnly value={fieldsValues?.id} />
        <Field
          name="categoryTitle"
          label="عنوان دسته بندی"
          component={TextInput}
        />
        <Field name="categoryValue" label="مقدار یکتا" component={TextInput} />
        <button
          disabled={isMutating}
          type="submit"
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
              setInitFields(initCatFields);
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
