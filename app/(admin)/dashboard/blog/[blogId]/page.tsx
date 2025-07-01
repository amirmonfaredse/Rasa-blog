import { Suspense } from "react";

import Loading from "../Loading";
import EditPostForm from "./EditPostForm";
import { serviceGetBlog } from "_data/blog/blogServices";
import {
  serviceGetCategories,
  serviceGetCategorizeds,
} from "_data/blog/categories/categories.services";
import {
  serviceGetTaggeds,
  serviceGetTags,
} from "_data/blog/tags/tags.services";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const categories = await serviceGetCategories();
  const tagList = await serviceGetTags();
  let categorized = await serviceGetCategorizeds();
  categorized = categorized.filter((cat) => cat.blogId === blogId);
  let tagged = await serviceGetTaggeds();
  tagged = tagged.filter((tag) => tag.blogId === blogId);

  return (
    <Suspense fallback={<Loading />}>
      <EditPostForm
        blog={blog}
        categories={categories}
        categorized={categorized}
        tagList={tagList}
        tagged={tagged}
      />
    </Suspense>
  );
}
