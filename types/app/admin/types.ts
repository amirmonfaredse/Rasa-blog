import { Dispatch, SetStateAction } from "react";
import {
  ActionResult,
  BlogFieldProps,
  getCategorizedServiceProps,
  getCategoryServiceProps,
  getTaggingServiceProps,
  getTagServiceProps,
  SlideFieldProps,
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
  categories: getCategoryServiceProps[];
  blog: BlogFieldProps;
  tagList: getTagServiceProps[];
  categorized: getCategorizedServiceProps[];
  tagged: getTaggingServiceProps[];
};
export type TextEditorEditBlogProps = {
  defaultContent: string;
  formState: ActionResult;
};
export type NewPostFormProps = {
  categories: getCategoryServiceProps[];
  tagList: getTagServiceProps[];
};
export type SliderItemProps = {
  index: number;
  slide: SlideFieldProps;
};
