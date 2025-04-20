"use server";
import { revalidatePath } from "next/cache";
import {
  serviceDeleteMessage,
  serviceGetMessage,
  serviceSendMessage,
} from "./contactService";

export async function actionSendMessage(formData) {
  const messageFields = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  await serviceSendMessage(messageFields);
  revalidatePath("/contact");
}
export async function actionRemoveMessage(id) {
  console.log(id);
  const contact = await serviceGetMessage(id);
  if (!contact) throw new Error("امکان حذف این پیام وجود ندارد");
  await serviceDeleteMessage(id);
  revalidatePath("/dashboard/contact");
}
