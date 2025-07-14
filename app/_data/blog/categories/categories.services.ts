import { ToastType } from "@/types/app/admin/store";
import {
  ActionResult,
  CategoryFieldProps,
  getCategorizedServiceProps,
  getCategoryServiceProps,
} from "@/types/app/data/types";

import { supabase } from "_data/supabase";

// POST / Category
export async function serviceCreateCategory(
  newCategory: CategoryFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("blog-categories").insert([newCategory]);
    return {
      type: ToastType.Success,
      message: "دسته بندی با موفقیت ایجاد شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Success,
      message: "مشکلی ایجاد شده است مجددا تلاش کنید",
      error,
    };
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
): Promise<ActionResult> {
  try {
    await supabase.from("blog-categories").update(updatedFields).eq("id", id);
    return {
      type: ToastType.Success,
      message: "دسته بندی بروزرسانی شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در بروزرسانی دسته بندی ایجاد شده است",
      error,
    };
  }
}
// DELETE / Category
export async function serviceDeleteCategory(id: string): Promise<ActionResult> {
  try {
    await supabase.from("blog-categories").delete().eq("id", id);
    return {
      type: ToastType.Success,
      message: "دسته بندی با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در حذف کردن دسته بندی ایجاد شده است",
    };
  }
}
export async function serviceCategorizing(
  newField: getCategorizedServiceProps
): Promise<ActionResult | boolean> {
  try {
    await supabase.from("categorizing-blogs").insert([newField]);
    return true;
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "در فرایند دسته بندی کردن مشکلی ایجاد شده است",
    };
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
): Promise<ActionResult> {
  try {
    await supabase.from("categorizing-blogs").delete().eq("blogId", blogId);
    return {
      type: ToastType.Success,
      message: "دسته بندی به درستی حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در حذف مقادیر از جدول دسته بندی شده ها ایجاد شده است",
    };
  }
}
