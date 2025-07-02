export type ActionResult = {
  status: string;
  message: string;
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
export type newCategorizingFieldProps = {
  id?: string;
  categoryId: string;
  blogId: string;
};
export type TaggingFieldProps = {
  tagId: string;
  blogId: string;
};

export type UpdatedFieldsProps = {
  id: string;
  author: string;
  description: string;
  title: string;
  content: string;
  image: string;
};
export type CategoryFieldProps = {
  id?: string;
  title: string;
  name: string;
};
export type TagFieldProps = {
  title: string;
  slug: string;
};
export type ImageFieldProps = {
  url: string;
  name?: string;
  size: number;
  type: string;
};
export type MessageFieldProps = {
  fullName: string;
  email: string;
  message: string;
};
export type CommentFieldProps = {
  fullName: string;
  email: string;
  message: string;
  blogId: string;
};
export type SlideFieldProps = {
  id?: string;
  title: string;
  image: string;
  bgColor: string;
  textColor: string;
  type: string;
};

export type getCategoryServiceProps = {
  id: string;
  title: string;
  name: string;
};
export type getCategorizedServiceProps = {
  id?: string;
  categoryId: string;
  blogId: string;
};

export type getTagServiceProps = {
  id: string;
  slug: string;
  title: string;
};

export type getTaggingServiceProps = {
  id?: string;
  tagId: string;
  blogId: string;
};

export type getTaggedServiceProps = {
  id: string;
  tagId: string;
  blogId: string;
};
export type FilesUrlProps = {
  id?: string;
  url: string;
  name: string;
  size: string;
  type: string;
};
export type serviceGetMessageProps = {
  id: string;
  created_at: string;
  fullName: string;
  email: string;
  message: string;
};
export type serviceCommentGetMessage = {
  id: string;
  created_at: string;
  fullName: string;
  email: string;
  message: string;
  blogId: string;
  confirmed: boolean;
};
