import {
  CategoryManagerProps,
  CategoryTitlesPostMode,
  CategoryTitlesPutMode,
  Mode,
  SliderManagerProps,
  SliderTitlesPostMode,
  SliderTitlesPutMode,
  TagManagerProps,
  TagTitlesPostMode,
  TagTitlesPutMode,
} from "./types";

export const createInitCategory = () => ({
  id: String(Math.floor(Math.random() * 10000)),
  title: "",
  name: "",
});
export const createInitTag = () => ({
  id: String(Math.floor(Math.random() * 10000)),
  title: "",
  slug: "",
});
export const createInitSlider = () => ({
  id: String(Math.floor(Math.random() * 10000)),
  title: "",
  image: "",
  bgColor: "",
  textColor: "",
  type: "",
});
export const catTitlePresets: Record<
  Mode,
  CategoryManagerProps["titleValues"]
> = {
  [Mode.Post]: {
    headerTitle: CategoryTitlesPostMode.Header,
    buttonTitle: CategoryTitlesPostMode.Button,
  },
  [Mode.Put]: {
    headerTitle: CategoryTitlesPutMode.Header,
    buttonTitle: CategoryTitlesPutMode.Button,
  },
};
export const tagTitlePresets: Record<Mode, TagManagerProps["titleValues"]> = {
  [Mode.Post]: {
    headerTitle: TagTitlesPostMode.Header,
    buttonTitle: TagTitlesPostMode.Button,
  },
  [Mode.Put]: {
    headerTitle: TagTitlesPutMode.Header,
    buttonTitle: TagTitlesPutMode.Button,
  },
};
export const sliderTitlePresets: Record<
  Mode,
  SliderManagerProps["titleValues"]
> = {
  [Mode.Post]: {
    headerTitle: SliderTitlesPostMode.Header,
    buttonTitle: SliderTitlesPostMode.Button,
  },
  [Mode.Put]: {
    headerTitle: SliderTitlesPutMode.Header,
    buttonTitle: SliderTitlesPutMode.Button,
  },
};

export const initCategoryManager: CategoryManagerProps = {
  formMode: Mode.Post,
  fieldsValues: createInitCategory(),
  titleValues: {
    headerTitle: CategoryTitlesPostMode.Header,
    buttonTitle: CategoryTitlesPostMode.Button,
  },
};
export const initTagManager: TagManagerProps = {
  formMode: Mode.Post,
  fieldsValues: createInitTag(),
  titleValues: {
    headerTitle: TagTitlesPostMode.Header,
    buttonTitle: TagTitlesPostMode.Button,
  },
};
export const initSliderManager: SliderManagerProps = {
  formMode: Mode.Post,
  fieldsValues: createInitSlider(),
  titleValues: {
    headerTitle: SliderTitlesPostMode.Header,
    buttonTitle: SliderTitlesPostMode.Button,
  },
};
export const initInputTagManager = {
  allTags: [],
  filteredTags: [],
  selectedTags: [],
  isSuggestionVisible: false,
  searchTerm: "",
};
export const initUploadManager = {
  name: "",
  preview: "",
  file: null,
  size: 0,
  type: "",
};
