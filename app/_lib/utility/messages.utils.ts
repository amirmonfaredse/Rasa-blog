import { CommentFieldProps, MessageFieldProps } from "@/types/app/data/types";
import { revalidatePath } from "next/cache";
import { sanitizeHTMLOnServer } from "utility/jsDOM";

export function extractMessageFields(
  formData: FormData,
  messId: string
): MessageFieldProps {
  return {
    id: messId,
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
}
export function extractCommentFields(
  formData: FormData,
  messId: string,
  blogId: string
): CommentFieldProps {
  return {
    id: messId,
    fullName: sanitizeHTMLOnServer(formData.get("fullName") as string),
    email: sanitizeHTMLOnServer(formData.get("email") as string),
    message: sanitizeHTMLOnServer(formData.get("message") as string),
    blogId,
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
