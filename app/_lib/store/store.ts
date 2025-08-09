"use client";
import "client-only";
import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./selectors";
import { blogSlice } from "./slices/blog.slice";
import { categorySlice } from "./slices/category.slice";
import { layoutSlice } from "./slices/layout.slice";
import { notifsSlice, NotifsSliceType } from "./slices/notifs";
import { sliderSlice } from "./slices/slider.slice";
import { tagSlice } from "./slices/tag.slice";
import { tagInputSlice } from "./slices/tagInput.slice";
import { uploadSlice } from "./slices/upload.slice";
import {
  BlogSliceType,
  CategorySliceType,
  LayoutSliceType,
  SliderSliceType,
  TagInputSliceType,
  TagSliceType,
  UploadSliceType,
} from "./types";
export type StoreType = LayoutSliceType &
  CategorySliceType &
  SliderSliceType &
  TagSliceType &
  TagInputSliceType &
  UploadSliceType &
  NotifsSliceType &
  BlogSliceType;

const useStoreBase = create<StoreType>()(
  subscribeWithSelector(
    devtools(
      immer((...a) => ({
        ...layoutSlice(...a),
        ...notifsSlice(...a),
        ...categorySlice(...a),
        ...sliderSlice(...a),
        ...tagSlice(...a),
        ...tagInputSlice(...a),
        ...uploadSlice(...a),
        ...blogSlice(...a),
      }))
    )
  )
);

useStoreBase.subscribe(
  (state) => state.tagInputManager.selectedTags,
  (selectedTags, prevTags) => {
    const newTags = selectedTags.filter(
      (tag) => !prevTags.some((prevTag) => prevTag.id === tag.id)
    );
    if (newTags.length > 0) {
      useStoreBase.setState((state) => {
        const newFilteredTags = state.tagInputManager.filteredTags.filter(
          (tag) => !newTags.some((newTag) => newTag.id === tag.id)
        );
        state.tagInputManager.filteredTags = newFilteredTags;
      });
    }
  },
  { fireImmediately: false }
);
export const useAdminStore = createSelectors(useStoreBase);
