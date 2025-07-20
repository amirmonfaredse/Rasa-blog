"use server";
import { revalidatePath } from "next/cache";
import {
  getConfirmedComment,
  deleteComment,
  getComment,
  sendComment,
  deleteMessage,
  getMessage,
  sendMessage,
} from "./message.services";
import { sanitizeHTMLOnServer } from "../../utility/jsDOM";
import { secureAccess } from "../utility";
import {
  CommentFieldProps,
  MessageFieldProps,
} from "../../../types/app/data/types";
import { ActionResult } from "next/dist/server/app-render/types";

export async function actionContactSendMessage(
  _: any,
  formData: FormData
): ActionResult {
  const messageFields: MessageFieldProps = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  const message = await sendMessage(messageFields);
  if (message) {
    return {
      status: "success",
      message: " پیام با موفقیت ارسال شد",
    };
  } else {
    return {
      status: "error",
      message: "مشکلی در ارسال پیام ایجاد شده است",
    };
  }
}
export async function actionContactRemoveMessage(id: string): Promise<void> {
  await secureAccess();
  const contact = await getMessage(id);
  if (!contact) throw new Error("امکان حذف این پیام وجود ندارد");
  await deleteMessage(id);
  revalidatePath("/dashboard/contact");
}

export async function actionCommentsSendMessage(
  _: any,
  formData: FormData
): ActionResult {
  const blogId = sanitizeHTMLOnServer(formData.get("blogId"));
  const messageField: CommentFieldProps = {
    fullName: sanitizeHTMLOnServer(formData.get("fullName")),
    email: sanitizeHTMLOnServer(formData.get("email")),
    message: sanitizeHTMLOnServer(formData.get("message")),
    blogId,
  };
  await sendComment(messageField);
  revalidatePath("/dashboard/contact/comments");
  revalidatePath(`/blogs/${blogId}`);
  return {
    status: "success",
    message:
      "نظرشما باموفقیت ارسال شد ، بعد از تایید برروی سایت قرار خواهد گرفت",
  };
}
export async function actionCommentsRemoveMessage(id: string): ActionResult {
  await secureAccess();
  const comment = await getComment(id);
  if (!comment) throw new Error("امکان حذف این نظر وجود ندارد");
  await deleteComment(id);
  revalidatePath("/dashboard/contact/comments");
  return {
    status: "success",
    message: "نظر با موفقیت حذف شد",
  };
}
export async function actionCommentsConfirmMessage(id: string): ActionResult {
  await secureAccess();
  const comment = await getComment(id);
  if (!comment) throw new Error("امکان حذف این نظر وجود ندارد");
  await getConfirmedComment(id);
  revalidatePath("/dashboard/contact/comments");
  return {
    status: "success",
    message: "نظر با موفقیت تایید شد",
  };
}
