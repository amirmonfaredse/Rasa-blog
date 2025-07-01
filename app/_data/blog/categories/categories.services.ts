import {
  CategoryFieldProps,
  getCategorizedServiceProps,
  getCategoryServiceProps,
} from "@/types/app/data/types";

import { supabase } from "_data/supabase";

// POST / Category
export async function serviceCreateCategory(
  newCategory: CategoryFieldProps
): Promise<void> {
  const { error } = await supabase
    .from("blog-categories")
    .insert([newCategory]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
// GET / Categories
export async function serviceGetCategories(): Promise<
  getCategoryServiceProps[]
> {
  const { data, error } = await supabase.from("blog-categories").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
export async function serviceGetCategory(
  catId: string
): Promise<getCategoryServiceProps> {
  const { data, error } = await supabase
    .from("blog-categories")
    .select()
    .eq("id", catId)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید");
  }

  return data;
}

// PUT / Category
export async function serviceUpdateCategory(
  updatedFields: CategoryFieldProps,
  id: string
): Promise<void> {
  const { error } = await supabase
    .from("blog-categories")
    .update(updatedFields)
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
// DELETE / Category
export async function serviceDeleteCategory(id: string): Promise<void> {
  const { error } = await supabase
    .from("blog-categories")
    .delete()
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
export async function serviceCategorizing(
  newField: getCategorizedServiceProps
): Promise<void> {
  const { error } = await supabase
    .from("categorizing-blogs")
    .insert([newField]);
  if (error) {
    console.log(error);
    throw new Error("در فرایند دسته بندی کردن مشکلی ایجاد شده است");
  }
}
export async function serviceGetCategorizeds(): Promise<
  getCategorizedServiceProps[]
> {
  const { data, error } = await supabase.from("categorizing-blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت دسته بندی ها ایجاد شده است");
  }
  return data;
}
export async function serviceDeleteRelationalCategorizeds(
  blogId: string
): Promise<void> {
  const { error } = await supabase
    .from("categorizing-blogs")
    .delete()
    .eq("blogId", blogId);
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در حذف مقادیر از جدول دسته بندی شده ها ایجاد شده است"
    );
  }
}
