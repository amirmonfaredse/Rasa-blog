import { notFound } from "next/navigation";
import { supabase } from "../supabase";

export async function serviceCreateBlog(newBlog) {
  const { data, error, status } = await supabase
    .from("blogs")
    .insert([newBlog])
    .select();
  if (error) {
    throw new Error(
      "مشکلی در فرایند ایجاد پست به وجود آمده است  مجددا تلاش کنید"
    );
  }
  return status;
}

// GET / Posts
export async function serviceGetBlogs() {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید ");
  }
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
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید ");
  }
  return data;
}

// PUT / Posts
export async function serviceUpdateBlog(id, updatedFields) {
  const { data, error, statusText } = await supabase
    .from("blogs")
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
// DELETE / Posts
export async function serviceDeleteBlog(id) {
  const { error } = await supabase.from("blogs").delete().eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}

// POST / Categories
export async function serviceCreateCategory(newCategory) {
  const { data, error, statusText } = await supabase
    .from("blogs-categories")
    .insert([newCategory]);
  if (error) {
    console.log(err);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
// GET / Categories
export async function serviceGetCategories() {
  const { data, error } = await supabase.from("blogs-categories").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
export async function serviceGetCategory(id) {
  const { data, error } = await supabase
    .from("blogs-categories")
    .select()
    .single()
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید");
  }

  return data;
}
// PUT / Categories
export async function serviceUpdateCategory(updatedFields, id) {
  const { data, error, statusText } = await supabase
    .from("blogs-categories")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
  return data;
}
// DELETE / Categories
export async function serviceDeleteCategory(id) {
  const { error } = await supabase
    .from("blogs-categories")
    .delete()
    .eq("id", String(id));
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}

export async function serviceUploadFile(filePath, bufferedImage) {
  const { data, error } = await supabase.storage
    .from("blogs-images")
    .upload(filePath, bufferedImage);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است لطفا مجددا تلاش کنید");
  }
  return data;
}
export async function serviceGetImageFileURL(filePath) {
  const { data, error } = supabase.storage
    .from("blogs-images")
    .getPublicUrl(filePath);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
  return data.publicUrl;
}
