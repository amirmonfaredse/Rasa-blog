import {
  BlogFieldProps,
  CategoryFieldProps,
  CommentFieldProps,
  getCategorizedServiceProps,
  ImageFieldProps,
  MessageFieldProps,
  SlideFieldProps,
  TagFieldProps,
  TaggingFieldProps,
} from "../data/types";

export type useBlogsResult = {
  blogs: BlogFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useBlogResult = {
  blog: BlogFieldProps;
  isLoading: boolean;
  isError: string;
};
export type useTagsResult = {
  tags: TagFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useTagResult = {
  tag: TagFieldProps;
  isLoading: boolean;
  isError: string;
};
export type useTaggedsResult = {
  taggeds: TaggingFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useCategoriesResult = {
  categories: CategoryFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useCategoryResult = {
  category: CategoryFieldProps;
  isLoading: boolean;
  isError: string;
};
export type useCategorizedResult = {
  categorizeds: getCategorizedServiceProps[];
  isLoading: boolean;
  isError: string;
};
export type useImageFilesResult = {
  images: ImageFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useImageFileURLResult = {
  image: string;
  isLoading: boolean;
  isError: string;
};
export type useMessagesResult = {
  messages: MessageFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useMessageResult = {
  message: MessageFieldProps;
  isLoading: boolean;
  isError: string;
};
export type useCommentsResult = {
  comments: CommentFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useCommentResult = {
  comment: CommentFieldProps;
  isLoading: boolean;
  isError: string;
};
export type useConfirmedCommentsResult = {
  comments: CommentFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useSlidersResult = {
  sliders: SlideFieldProps[];
  isLoading: boolean;
  isError: string;
};
export type useSliderResult = {
  slider: SlideFieldProps;
  isLoading: boolean;
  isError: string;
};
