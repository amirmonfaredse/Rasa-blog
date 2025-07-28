import { useUpsertSlider } from "_data/mutate";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "_lib/store/types";

export default function SliderForm() {
  const slideId = useAdminStore.use.sliderId();
  const { formMode, titleValues, fieldsValues } =
    useAdminStore.use.sliderManager();
  const onFormMode = useAdminStore.use.onSliderFormMode();
  const onSlideFields = useAdminStore.use.onSliderFields();
  const setSlideId = useAdminStore.use.setSliderId();
  const { trigger, response, isMutating } = useUpsertSlider(slideId);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
    onFormMode(Mode.Post);
    onSlideFields();
    setSlideId();
  };
  return (
    <form
      key={fieldsValues.id}
      onSubmit={handleSubmit}
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
      <input
        name="id"
        required
        hidden
        readOnly
        defaultValue={fieldsValues.id}
        type="text"
      />
      <label className="w-full flex flex-col  gap-1 text-avocado-600 text-sm">
        عنوان :
        <input
          name="titleSlide"
          defaultValue={fieldsValues.title}
          className="w-full h-11 border border-avocado-900 rounded-xl"
          type="text"
          required
        />
      </label>
      <label className="w-full flex flex-col  gap-1 text-avocado-600 text-sm">
        آدرس تصویر :
        <input
          name="imageSlide"
          defaultValue={fieldsValues.image}
          type="text"
          required
          className="w-full h-11 border border-avocado-900 rounded-xl"
        />
      </label>
      <div className="w-full flex flex-col sm:flex-row items-center gap-5">
        <label className=" flex flex-col  gap-1 text-avocado-600 text-sm">
          رنگ پس زمینه :
        </label>
        <input
          name="bgColor"
          required
          defaultValue={fieldsValues.bgColor}
          className="cursor-pointer"
          type="color"
        />
        <label className="flex flex-col  gap-1 text-avocado-600 text-sm">
          رنگ متن :
        </label>
        <input
          name="textColor"
          required
          defaultValue={fieldsValues.textColor}
          className="cursor-pointer"
          type="color"
        />
      </div>
      <div className="flex items-center gap-2 text-avocado-600">
        نوع محتوا :
        <label className="flex gap-2 text-avocado-600 text-sm shadow-sm p-2 cursor-pointer  hover:bg-avocado-300 hover:shadow-2xl hover:text-white duration-500 hover:rounded-full">
          بخوانید
          <input
            name="typeSlide"
            required
            className="w-4"
            type="radio"
            id="typeSlide"
            defaultChecked
            defaultValue={fieldsValues.type}
          />
        </label>
      </div>
      <button
        disabled={isMutating}
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
          }}
          className="w-full flex items-center justify-center  bg-cles-900 text-white p-2 rounded cursor-pointer"
        >
          لغو
        </span>
      )}
    </form>
  );
}
