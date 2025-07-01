import { SliderItemProps } from "@/types/app/admin/types";
import RemoveSlide from "./RemoveSlide";

export default function SliderItem({ index, slide }: SliderItemProps) {
  return (
    <div className="flex w-full items-center justify-start border-2 border-avocado-600 p-2 rounded-lg">
      <div className="w-5/6 flex gap-2">
        <div className="bg-avocado-600 px-1 rounded-md text-white cursor-default">
          {index + 1}
        </div>
        <div className="text-avocado-900 line-clamp-1 ">{slide.title}</div>
      </div>
      <div className="w-1/6 flex justify-end gap-2">
        <RemoveSlide id={slide.id} />
      </div>
    </div>
  );
}
