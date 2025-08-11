import { useUpsertSlider } from "_data/mutate";
import { initSliderFields } from "_lib/store/initials";
import { useAdminStore } from "_lib/store/store";
import { InitSliderFields, Mode } from "@/types/app/store/types";
import ColorInput from "_lib/validation/components/ColorInput";
import TextInput from "_lib/validation/components/TextInput";
import { SliderSchema } from "_lib/validation/schema";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";

export default function SliderForm() {
  const slideId = useAdminStore.use.sliderId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.sliderManager();
  const onFormMode = useAdminStore.use.onSliderFormMode();
  const onSlideFields = useAdminStore.use.onSliderFields();
  const setSlideId = useAdminStore.use.setSliderId();

  const { trigger, response, isMutating } = useUpsertSlider(slideId);
  const sliderFields = useAdminStore.use.initSliderFields();
  const setInitFields = useAdminStore.use.setInitSliderFields();
  useEffect(() => {
    if (fieldsValues?.title) {
      setInitFields({
        id: fieldsValues.id,
        titleSlide: fieldsValues.title,
        imageSlide: fieldsValues.image,
        bgColor: fieldsValues.bgColor,
        textColor: fieldsValues.textColor,
        typeSlide: fieldsValues.type,
      });
    }
  }, [
    fieldsValues.bgColor,
    fieldsValues.id,
    fieldsValues.image,
    fieldsValues.textColor,
    fieldsValues.title,
    fieldsValues.type,
    setInitFields,
  ]);
  const handleSubmit = async (values: InitSliderFields) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    await trigger(formData);
    onFormMode(Mode.Post);
    onSlideFields();
    setSlideId();
  };

  return (
    <Formik
      validationSchema={SliderSchema}
      initialValues={sliderFields}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
    >
      <Form
        key={fieldsValues.id}
        className="w-full flex flex-col items-start justify-start gap-5"
      >
        <h1 className="text-avocado-700 text-lg flex items-center gap-2">
          {titleValues.headerTitle}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </h1>
        <Field name="id" required hidden readOnly value={fieldsValues?.id} />
        <Field name="titleSlide" label="عنوان" component={TextInput} />
        <Field name="imageSlide" label="آدرس تصویر" component={TextInput} />

        <div className="w-full flex flex-col sm:flex-row items-center gap-5">
          <ColorInput name="bgColor" required label="رنگ پس زمینه" />
          <ColorInput name="textColor" label="رنگ متن" />
        </div>
        <div className="flex items-center gap-2 text-avocado-600">
          نوع محتوا :
          <label className="flex gap-2 text-avocado-600 text-sm shadow-sm p-2 cursor-pointer  hover:bg-avocado-300 hover:shadow-2xl hover:text-white duration-500 hover:rounded-full">
            بخوانید
            <Field
              name="typeSlide"
              required
              className="w-4 cursor-pointer"
              type="radio"
              id="typeSlide"
              value={fieldsValues?.type}
            />
          </label>
        </div>
        <button
          disabled={isMutating}
          type="submit"
          className="w-full h-14 bg-avocado-800 rounded-lg text-white hover:text-avocado-900 hover:bg-avocado-100 duration-300 "
        >
          {titleValues.buttonTitle}
        </button>
        {formMode === Mode.Put && (
          <span
            onClick={() => {
              onFormMode(Mode.Post);
              onSlideFields();
              setSlideId();
              setInitFields(initSliderFields);
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
