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
