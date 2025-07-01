import { notFound } from "next/navigation";
import {
  BlogFieldProps,
  UpdatedFieldsProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

// POST / Post
export async function serviceCreateBlog(
  newBlog: BlogFieldProps
): Promise<void> {
  const { error } = await supabase.from("blog").insert([newBlog]);

  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ایجاد پست به وجود آمده است  مجددا تلاش کنید"
    );
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
): Promise<void> {
  const { error } = await supabase
    .from("blog")
    .update(updatedFields)
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ویرایش پست ایجاد شده است ، مجددا تلاش کنید"
    );
  }
}
// DELETE / Post
export async function serviceDeleteBlog(blogId: string): Promise<void> {
  const { error } = await supabase.from("blog").delete().eq("id", blogId);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}
