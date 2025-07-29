import { useTagged } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function SelectedTagList() {
  const { blogId } = useParams<{ blogId: string }>();
  const { tagged, isLoading } = useTagged(blogId);

  const { selectedTags } = useAdminStore.use.tagInputManager();
  const onUnSelectTag = useAdminStore.use.onUnSelectTag();
  const onClear = useAdminStore.use.onClearAllSelectedTags();
  const onDefaultTagging = useAdminStore.use.onDefaultTagging();
  useEffect(() => {
    if (tagged?.length > 0 && !isLoading) onDefaultTagging(tagged);
  }, [tagged, onDefaultTagging, isLoading]);
  return (
    <div className="w-full h-fit ">
      {selectedTags.length > 0 && (
        <div className="w-full  flex justify-between ">
          <h3 className="flex text-sm text-ghost-900 my-2">انتخاب شده ها:</h3>
          <div
            onClick={onClear}
            className="flex items-center text-xs text-red-800 cursor-pointer p-2 "
          >
            حذف همه
          </div>
        </div>
      )}

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
