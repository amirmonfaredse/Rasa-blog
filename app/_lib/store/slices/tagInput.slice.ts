import { TagFieldProps, TaggingFieldProps } from "@/types/app/data/types";
import { StateCreator } from "zustand";
import { initInputTagManager } from "../initials";
import { TagInputSliceType } from "../../../../types/app/store/types";
import { StoreType } from "../store";

export const tagInputSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  TagInputSliceType
> = (set) => ({
  tagInputManager: initInputTagManager,

  onLoadAllTags: (tags: TagFieldProps[]) =>
    set((state) => {
      if (state.tagInputManager.allTags !== tags)
        state.tagInputManager.allTags = tags;
    }),
  onSearchField: (e: React.ChangeEvent<HTMLInputElement>) =>
    set((state) => {
      state.tagInputManager.searchTerm = e.target.value;
      const selectedIds = state.tagInputManager.selectedTags.map(
        (tag) => tag.id
      );
      state.tagInputManager.filteredTags = state.tagInputManager.allTags
        .filter((tag) => tag.title.includes(e.target.value))
        .filter((tag) => !selectedIds.includes(tag.id));
    }),
  onToggleSuggestion: (visible?: boolean | undefined) =>
    set((state) => {
      visible
        ? (state.tagInputManager.isSuggestionVisible = visible)
        : (state.tagInputManager.isSuggestionVisible =
            !state.tagInputManager.isSuggestionVisible);
    }),
  onSelectTag: (selectedTag: TagFieldProps) =>
    set((state) => {
      state.tagInputManager.selectedTags.push(selectedTag);
      state.tagInputManager.searchTerm = "";
    }),
  onUnSelectTag: (unSelectedTag: TagFieldProps) =>
    set((state) => {
      state.tagInputManager.selectedTags =
        state.tagInputManager.selectedTags.filter(
          (tag) => tag.id !== unSelectedTag.id
        );
    }),
  onClearAllSelectedTags: () =>
    set((state) => {
      state.tagInputManager.selectedTags = [];
    }),
  onDefaultTagging: (tagged: TaggingFieldProps[]) =>
    set((state) => {
      const filtering = state.tagInputManager.allTags.filter((tag) =>
        tagged.some((t) => t.tagId === tag.id)
      );
      state.tagInputManager.selectedTags = filtering;
    }),
});
