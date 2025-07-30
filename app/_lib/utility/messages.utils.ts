import { CommentFieldProps, MessageFieldProps } from "@/types/app/data/types";
import { idRand } from "_data/utils/server.utils";
import { revalidatePath } from "next/cache";
import { sanitizeHTMLOnServer } from "utility/validation/jsDOM";

export function extractMessageFields(formData: FormData): MessageFieldProps {
  return {
    id: idRand(),
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
}
export function extractCommentFields(formData: FormData): CommentFieldProps {
  return {
    id: idRand(),
    fullName: sanitizeHTMLOnServer(formData.get("fullName") as string),
    email: sanitizeHTMLOnServer(formData.get("email") as string),
    message: sanitizeHTMLOnServer(formData.get("message") as string),
    blogId: sanitizeHTMLOnServer(formData.get("blogId") as string),
    confirmed: false,
  };
}
export function revalidateContacts() {
  revalidatePath("/dashboard/messages");
}
export function revalidateComments(blogId?: string) {
  revalidatePath("/dashboard/messages");
  revalidatePath("/dashboard/messages/comments");
  if (blogId) revalidatePath(`/blogs/${blogId}`);
}
