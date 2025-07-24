"use client";
import { CategoryFieldsProps } from "@/types/app/data/types";
import "client-only";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./selectors";
import {
  CategoryManagerProps,
  Mode,
  StateType,
  TitlesPostMode,
  TitlesPutMode,
} from "./types";

export const createInitCategory = () => ({
  id: String(Math.floor(Math.random() * 10000)),
  title: "",
  name: "",
});
export const initStateTag = {
  id: "",
  title: "",
  slug: "",
};

const titlePresets: Record<Mode, CategoryManagerProps["titleValues"]> = {
  [Mode.Post]: {
    headerTitle: TitlesPostMode.Header,
    buttonTitle: TitlesPostMode.Button,
  },
  [Mode.Put]: {
    headerTitle: TitlesPutMode.Header,
    buttonTitle: TitlesPutMode.Button,
  },
};

export const initState: StateType = {
  drawerIsOpen: false,
  catId: "",
  categoryManager: {
    formMode: Mode.Post,
    fieldsValues: createInitCategory(),
    titleValues: {
      headerTitle: TitlesPostMode.Header,
      buttonTitle: TitlesPostMode.Button,
    },
  },
  tagFields: initStateTag,
};

const useStoreBase = create(
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
            state.categoryManager.titleValues = titlePresets[newMode];
          }),
        onCatFields: (cat?: CategoryFieldsProps) =>
          set((state) => {
            cat
              ? (state.categoryManager.fieldsValues = cat)
              : (state.categoryManager.fieldsValues = createInitCategory());
          }),
        // onTagForm: (newMode: Mode, formFields: TagFieldProps) =>
        //   set((state) => {
        //     state.formModes.tag = newMode;
        //     state.tagFields = formFields;
        //   }),
      }))
    )
  )
);

export const useAdminStore = createSelectors(useStoreBase);
