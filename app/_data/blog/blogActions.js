"use server";
import {
  sanitizeHTMLOnServer,
  sanitizeTextOnServer,
} from "@/app/utility/jsDOM";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import {
  serviceCreateBlog,
  serviceCreateCategory,
  serviceDeleteBlog,
  serviceDeleteCategory,
  serviceGetBlog,
  serviceGetCategory,
  serviceGetImageFileURL,
  serviceUpdateBlog,
  serviceUpdateCategory,
  serviceUploadFile,
} from "./blogServices";

const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];


async function secureAList(list) {
  return list.map((item) => sanitizeTextOnServer(item));
}
async function secureAccess() {
  const session = await auth();
  if (!session)
    throw new Error("برای انجام این اقدام باید وارد اکانت خود شوید");
  const allowedEmails = process.env.ALLOWED_EMAILS?.split(",");
  if (!allowedEmails) throw new Error("تنظیمات سرور ناقص است");
  const isUserValid = allowedEmails.some(
    (email) => session.user.email === email
  );
  if (!isUserValid) throw new Error("شما مجاز به انجام این اقدام نیستید");
}
// return Result
async function uploadingImage(image) {
  try {
    if (!allowedImageTypes.includes(image.type))
      return {
        status: "error",
        message: "فرمت مجاز تصاویر png , jpg , jpeg است",
      };
    if (image.size > 1_048_576)
      return {
        status: "error",
        message: "حداکثر حجم فایل باید کمتر از 1 مگابایت باشد",
      };
    image.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
    const arrayBuffer = await image.arrayBuffer();
    const bufferImage = Buffer.from(arrayBuffer);
    await serviceUploadFile(image.name, bufferImage);
    return await serviceGetImageFileURL(image.name);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در فرایند آپلود فایل ایجاد شده است مجددا تلاش کنید");
  }
}

// ACTION for POST / New Post
export async function actionCreateBlog(_, formData) {
  await secureAccess();
  const categories = formData.getAll("blogCategory");
  const securedCategories = await secureAList(categories);
  const image = formData.get("blogImage");
  const uploadResult = image.size > 0 && (await uploadingImage(image));
  if (uploadResult.status) return uploadResult;
  const newBlogFields = {
    author: "امیررضا منفرد",
    categories: securedCategories,
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image: uploadResult ?? "",
  };
  await serviceCreateBlog(newBlogFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  return {
    status: "success",
    message: "پست جدید با موفقیت ایجاد شد",
  };
}
// ACTION for PUT / Edit Post
export async function actionUpdateBlog(_,formData) {
  await secureAccess();
  const blogId = Number(formData.get("id"));
  const blog = await serviceGetBlog(blogId);
  if (!blogId) throw new Error("پست مورد نظر وجود ندارد");
  if (!blog) throw new Error("پست مورد نظر وجود ندارد");
  const securedCategories = await secureAList(formData.getAll("blogCategory"));
  const image = formData.get("blogImage");
  const uploadResult = image.size > 0 && (await uploadingImage(image));
  if (uploadResult.message) return uploadResult;
  const updatedFields = {
    id: blogId,
    author: "امیررضا منفرد",
    categories: securedCategories,
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
  };
  if (uploadResult) updatedFields.image = uploadResult;
  await serviceUpdateBlog(blogId, updatedFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  return {
    status: "success",
    message: "پست با موفقیت ویرایش شد",
  };
}
// ACTION for DELETE / Delete Post

export async function actionDeleteBlog(id) {
  await secureAccess();
  const blog = await serviceGetBlog(Number(id));
  if (!blog) throw new Error("این پست وجود ندارد");
  await serviceDeleteBlog(blog.id);
  revalidatePath("dashboard/blogs");
  return {
    status: "success",
    message: "پست با موفقیت حذف شد",
  };
}

// ACTION for POST / New Category
export async function actionCreateCategory(formData) {
  await secureAccess();
  const newCategoryFields = {
    title: sanitizeTextOnServer(formData.get("categoryTitle")),
    name: sanitizeTextOnServer(formData.get("categoryValue")),
    root: "",
    subCategories: "",
  };
  await serviceCreateCategory(newCategoryFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/categories");
  return {
    status: "success",
    message: "دسته بندی با موفقیت ایجاد شد",
  };
}
// ACTION for PUT / Edit Category
export async function actionUpdateCategory(formData) {
  await secureAccess();
  const categoryId = Number(formData.get("id"));
  const category = serviceGetCategory(categoryId);
  if (!category) throw new Error("دسته بندی مورد نظر وجود ندارد");
  const updatedFields = {
    title: sanitizeTextOnServer(formData.get("categoryTitle")),
    name: sanitizeTextOnServer(formData.get("categoryValue")),
    root: "",
    subCategories: "",
  };
  await serviceUpdateCategory(updatedFields, categoryId);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/categories");
  return {
    status: "success",
    message: "دسته بندی با موفقیت ویرایش شد ",
  };
}
// ACTION for DELETE / Delete Category
export async function actionDeleteCategory(id) {
  await secureAccess();
  const category = await serviceGetCategory(id);
  if (!category) throw new Error("دسته بندی مورد نظر وجود ندارد");
  await serviceDeleteCategory(id);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/categories");
  return {
    status: "success",
    message: "دسته بندی با موفقیت حذف شد ",
  };
}
