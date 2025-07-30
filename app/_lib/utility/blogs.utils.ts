import { BlogFieldProps } from "@/types/app/data/types";
import { getPersianDate, idRand, validateUrl } from "_data/utils/server.utils";
import { revalidatePath } from "next/cache";
import { sanitizeHTMLOnServer, sanitizeTextOnServer } from "utility/validation/jsDOM";
export function revalidateBlogs() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
}

export function extractBlogFields(
  formData: FormData,
  id: string | undefined = undefined
): BlogFieldProps {
  return {
    id: id ?? idRand(),
    created_at: getPersianDate(),
    author: "امیررضا منفرد",
    title: sanitizeTextOnServer(formData.get("blogTitle") as string),
    description: sanitizeTextOnServer(
      formData.get("blogDescription") as string
    ),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image: validateUrl(formData.get("blogImage") as string),
  };
}
