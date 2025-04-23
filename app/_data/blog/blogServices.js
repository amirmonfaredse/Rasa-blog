// POST / Posts

import { notFound } from "next/navigation";
import { supabase } from "../supabase";

export async function serviceCreateBlog(newBlog) {
  try {
    const { data, error, statusText } = await supabase
      .from("blogs")
      .insert([newBlog])
      .select();
    if (error) {
      return {
        error,
        errorDetail: error.message,
        message: "پست جدید ایجاد نشد",
      };
    } else {
      return {
        data,
        statusText,
        message: "پست جدید با موفقیت ایجاد شد",
      };
    }
  } catch (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ایجاد پست به وجود آمده است  مجددا تلاش کنید"
    );
  }
}

// GET / Posts
export async function serviceGetBlogs() {
  try {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "مشکلی در دریافت پست ها ایجاد شده است",
      };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید ");
  }
}
export async function serviceGetBlog(id) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select()
      .single()
      .eq("id", String(id));
    if (data === null) notFound();
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "مشکلی در دریافت پست ایجاد شده است",
      };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید ");
  }
}

// PUT / Posts
export async function serviceUpdateBlog(id, updatedFields) {
  try {
    const { data, error, statusText } = await supabase
      .from("blogs")
      .update(updatedFields)
      .eq("id", String(id));
    if (error) {
      return {
        error,
        errorDetail: error.message,
        message: "پست ویرایش نشد",
      };
    } else {
      return {
        data,
        statusText,
        message: "پست با موفقیت ویرایش شد",
      };
    }
  } catch (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ویرایش پست ایجاد شده است ، مجددا تلاش کنید"
    );
  }
}
// DELETE / Posts
export async function serviceDeleteBlog(id) {
  try {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", String(id));
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "پست حذف نشد",
      };
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}

// POST / Categories
export async function serviceCreateCategory(newCategory) {
  try {
    const { data, error, statusText } = await supabase
      .from("blogs-categories")
      .insert([newCategory]);
    if (error) {
      return {
        error,
        errorDetail: error.message,
        message: "دسته بندی ایجاد نشد",
      };
    } else {
      return {
        data,
        statusText,
        message: "دسته بندی  جدید با موفقیت اضافه شد",
      };
    }
  } catch (error) {
    console.log(err);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
// GET / Categories
export async function serviceGetCategories() {
  try {
    const { data, error } = await supabase.from("blogs-categories").select("*");
    if (error) {
      return {
        error,
        errorDetail: error.message,
        message: "بارگذاری دسته بندی ها انجام نشد",
      };
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
export async function serviceGetCategory(id) {
  try {
    const { data, error } = await supabase
      .from("blogs-categories")
      .select()
      .single()
      .eq("id", String(id));
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "بارگذاری دسته بندی انجام نشد",
      };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است ، مجددا تلاش کنید");
  }
}
// PUT / Categories
export async function serviceUpdateCategory(updatedFields, id) {
  try {
    const { data, error, statusText } = await supabase
      .from("blogs-categories")
      .update(updatedFields)
      .eq("id", String(id));
    if (error) {
      return {
        error,
        errorDetail: error.message,
        message: "دسته بندی ویرایش نشد",
      };
    } else {
      return {
        data,
        statusText,
        message: "دسته بندی با موفقیت ویرایش شد",
      };
    }
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}
// DELETE / Categories
export async function serviceDeleteCategory(id) {
  try {
    const { error } = await supabase
      .from("blogs-categories")
      .delete()
      .eq("id", String(id));
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "دسته بندی حذف نشد",
      };
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است مجددا تلاش کنید");
  }
}

export async function uploadImageFile(filePath, bufferedImage) {
  try {
    const { data, error } = await supabase.storage
      .from("blogs-images")
      .upload(filePath, bufferedImage);
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "فایل آپلود نشد",
      };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است لطفا مجددا تلاش کنید");
  }
}
export async function getImageFileURL(filePath) {
  try {
    const { data, error } = supabase.storage
      .from("blogs-images")
      .getPublicUrl(filePath);
    if (error)
      return {
        error,
        errorDetail: error.message,
        message: "در ذخیره آدرس فایل مشکلی ایجاد شده است",
      };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}
