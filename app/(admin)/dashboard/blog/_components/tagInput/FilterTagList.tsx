import { useAdminStore } from "_lib/store/store";

export default function FilterTagList() {
  const { filteredTags, isSuggestionVisible } =
    useAdminStore.use.tagInputManager();
  const onSelectTag = useAdminStore.use.onSelectTag();

  return (
    <div className="w-full min-h-[80px] h-auto flex flex-wrap gap-1 overflow-auto no-scrollbar p-1">
      {isSuggestionVisible &&
        filteredTags &&
        filteredTags.map((tag, index) => (
          <div
            className="w-fit h-[35px] flex items-center bg-cles-500 px-2 cursor-pointer rounded-full"
            key={`${tag.id}-${index}`}
            onClick={() => {
              onSelectTag(tag);
            }}
          >
            <div className=" text-white rounded-full pl-2">{index + 1}-</div>
            <div className="text-white text-sm">{tag.title}</div>
          </div>
        ))}
    </div>
  );
}
