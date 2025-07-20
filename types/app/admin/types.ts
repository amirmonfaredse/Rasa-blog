import { Dispatch, SetStateAction } from "react";
import {
  BlogFieldProps,
  CategorizedProps,
  CategoryFieldProps,
  SlideFieldProps,
  TaggedProps,
  TagProps,
} from "../data/types";

export type SideLayoutProps = {
  title: string;
  path: string;
};
export type SideTabProps = {
  title: string;
  href?: any;
  subs?: any[];
};
export type SliderContextType = {
  sliderList: SlideFieldProps[];
  setSliderList: Dispatch<SetStateAction<SlideFieldProps[]>>;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};
export interface TProps {
  children: React.ReactNode;
  row?: boolean;
  center?: boolean;
}
export type TagInputProps = {
  tagList: any[];
  tagged?: any[];
};
export type EditPostFormProps = {
  categories: CategoryFieldProps[];
  blog: BlogFieldProps;
  tagList: TagProps[];
  categorized: CategorizedProps[];
  tagged: TaggedProps[];
};
export type TextEditorEditBlogProps = {
  defaultContent: string;
};
export type NewPostFormProps = {
  categories: CategoryFieldProps[];
  tagList: TagProps[];
};
export type SliderItemProps = {
  index: number;
  slide: SlideFieldProps;
};
export type BufferingFileResult = {
  name: string;
  file: Buffer;
  size: number;
  type: string;
};
