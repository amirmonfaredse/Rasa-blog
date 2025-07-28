"use client";
import {
  CategoryFieldsProps,
  SlideFieldProps,
  TagFieldProps,
} from "@/types/app/data/types";
import "client-only";
import { create } from "zustand";
import { combine, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  catTitlePresets,
  createInitCategory,
  createInitSlider,
  createInitTag,
  initCategoryManager,
  initInputTagManager,
  initSliderManager,
  initTagManager,
  sliderTitlePresets,
  tagTitlePresets,
} from "./initials";
import { createSelectors } from "./selectors";
import { Mode, StateType } from "./types";

export const initState: StateType = {
  drawerIsOpen: false,
  catId: "",
  tagId: "",
  sliderId: "",
  categoryManager: initCategoryManager,
  tagManager: initTagManager,
  sliderManager: initSliderManager,
  tagInputManager: initInputTagManager,
};

const useStoreBase = create(
  subscribeWithSelector(
    devtools(
      immer(
        combine(initState, (set) => ({
          onDrawer: (prevState: boolean) =>
            set((state) => {
              state.drawerIsOpen = !prevState;
            }),
          setCatId: (catId: string = "") =>
            set((state) => {
              state.catId = catId;
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

          setSliderId: (sliderId: string = "") =>
            set((state) => {
              state.sliderId = sliderId;
            }),
          onSliderFormMode: (newMode: Mode) =>
            set((state) => {
              state.sliderManager.formMode = newMode;
              state.sliderManager.titleValues = sliderTitlePresets[newMode];
            }),
          onSliderFields: (slider?: SlideFieldProps) =>
            set((state) => {
              slider
                ? (state.sliderManager.fieldsValues = slider)
                : (state.sliderManager.fieldsValues = createInitSlider());
            }),
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
        }))
      )
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
