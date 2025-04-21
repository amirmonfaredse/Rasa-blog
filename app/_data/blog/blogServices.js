// POST / Posts

import { notFound } from "next/navigation";
import { supabase } from "../supabase";

export async function serviceCreateBlog(newBlog) {
  const { data, error } = await supabase.from("blogs").insert([newBlog]);
  if (error) throw new Error("پست جدید ایجاد نشد");
  return data;
}

// GET / Posts
export async function serviceGetBlogs() {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) throw new Error("مشکلی در دریافت بلاگ ها ایجاد شده است");
  return data;
}
export async function serviceGetBlog(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select()
    .single()
    .eq("id", String(id));
  if (data === null) notFound();
  if (error) {
    throw new Error("مشکلی در دریافت  بلاگ ایجاد شده است");
  }
  return data;
}

// PUT / Posts
export async function serviceUpdateBlog(id, updatedFields) {
  const { data, error } = await supabase
    .from("blogs")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) throw new Error("پست ویرایش نشد");
  return data;
}

// DELETE / Posts
export async function serviceDeleteBlog(id) {
  const { error } = await supabase.from("blogs").delete().eq("id", String(id));
  if (error) throw new Error("پست وبلاگ حذف نشد");
}

// POST / Categories
export async function serviceCreateCategory(newCategory) {
  const { data, error } = await supabase
    .from("blogs-categories")
    .insert([newCategory]);
  if (error) throw new Error("دسته بندی اضافه نشد");
  return data;
}
// GET / Categories
export async function serviceGetCategories() {
  const { data, error } = await supabase.from("blogs-categories").select("*");
  if (error) throw new Error("در دریافت دسته بندی ها مشکل ایجاد شده است");
  return data;
}
export async function serviceGetCategory(id) {
  const { data, error } = await supabase
    .from("blogs-categories")
    .select()
    .single()
    .eq("id", String(id));
  if (error)
    throw new Error("در دریافت دسته بندی مورد نظر مشکلی ایجاد شده است");
  return data;
}
// PUT / Categories
export async function serviceUpdateCategory(updatedFields, id) {
  const { data, error } = await supabase
    .from("blogs-categories")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) throw new Error("دسته بندی ویرایش نشد");

  return data;
}
// DELETE / Categories
export async function serviceDeleteCategory(id) {
  const { error } = await supabase
    .from("blogs-categories")
    .delete()
    .eq("id", String(id));
  if (error) throw new Error("دسته بندی حذف نشد");
}
