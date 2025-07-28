import { useAdminStore } from "_lib/store/store";
import Image from "next/image";
import React from "react";

export default function SelectedTagList() {
  const { selectedTags } = useAdminStore.use.tagInputManager();
  const onUnSelectTag = useAdminStore.use.onUnSelectTag();
  const onClear = useAdminStore.use.onClearAllSelectedTags();

  return (
    <div className="w-full h-fit ">
      <h3 className="text-sm text-ghost-900 my-2">انتخاب شده ها:</h3>
      <div className="flex flex-wrap gap-2">
        {selectedTags?.map((tag, index) => (
          <div
            key={`${tag.slug}-${index}`}
            className="w-fit h-[30px] flex items-center text-white text-sm bg-ghost-900 px-2 rounded-md cursor-pointer"
          >
            {tag.title}
            <Image
              onClick={() => onUnSelectTag(tag)}
              src="/svg/close.svg"
              width={18}
              height={18}
              alt="حذف"
              className="mr-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
