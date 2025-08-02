import {
  CategoryFieldsProps,
  SlideFieldProps,
  TagFieldProps,
  TaggingFieldProps,
} from "@/types/app/data/types";
export enum Mode {
  Post = "POST",
  Put = "PUT",
}

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
export type InitInputTagManagerProps = {
  allTags: TagFieldProps[];
  filteredTags: TagFieldProps[];
  selectedTags: TagFieldProps[];
  isSuggestionVisible: boolean;
  searchTerm: string;
};
export type InitUploadManagerProps = {
  name: string;
  preview: string;
  file: null | File;
  size: number | string;
  type: string;
};
export interface LayoutSliceType {
  drawerIsOpen: boolean;
  sideListIsOpen: boolean;
  accordionIsOpen: boolean;
  onDrawer: (prevState: boolean) => void;
  onSideList: (prevState?: boolean | undefined) => void;
  onAccordion: (prevState?: boolean | undefined) => void;
}
export interface UploadSliceType {
  uploadManager: InitUploadManagerProps;
  onReadFile: (acceptedFile: File) => void;
}
export interface CategorySliceType {
  catId: string;
  categoryManager: CategoryManagerProps;
  setCatId: (catId?: string) => void;
  onCatFormMode: (newMode: Mode) => void;
  onCatFields: (cat?: CategoryFieldsProps) => void;
}
export interface SliderSliceType {
  sliderId: string;
  sliderManager: SliderManagerProps;
  setSliderId: (sliderId: string) => void;
  onSliderFormMode: (newMode: Mode) => void;
  onSliderFields: (slider?: SlideFieldProps) => void;
}
export interface TagSliceType {
  tagId: string;
  tagManager: TagManagerProps;
  setTagId: (tagId: string) => void;
  onTagFormMode: (newMode: Mode) => void;
  onTagFields: (tag?: TagFieldProps) => void;
}
export interface TagInputSliceType {
  tagInputManager: InitInputTagManagerProps;
  onLoadAllTags: (tags: TagFieldProps[]) => void;
  onSearchField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleSuggestion: (visible?: boolean | undefined) => void;
  onSelectTag: (selectedTag: TagFieldProps) => void;
  onUnSelectTag: (unSelectedTag: TagFieldProps) => void;
  onClearAllSelectedTags: () => void;
  onDefaultTagging: (tagged: TaggingFieldProps[]) => void;
}
