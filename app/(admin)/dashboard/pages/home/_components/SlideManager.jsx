import { actionCreateSlide } from "@/app/_data/pages/pagesActions";

export default function SlideManager() {
  return (
    <div className="w-full flex items-start justify-start border-4 border-avocado-100 rounded-lg my-5 p-5">
      <form
        action={actionCreateSlide}
        className="w-full flex flex-col items-start justify-start gap-5"
      >
        <h1 className="text-avocado-700 text-lg flex items-center gap-2">
          ایجاد اسلاید شو جدید
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
        <label className="w-full flex flex-col  gap-1 text-avocado-600 text-sm">
          عنوان :
          <input
            required
            className="w-full h-11 border border-avocado-900 rounded-xl"
            type="text"
            name="titleSlide"
          />
        </label>
        <label className="w-full flex flex-col  gap-1 text-avocado-600 text-sm">
          آدرس تصویر :
          <input
            required
            className="w-full h-11 border border-avocado-900 rounded-xl"
            type="text"
            name="imageSlide"
          />
        </label>
        <div className="w-full flex items-center gap-5">
          <label className=" flex flex-col  gap-1 text-avocado-600 text-sm">
            رنگ پس زمینه :
          </label>
          <input
            required
            className="cursor-pointer"
            type="color"
            name="bgColor"
          />
          <label className="flex flex-col  gap-1 text-avocado-600 text-sm">
            رنگ متن :
          </label>
          <input
            required
            className="cursor-pointer"
            type="color"
            name="textColor"
          />
        </div>
        <div className="flex items-center gap-2 text-avocado-600">
          نوع محتوا :
          <label className="flex gap-2 text-avocado-600 text-sm shadow-sm p-2 cursor-pointer  hover:bg-avocado-300 hover:shadow-2xl hover:text-white duration-500 hover:rounded-full">
            بخوانید
            <input
              required
              defaultChecked
              className="w-4"
              type="radio"
              name="typeSlide"
              id="typeSlide"
              value="reading"
            />
          </label>
        </div>
        <button className="w-full h-14 bg-avocado-800 rounded-lg text-white hover:text-avocado-900 hover:bg-avocado-100 duration-300 ">
          اضافه کردن
        </button>
      </form>
      <div></div>
    </div>
  );
}
