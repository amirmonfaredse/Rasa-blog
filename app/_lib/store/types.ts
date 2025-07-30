import {
  CategoryFieldsProps,
  SlideFieldProps,
  TagFieldProps,
} from "@/types/app/data/types";
export enum Mode {
  Post = "POST",
  Put = "PUT",
}
export type StateType = {
  drawerIsOpen: boolean;
  catId: string;
  tagId: string;
  sliderId: string;
  categoryManager: CategoryManagerProps;
  tagManager: TagManagerProps;
  sliderManager: SliderManagerProps;
  tagInputManager: TagInputManager;
  uploadManager: UploadManager;
};
export type TagManagerProps = {
  formMode: Mode;
  fieldsValues: TagFieldProps;
  titleValues: {
    headerTitle: TagTitlesPostMode.Header | TagTitlesPutMode.Header;
    buttonTitle: TagTitlesPostMode.Button | TagTitlesPutMode.Button;
  };
};
export type TagInputManager = {
  allTags: TagFieldProps[];
  filteredTags: TagFieldProps[];
  selectedTags: TagFieldProps[];
  isSuggestionVisible: boolean;
  searchTerm: string;
};

export type CategoryManagerProps = {
  formMode: Mode;
  fieldsValues: CategoryFieldsProps;
  titleValues: {
    headerTitle: CategoryTitlesPostMode.Header | CategoryTitlesPutMode.Header;
    buttonTitle: CategoryTitlesPostMode.Button | CategoryTitlesPutMode.Button;
  };
};
export type SliderManagerProps = {
  formMode: Mode;
  fieldsValues: SlideFieldProps;
  titleValues: {
    headerTitle: SliderTitlesPostMode.Header | SliderTitlesPutMode.Header;
    buttonTitle: SliderTitlesPostMode.Button | SliderTitlesPutMode.Button;
  };
};

export enum CategoryTitlesPostMode {
  Button = "اضافه کن",
  Header = "اضافه کردن دسته بندی",
}
export enum CategoryTitlesPutMode {
  Button = "ویرایش کن",
  Header = "ویرایش کردن دسته بندی",
}
export enum TagTitlesPostMode {
  Button = "اضافه کن",
  Header = "اضافه کردن برچسب",
}
export enum TagTitlesPutMode {
  Button = "ویرایش کن",
  Header = "ویرایش کردن برچسب",
}
export enum SliderTitlesPostMode {
  Button = "اضافه کن",
  Header = "اضافه کردن اسلاید",
}
export enum SliderTitlesPutMode {
  Button = "ویرایش کن",
  Header = "ویرایش کردن اسلاید",
}
export type UploadManager = {
  name: string;
  preview: string;
  file: null | File;
  size: number;
  type: string;
};
