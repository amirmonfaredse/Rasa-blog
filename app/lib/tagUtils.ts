import { TagFieldProps } from "@/types/app/data/types";
import { revalidatePath } from "next/cache";
import { sanitizeHTMLOnServer } from "utility/jsDOM";

export function extractTagFields(
  formData: FormData,
  tagId: string
): TagFieldProps {
  return {
    id: tagId,
    title: sanitizeHTMLOnServer(formData.get("tagTitle") as string),
    slug: sanitizeHTMLOnServer(formData.get("tagSlug") as string),
  };
}

export function revalidateTags() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
}
