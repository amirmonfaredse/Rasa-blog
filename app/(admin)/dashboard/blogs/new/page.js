import { serviceGetCategories } from "@/app/_data/blog/blogServices";
import NewPostForm from "./NewPostForm";

export default async function Page() {
  const categories = await serviceGetCategories();

  return <NewPostForm categories={categories} />;
}
