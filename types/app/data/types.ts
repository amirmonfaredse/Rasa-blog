export type ActionResult = {
  type: string;
  message: string;
  error?: any;
};
export type BlogFieldProps = {
  id: string;
  created_at: string;
  author: string;
  title: string;
  description: string;
  content: string;
  image: string;
};

export type TaggingFieldProps = {
  id: string;
  tagId: string;
  blogId: string;
};

export type UpdatedBlogProps = {
  id: string;
  author: string;
  description: string;
  title: string;
  content: string;
  image: string;
};
export type CategoryFieldsProps = {
  id: string;
  title: string;
  name: string;
};
export type TagFieldProps = {
  id: string;
  title: string;
  slug: string;
};
export type ImageFieldProps = {
  id?: string;
  url: string;
  name?: string;
  size: number;
  type: string;
};
export type MessageFieldProps = {
  id: string;
  fullName: string;
  email: string;
  message: string;
};
export type CommentFieldProps = {
  id: string;
  fullName: string;
  email: string;
  message: string;
  blogId: string;
  confirmed: boolean;
};
export type SlideFieldProps = {
  id: string;
  title: string;
  image: string;
  bgColor: string;
  textColor: string;
  type: string;
};

export type CategorizedProps = {
  id: string;
  categoryId: string;
  blogId: string;
};

export type TagProps = {
  id: string;
  slug: string;
  title: string;
};

export type TaggedProps = {
  id: string;
  tagId: string;
  blogId: string;
};

export type FilesUrlProps = {
  id: string;
  url: string;
  name: string;
  size: number;
  type: string;
};
export type MessageProps = {
  id: string;
  created_at: string;
  fullName: string;
  email: string;
  message: string;
};
export type CommentProps = {
  id: string;
  created_at: string;
  fullName: string;
  email: string;
  message: string;
  blogId: string;
  confirmed: boolean;
};
export type UplaodResult = {
  name: string;
  url: string;
  size: number;
  type: string;
};
