import { supabase } from "../supabase";

// POST
export async function serviceSendMessage(newMessage) {
  const { data, error } = await supabase.from("contact").insert([newMessage]);
  if (error) throw new Error("در ارسال پیام مشکلی ایجاد شده است");
  return data;
}

// GET
export async function serviceGetMessages() {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) throw new Error("مشکلی در دریافت پیام ها ایجاد شده است");
  return data;
}
export async function serviceGetMessage(id) {
  const { data, error } = await supabase
    .from("contact")
    .select()
    .single()
    .eq("id", id);
  if (error) throw new Error("مشکلی در دریافت  پیام ایجاد شده است");
  return data;
}
// DELETE
export async function serviceDeleteMessage(id) {
  const { error } = await supabase
    .from("contact")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در حذف کردن پیام پیش آمده");
}
