import { CategoryFieldsProps } from "@/types/app/data/types";
import { StateCreator } from "zustand";
import {
  catTitlePresets,
  createInitCategory,
  initCategoryManager,
} from "../initials";
import { CategorySliceType, Mode } from "../types";
import { StoreType } from "../store";

export const categorySlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  CategorySliceType
> = (set) => ({
  catId: "",
  categoryManager: initCategoryManager,
  setCatId: (catId?: string | undefined) =>
    set((state) => {
      catId ? (state.catId = catId) : (state.catId = "");
    }),
  onCatFormMode: (newMode: Mode) =>
    set((state) => {
      state.categoryManager.formMode = newMode;
      state.categoryManager.titleValues = catTitlePresets[newMode];
    }),
  onCatFields: (cat?: CategoryFieldsProps) =>
    set((state) => {
      cat
        ? (state.categoryManager.fieldsValues = cat)
        : (state.categoryManager.fieldsValues = createInitCategory());
    }),
});
