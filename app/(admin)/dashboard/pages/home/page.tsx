"use client";
import { useSliders } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import Accordion from "./_components/Accordion";
import DeleteSlideButton from "./_components/DeleteSlideButton";
import SliderForm from "./_components/SliderForm";
import { Mode } from "@/types/app/store/types";

export default function Page() {
  const { sliders } = useSliders();
  const onFormMode = useAdminStore.use.onSliderFormMode();
  const onSlideFields = useAdminStore.use.onSliderFields();
  const setSlideId = useAdminStore.use.setSliderId();
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start lg:px-5 py-5 ">
      <div className="w-[90%] flex items-start justify-start gap-4">
        <Accordion title="مدیریت اسلاید شو">
          <div className="h-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 mx-2  ">
            <div className="w-full flex items-start justify-start border-4 border-avocado-100 rounded-lg my-5 p-5">
              <SliderForm />
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start gap-2 my-5">
              {sliders && sliders?.length > 0 ? (
                sliders.map((slide, index) => (
                  <div
                    key={`${index}-${slide.id}`}
                    className="flex w-full items-center justify-start border-2 border-avocado-600 p-2 rounded-lg"
                  >
                    <div className="w-5/6 flex gap-2">
                      <div className="bg-avocado-600 px-1 rounded-md text-white cursor-default">
                        {index + 1}
                      </div>
                      <div className="text-avocado-900 line-clamp-1 ">
                        {slide.title}
                      </div>
                    </div>
                    <div className="w-1/6 flex justify-end gap-2">
                      <button
                        onClick={() => {
                          onFormMode(Mode.Put);
                          onSlideFields(slide);
                          setSlideId(slide.id);
                        }}
                        className="text-xs mx-2 "
                      >
                        ویرایش
                      </button>
                      <DeleteSlideButton id={slide.id} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-avocado-900">اسلایدی وجود ندارد</div>
              )}
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
