import {
  serviceGetCategories,
  serviceGetTags,
} from "@/app/_data/blog/blogServices";
import NewPostForm from "./NewPostForm";
import { Suspense } from "react";
import SpinnerLoader from "@/app/utility/SpinnerLoader";

export default async function Page() {
  const categories = await serviceGetCategories();
  const tagList = await serviceGetTags();
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <NewPostForm categories={categories} tagList={tagList} />
    </Suspense>
  );
}
