import { notFound } from "next/navigation";
import {
  ActionResult,
  BlogFieldProps,
  UpdatedFieldsProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";
import { ToastType } from "@/types/app/admin/store";

// POST / Post
export async function serviceCreateBlog(
  newBlog: BlogFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("blog").insert([newBlog]);
    return {
      type: ToastType.Success,
      message: "پست جدید با موفقیت ایجاد شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند ایجاد پست به وجود آمده است  مجددا تلاش کنید",
      error,
    };
  }
}

// GET / Posts

export async function serviceGetBlogs(): Promise<BlogFieldProps[]> {
  const { data, error } = await supabase.from("blog").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید ");
  }
  return data;
}
// GET / Post
export async function serviceGetBlog(id: string): Promise<BlogFieldProps> {
  const { data, error } = await supabase
    .from("blog")
    .select()
    .eq("id", id)
    .single();
  if (data === null) notFound();
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید ");
  }
  return data;
}
// PUT / Post
export async function serviceUpdateBlog(
  id: string,
  updatedFields: UpdatedFieldsProps
): Promise<ActionResult> {
  try {
    await supabase.from("blog").update(updatedFields).eq("id", id);
    return {
      type: ToastType.Success,
      message: "پست بروزرسانی شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند ویرایش پست ایجاد شده است ، مجددا تلاش کنید",
      error,
    };
  }
}
// DELETE / Post
export async function serviceDeleteBlog(blogId: string): Promise<ActionResult> {
  try {
    await supabase.from("blog").delete().eq("id", blogId);
    return {
      type: ToastType.Success,
      message: "پست با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در حذف بلاگ ایجاد شده است",
      error,
    };
  }
}
