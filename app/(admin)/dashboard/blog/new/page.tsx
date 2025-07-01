
import NewPostForm from "./NewPostForm";
import { Suspense } from "react";
import SpinnerLoader from "../../../../utility/SpinnerLoader";
import { serviceGetCategories } from "_data/blog/categories/categories.services";
import { serviceGetTags } from "_data/blog/tags/tags.services";

export default async function Page() {
  const categories = await serviceGetCategories();
  const tagList = await serviceGetTags();
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <NewPostForm categories={categories} tagList={tagList} />
    </Suspense>
  );
}
