import { CategoryFieldProps } from "@/types/app/data/types";
import { revalidatePath } from "next/cache";
import { sanitizeTextOnServer } from "utility/jsDOM";

export function extractCategoryFields(
  formData: FormData,
  catId: string
): CategoryFieldProps {
  return {
    id: catId,
    title: sanitizeTextOnServer(formData.get("categoryTitle") as string),
    name: sanitizeTextOnServer(formData.get("categoryValue") as string),
  };
}

export function revalidateCategories() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/categories");
}
