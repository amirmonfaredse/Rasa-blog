import { notFound } from "next/navigation";
import { supabase } from "../supabase";

// POST / Post
export async function serviceCreateBlog(newBlog) {
  const { data, error } = await supabase
    .from("blog")
    .insert([newBlog])
    .select();
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
export async function serviceGetBlog(id) {
  const { data, error } = await supabase
    .from("blog")
    .select()
    .single()
    .eq("id", String(id));
  if (data === null) notFound();
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید ");
  }
  return data;
}
// PUT / Post
export async function serviceUpdateBlog(id, updatedFields) {
  const { data, error } = await supabase
    .from("blog")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ویرایش پست ایجاد شده است ، مجددا تلاش کنید"
    );
  }
  return data;
}
// DELETE / Post
export async function serviceDeleteBlog(blogId) {
  const { error } = await supabase
    .from("blog")
    .delete()
    .eq("id", String(blogId));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}
// POST / Category
export async function serviceCreateCategory(newCategory) {
  const { data, error } = await supabase
    .from("blog-categories")
    .insert([newCategory]);
  if (error) {
    console.log(err);
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
export async function serviceGetCategory(id) {
  const { data, error } = await supabase
    .from("blog-categories")
    .select()
    .single()
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید");
  }

  return data;
}
// PUT / Category
export async function serviceUpdateCategory(updatedFields, id) {
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
export async function serviceDeleteCategory(id) {
  const { error } = await supabase
    .from("blog-categories")
    .delete()
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}

export async function serviceCreateTag(newTag) {
  const { status, error } = await supabase.from("tags").insert([newTag]);
  if (error) throw new Error("در ایجاد برچسب مشکلی پیش آمده است");
  return status;
}
export async function serviceGetTags() {
  const { data, error } = await supabase.from("tags").select("*");
  if (error) throw new Error("مشکلی در دریافت  برچسب ها ایجاد شده است");
  return data;
}

export async function serviceGetTag(slug) {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .single()
    .eq("slug", slug);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت  برچسب ایجاد شده است");
  }
  return data;
}

export async function serviceUpdateTag(updatedField, slug) {
  const { status, error } = await supabase
    .from("tags")
    .update(updatedField)
    .eq("slug", String(slug));
  if (error) throw new Error("مشکلی در بروزرسانی  برچسب ایجاد شده است");
  return status;
}
export async function serviceDeleteTag(slug) {
  const { error } = await supabase
    .from("tags")
    .delete()
    .eq("slug", String(slug));
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

export async function serviceGetCategorizeds(blogId) {
  const { data, error } = await supabase
    .from("categorizing-blogs")
    .select()
    .eq("blogId", blogId);
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت دسته بندی ها ایجاد شده است");
  }
  return data;
}
