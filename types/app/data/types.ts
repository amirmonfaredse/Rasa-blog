export interface ActionResult {
  status: string;
  message: string;
}
export interface newBlogFieldProps {
  id: string;
  created_at: string;
  author: string;
  title: string;
  description: string;
  content: string;
  image: string;
}
export interface newCategorizingFieldProps {
  categoryId: string;
  blogId: string;
}
export interface TaggingFieldProps {
  tagId: string;
  blogId: string;
}

export interface UpdatedFieldsProps {
  id: string;
  author: string;
  description: string;
  title: string;
  content: string;
  image: string;
}
export interface CategoryFieldProps {
  title: string;
  name: string;
}
export interface TagFieldProps {
  title: string;
  slug: string;
}
export interface ImageFieldProps {
  url: string;
  name?: string;
  size: number;
  type: string;
}
export interface MessageFieldProps {
  fullName: string;
  email: string;
  message: string;
}
export interface CommentFieldProps {
  fullName: string;
  email: string;
  message: string;
  blogId: string;
}
export interface SlideFieldProps {
  title: string;
  image: string;
  bgColor: string;
  textColor: string;
  type: string;
}