import { CategorizedProps, CategoryFieldsProps } from "@/types/app/data/types";
import { idRand } from "_data/utility";
import { revalidatePath } from "next/cache";
import { sanitizeTextOnServer } from "utility/jsDOM";

export function extractCategoryFields(
  formData: FormData,
  catId: string
): CategoryFieldsProps {
  return {
    id: catId,
    title: sanitizeTextOnServer(formData.get("categoryTitle") as string),
    name: sanitizeTextOnServer(formData.get("categoryValue") as string),
  };
}
export function extractCategorizingFields(
  formData: FormData
): CategorizedProps[] {
  const categories = formData.getAll("blogCategory") as [];
  return categories.map((cat: CategorizedProps) => ({
    id: idRand(),
    categoryId: cat.categoryId,
    blogId: cat.blogId,
  }));
}
export function revalidateCategories() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/categories");
}
