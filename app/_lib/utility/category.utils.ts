import { CategorizedProps, CategoryFieldsProps } from "@/types/app/data/types";
import { idRand } from "_data/utils/server.utils";
import { revalidatePath } from "next/cache";
import { sanitizeTextOnServer } from "utility/validation/jsDOM";

export function extractCategoryFields(
  formData: FormData,
  id: string | undefined = undefined
): CategoryFieldsProps {
  return {
    id: id ?? idRand(),
    title: sanitizeTextOnServer(formData.get("title") as string),
    name: sanitizeTextOnServer(formData.get("name") as string),
  };
}
export function extractCategorizingFields(
  formData: FormData
): CategorizedProps[] {
  const categories = formData.getAll("blogCategory") as [];
  const blogId = formData.get("exteraId") as string;

  return categories.map((cat: string) => ({
    id: idRand(),
    categoryId: cat,
    blogId,
  }));
}
export function revalidateCategories() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/categories");
}
