import { supabase } from "../supabase";

// POST
export async function serviceContactSendMessage(newMessage) {
  const { status, error } = await supabase.from("contact").insert([newMessage]);
  if (error) throw new Error("در ارسال پیام مشکلی ایجاد شده است");
  return status;
}

// GET
export async function serviceContactGetMessages() {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) throw new Error("مشکلی در دریافت پیام ها ایجاد شده است");
  return data;
}
export async function serviceContactGetMessage(id) {
  const { data, error } = await supabase
    .from("contact")
    .select()
    .single()
    .eq("id", id);
  if (error) throw new Error("مشکلی در دریافت  پیام ایجاد شده است");
  return data;
}

// DELETE
export async function serviceContactDeleteMessage(id) {
  const { error } = await supabase
    .from("contact")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در حذف کردن پیام پیش آمده");
}

export async function serviceCommentsGetMessages() {
  const { data, error } = await supabase.from("comments").select("*");
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return data;
}
export async function serviceCommentsGetMessage(id) {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .single()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در دریافت این نظر پیش آمده است");
  return data;
}
export async function serviceCommentsConfirmMessage(id) {
  const { status, error } = await supabase
    .from("comments")
    .update({ confirmed: true })
    .eq("id", String(id));
  if (error) throw new Error("در تایید این کامنت مشکلی ایجاد شده است");
  return status;
}
export async function serviceCommentsGetConfirmedMessages() {
  const { data, error } = await supabase
    .from("comments")
    .select()
    .eq("confirmed", true);

  if (error) throw new Error("مشکلی در دریافت نظرات ایجاد شده است");
  return data;
}
export async function serviceCommentsSendMessage(newComment) {
  const { status, error } = await supabase
    .from("comments")
    .insert([newComment]);
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
  return status;
}
export async function serviceCommentsDeleteMessage(id) {
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در دریافت نظرات پیش آمده است");
}
