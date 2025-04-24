import {
  serviceGetBlog,
  serviceGetCategories,
} from "@/app/_data/blog/blogServices";
import EditPostForm from "./EditPostForm";

export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const categories = await serviceGetCategories();

  return <EditPostForm blog={blog} categories={categories} />;
}
