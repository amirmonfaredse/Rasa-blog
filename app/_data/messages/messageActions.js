"use server";
import { revalidatePath } from "next/cache";
import {
  serviceCommentsConfirmMessage,
  serviceCommentsDeleteMessage,
  serviceCommentsGetMessage,
  serviceCommentsSendMessage,
  serviceContactDeleteMessage,
  serviceContactGetMessage,
  serviceContactSendMessage,
} from "./messageServices";
import { sanitizeHTMLOnServer } from "@/app/utility/jsDOM";
import { secureAccess } from "../utility";

export async function actionContactSendMessage(formData) {
  const messageFields = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  await serviceContactSendMessage(messageFields);
  revalidatePath("/contact");
}
export async function actionContactRemoveMessage(id) {
  await secureAccess();
  const contact = await serviceContactGetMessage(id);
  if (!contact) throw new Error("امکان حذف این پیام وجود ندارد");
  await serviceContactDeleteMessage(id);
  revalidatePath("/dashboard/contact");
}

export async function actionCommentsSendMessage(_, formData) {
  const blogId = Number(sanitizeHTMLOnServer(formData.get("blogId")));
  const messageField = {
    fullName: sanitizeHTMLOnServer(formData.get("fullName")),
    email: sanitizeHTMLOnServer(formData.get("email")),
    message: sanitizeHTMLOnServer(formData.get("message")),
    blogId,
  };
  await serviceCommentsSendMessage(messageField);
  revalidatePath("/dashboard/contact/comments");
  revalidatePath(`/blogs/${blogId}`);
  return {
    status: "success",
    message:
      "نظرشما باموفقیت ارسال شد ، بعد از تایید برروی سایت قرار خواهد گرفت",
  };
}
export async function actionCommentsRemoveMessage(id) {
  await secureAccess();
  const comment = await serviceCommentsGetMessage(id);
  if (!comment) throw new Error("امکان حذف این نظر وجود ندارد");
  await serviceCommentsDeleteMessage(id);
  revalidatePath("/dashboard/contact/comments");
  return {
    status: "success",
    message: "نظر با موفقیت حذف شد",
  };
}
export async function actionCommentsConfirmMessage(id) {
  await secureAccess();
  const comment = await serviceCommentsGetMessage(id);
  if (!comment) throw new Error("امکان حذف این نظر وجود ندارد");
  await serviceCommentsConfirmMessage(id);
  revalidatePath("/dashboard/contact/comments");
  return {
    status: "success",
    message: "نظر با موفقیت تایید شد",
  };
}
