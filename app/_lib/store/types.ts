import { CategoryFieldsProps, TagFieldProps } from "@/types/app/data/types";

export type StateType = {
  drawerIsOpen: boolean;
  catId: string;
  categoryManager: CategoryManagerProps;
  tagFields: TagFieldProps;
};

export type CategoryManagerProps = {
  formMode: Mode;
  fieldsValues: CategoryFieldsProps;
  titleValues: {
    headerTitle: TitlesPostMode.Header | TitlesPutMode.Header;
    buttonTitle: TitlesPostMode.Button | TitlesPutMode.Button;
  };
};
export enum Mode {
  Post = "POST",
  Put = "PUT",
}
export type TitleValues = {
  headerTitle: TitlesPostMode.Header | TitlesPutMode.Header;
  buttonTitle: TitlesPostMode.Button | TitlesPutMode.Button;
};

export enum TitlesPostMode {
  Button = "اضافه کن",
  Header = "اضافه کردن دسته بندی",
}
export enum TitlesPutMode {
  Button = "ویرایش کن",
  Header = "ویرایش کردن دسته بندی",
}
