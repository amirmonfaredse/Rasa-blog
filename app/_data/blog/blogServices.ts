import { notFound } from "next/navigation";
import { supabase } from "../supabase";
import {
  newBlogFieldProps,
  TagFieldProps,
  CategoryFieldProps,
  UpdatedFieldsProps,
} from "../../../types/app/data/types";

// POST / Post
export async function serviceCreateBlog(
  newBlog: newBlogFieldProps
): Promise<newBlogFieldProps> {
  const { data, error } = await supabase
    .from("blog")
    .insert([newBlog])
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ایجاد پست به وجود آمده است  مجددا تلاش کنید"
    );
  }
  return data;
}

// GET / Posts
export async function serviceGetBlogs() {
  const { data, error } = await supabase.from("blog").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید ");
  }
  return data;
}
// GET / Post
export async function serviceGetBlog(id: string): Promise<any> {
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
): Promise<any> {
  const { data, error } = await supabase
    .from("blog")
    .update(updatedFields)
    .eq("id", id)
    .select();
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ویرایش پست ایجاد شده است ، مجددا تلاش کنید"
    );
  }
  return data;
}
// DELETE / Post
export async function serviceDeleteBlog(blogId: string): Promise<void> {
  const { error } = await supabase.from("blog").delete().eq("id", blogId);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}
// POST / Category
export async function serviceCreateCategory(
  newCategory: CategoryFieldProps
): Promise<any> {
  const { data, error } = await supabase
    .from("blog-categories")
    .insert([newCategory]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
// GET / Categories
export async function serviceGetCategories() {
  const { data, error } = await supabase.from("blog-categories").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
// CHANGE Promise<any>
export async function serviceGetCategory(catId: string): Promise<any> {
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
): Promise<any> {
  const { data, error } = await supabase
    .from("blog-categories")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
// DELETE / Category
export async function serviceDeleteCategory(id: string): Promise<void> {
  const { error } = await supabase
    .from("blog-categories")
    .delete()
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}

export async function serviceCreateTag(newTag: TagFieldProps): Promise<void> {
  const { data, error } = await supabase.from("tags").insert([newTag]);
  if (error) throw new Error("در ایجاد برچسب مشکلی پیش آمده است");
}
export async function serviceGetTags() {
  const { data, error } = await supabase.from("tags").select("*");
  if (error) throw new Error("مشکلی در دریافت  برچسب ها ایجاد شده است");
  return data;
}

export async function serviceGetTag(tagId: string): Promise<any> {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("id", tagId)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت  برچسب ایجاد شده است");
  }
  return data;
}

export async function serviceUpdateTag(
  updatedField: TagFieldProps,
  id: string
): Promise<any> {
  const { data, error } = await supabase
    .from("tags")
    .update(updatedField)
    .eq("id", Number(id));
  if (error) throw new Error("مشکلی در بروزرسانی  برچسب ایجاد شده است");
  return data;
}
export async function serviceDeleteTag(id: string): Promise<void> {
  const { error } = await supabase.from("tags").delete().eq("id", id);
  if (error) throw new Error("در حذف برچسب مشکلی ایجاد شده است");
}

export async function serviceCategorizing(newField) {
  const { error } = await supabase
    .from("categorizing-blogs")
    .insert([newField]);
  if (error) {
    console.log(error);
    throw new Error("در فرایند دسته بندی کردن مشکلی ایجاد شده است");
  }
}

export async function serviceGetCategorizeds() {
  const { data, error } = await supabase.from("categorizing-blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت دسته بندی ها ایجاد شده است");
  }
  return data;
}
export async function serviceDeleteRelationalCategorizeds(blogId) {
  const { error } = await supabase
    .from("categorizing-blogs")
    .delete()
    .eq("blogId", Number(blogId));
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در حذف مقادیر از جدول دسته بندی شده ها ایجاد شده است"
    );
  }
}
export async function serviceTagging(newField) {
  const { error } = await supabase.from("tagging-blogs").insert([newField]);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در فرآیند تگ زدن ایجاد شده است");
  }
}
export async function serviceDeleteRelationalTagged(blogId) {
  const { error } = await supabase
    .from("tagging-blogs")
    .delete()
    .eq("blogId", Number(blogId));
  if (error) {
    console.log(error);
    throw new Error("مشکلی در حذف مقادیر تگ شده ها ایجاد شده است");
  }
}
export async function serviceGetTaggeds() {
  const { data, error } = await supabase.from("tagging-blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت تگ ها ایجاد شده است");
  }
  return data;
}

export async function serviceGetTagBySlug(slug: string) {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("slug", slug)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت تگ ایجاد شده است");
  }
  return data;
}
