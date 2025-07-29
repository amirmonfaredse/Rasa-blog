import { useTags } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import React, { useEffect } from "react";
import FilterTagList from "./FilterTagList";
import SelectedTagList from "./SelectedTagList";

export default function TagInputUpdate() {
  const { tags } = useTags();

  const { allTags, selectedTags, searchTerm } =
    useAdminStore.use.tagInputManager();

  const onLoadTags = useAdminStore.use.onLoadAllTags();
  const onSearch = useAdminStore.use.onSearchField();
  const onToggleSuggest = useAdminStore.use.onToggleSuggestion();

  useEffect(() => {
    if (tags && allTags !== tags) onLoadTags(tags);
  }, [tags, allTags, onLoadTags]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <label className="w-[95%] flex flex-col gap-3 mt-5">
        <div className="flex gap-4 ">
          <h2 className=" text-ghost-900">برچسب ها :</h2>
        </div>
        <input
          hidden
          readOnly
          value={JSON.stringify(selectedTags)}
          name="blogTags"
          type="text"
        />
        <input
          onChange={onSearch}
          onKeyDown={handleEnter}
          value={searchTerm}
          onFocus={() => onToggleSuggest(true)}
          type="text"
          className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2 "
        />
      </label>
      {tags && <FilterTagList />}
      <SelectedTagList />
    </>
  );
}
