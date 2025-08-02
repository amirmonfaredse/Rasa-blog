import { TagFieldProps } from "@/types/app/data/types";
import { StateCreator } from "zustand";
import { createInitTag, initTagManager, tagTitlePresets } from "../initials";
import { Mode, TagSliceType } from "../types";
import { StoreType } from "../store";

export const tagSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  TagSliceType
> = (set) => ({
  tagId: "",
  tagManager: initTagManager,
  setTagId: (tagId: string = "") =>
    set((state) => {
      state.tagId = tagId;
    }),
  onTagFormMode: (newMode: Mode) =>
    set((state) => {
      state.tagManager.formMode = newMode;
      state.tagManager.titleValues = tagTitlePresets[newMode];
    }),
  onTagFields: (tag?: TagFieldProps) =>
    set((state) => {
      tag
        ? (state.tagManager.fieldsValues = tag)
        : (state.tagManager.fieldsValues = createInitTag());
    }),
});
