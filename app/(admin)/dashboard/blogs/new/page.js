import { serviceGetCategories } from "@/app/_data/blog/blogServices";
import NewPostForm from "./NewPostForm";
import { Suspense } from "react";
import SpinnerLoader from "@/app/utility/SpinnerLoader";

export default async function Page() {
  const categories = await serviceGetCategories();

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <NewPostForm categories={categories} />
    </Suspense>
  );
}
