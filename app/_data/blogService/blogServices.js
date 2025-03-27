
// POST

export async function serviceCreateBlog(newBlog) {
  const { data, error } = await supabase.from("blogs").insert([newBlog]);
  if (error) throw new Error("پست جدید ایجاد نشد");
  return data;
}

// GET
export async function getBlogs() {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) throw new Error("مشکلی در دریافت بلاگ ها ایجاد شده است");
  return data;
}
export async function getBlog(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select()
    .single()
    .eq("id", String(id));
  if (error) throw new Error("مشکلی در دریافت  بلاگ ایجاد شده است");
  return data;
}


// PUT
export async function updateBlog(id, updatedFields) {
  const { data, error } = await supabase
    .from("blogs")
    .update(updatedFields)
    .eq("id", String(id));
  if (error) throw new Error("پست ویرایش نشد");
  return data;
}

// DELETE
export async function deleteBlog(id) {
  const { error } = await supabase.from("blogs").delete().eq("id", String(id));
  if (error) throw new Error("پست وبلاگ حذف نشد");
}
