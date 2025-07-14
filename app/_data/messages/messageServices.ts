import { ToastType } from "@/types/app/admin/store";
import {
  ActionResult,
  CommentFieldProps,
  MessageFieldProps,
  serviceCommentGetMessage,
  serviceGetMessageProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

// POST
export async function serviceContactSendMessage(
  newMessage: MessageFieldProps
): Promise<ActionResult> {
  const { error } = await supabase.from("contact").insert([newMessage]);
  if (error) throw new Error("در ارسال پیام مشکلی ایجاد شده است");
  return {
    type: ToastType.Success,
    message: "پیام با موفقیت ارسال شد",
  };
}

// GET
export async function serviceContactGetMessages(): Promise<
  serviceGetMessageProps[]
> {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) throw new Error("مشکلی در دریافت پیام ها ایجاد شده است");
  return data;
}
export async function serviceContactGetMessage(
  id: string
): Promise<serviceGetMessageProps> {
  const { data, error } = await supabase
    .from("contact")
    .select()
    .eq("id", id)
    .single();
  if (error) throw new Error("مشکلی در دریافت  پیام ایجاد شده است");
  return data;
}

// DELETE
export async function serviceContactDeleteMessage(
  id: string
): Promise<ActionResult> {
  const { error } = await supabase.from("contact").delete().eq("id", id);
  if (error) throw new Error("مشکلی در حذف کردن پیام پیش آمده");
  return {
    type: ToastType.Success,
    message: "پیام با موفقیت حذف شد",
  };
}

export async function serviceCommentsGetMessages(): Promise<
  serviceCommentGetMessage[]
> {
  const { data, error } = await supabase.from("comments").select("*");
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return data;
}
export async function serviceCommentsGetMessage(
  id: string
): Promise<serviceCommentGetMessage> {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .eq("id", id)
    .single();
  if (error) throw new Error("مشکلی در دریافت این نظر پیش آمده است");
  return data;
}
export async function serviceCommentsConfirmMessage(
  id: string
): Promise<ActionResult> {
  const { error } = await supabase
    .from("comments")
    .update({ confirmed: true })
    .eq("id", id);
  if (error) throw new Error("در تایید این کامنت مشکلی ایجاد شده است");
  return {
    type: ToastType.Success,
    message: "پیام تایید شد",
  };
}
export async function serviceCommentsGetConfirmedMessages(): Promise<
  serviceCommentGetMessage[]
> {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .eq("confirmed", true);

  if (error) throw new Error("مشکلی در دریافت نظرات ایجاد شده است");
  return data;
}
export async function serviceCommentsSendMessage(
  newComment: CommentFieldProps
): Promise<ActionResult> {
  const { error } = await supabase.from("comments").insert([newComment]);
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return {
    type: ToastType.Success,
    message: "نظر ارسال شد",
  };
}
export async function serviceCommentsDeleteMessage(
  id: string
): Promise<ActionResult> {
  const { error } = await supabase.from("comments").delete().eq("id", id);
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return {
    type: ToastType.Success,
    message: "نظر با موفقیت حذف شد",
  };
}
