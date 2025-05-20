import {
  serviceGetBlog,
  serviceGetCategories,
  serviceGetTags,
} from "@/app/_data/blog/blogServices";
import { Suspense } from "react";
import EditPostForm from "./EditPostForm";
import Loading from "../Loading";

export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const categories = await serviceGetCategories();
  const tagList = await serviceGetTags();

  return (
    <div className="flex justify-center items-center">
      <Suspense fallback={<Loading />}>
        <EditPostForm blog={blog} categories={categories} tagList={tagList} />
      </Suspense>
    </div>
  );
}
