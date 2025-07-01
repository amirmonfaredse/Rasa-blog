import {
  CommentFieldProps,
  MessageFieldProps,
  serviceCommentGetMessage,
  serviceGetMessageProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

// POST
export async function serviceContactSendMessage(
  newMessage: MessageFieldProps
): Promise<void> {
  const { data, error } = await supabase.from("contact").insert([newMessage]);
  if (error) throw new Error("در ارسال پیام مشکلی ایجاد شده است");
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
export async function serviceContactDeleteMessage(id: string): Promise<void> {
  const { error } = await supabase.from("contact").delete().eq("id", id);
  if (error) throw new Error("مشکلی در حذف کردن پیام پیش آمده");
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
): Promise<number> {
  const { status, error } = await supabase
    .from("comments")
    .update({ confirmed: true })
    .eq("id", id);
  if (error) throw new Error("در تایید این کامنت مشکلی ایجاد شده است");
  return status;
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
): Promise<number> {
  const { status, error } = await supabase
    .from("comments")
    .insert([newComment]);
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return status;
}
export async function serviceCommentsDeleteMessage(id: string): Promise<void> {
  const { error } = await supabase.from("comments").delete().eq("id", id);
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
}
