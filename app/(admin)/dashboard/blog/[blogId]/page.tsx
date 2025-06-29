import {
  serviceGetBlog,
  serviceGetCategories,
  serviceGetCategorizeds,
  serviceGetTaggeds,
  serviceGetTags,
} from "../../../../_data/blog/blogServices";
import { Suspense } from "react";
import Loading from "../Loading";
import EditPostForm from "./EditPostForm";

export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const categories = await serviceGetCategories();
  const tagList = await serviceGetTags();
  let categorized = await serviceGetCategorizeds();
  categorized = categorized.filter(
    (cat) => Number(cat.blogId) === Number(blogId)
  );
  let tagged = await serviceGetTaggeds();
  tagged = tagged.filter((tag) => Number(tag.blogId) === Number(blogId));

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
