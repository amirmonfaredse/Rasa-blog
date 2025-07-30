import { TagFieldProps, TaggingFieldProps } from "@/types/app/data/types";
import { idRand } from "_data/utils/server.utils";
import { revalidatePath } from "next/cache";
import { sanitizeHTMLOnServer } from "utility/jsDOM";

export function extractTagFields(
  formData: FormData,
  id: string | undefined = undefined
): TagFieldProps {
  return {
    id: id ?? idRand(),
    title: sanitizeHTMLOnServer(formData.get("tagTitle") as string),
    slug: sanitizeHTMLOnServer(formData.get("tagSlug") as string),
  };
}
export function extractTaggedFields(formData: FormData): TaggingFieldProps[] {
  const tags = JSON.parse(formData.get("blogTags") as string);
  const blogId = formData.get("exteraId") as string;

  return tags.map((tag: TaggingFieldProps) => ({
    id: idRand(),
    tagId: sanitizeHTMLOnServer(tag.id),
    blogId,
  }));
}

export function revalidateTags() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
}
