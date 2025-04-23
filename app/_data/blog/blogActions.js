"use server";
import {
  sanitizeHTMLOnServer,
  sanitizeTextOnServer,
} from "@/app/utility/jsDOM";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import {
  getImageFileURL,
  serviceCreateBlog,
  serviceCreateCategory,
  serviceDeleteBlog,
  serviceDeleteCategory,
  serviceGetBlog,
  serviceGetCategory,
  serviceUpdateBlog,
  serviceUpdateCategory,
  uploadImageFile,
} from "./blogServices";

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

async function uploadingImage(image) {
  try {
    if (
      image.type !== "image/png" &&
      image.type !== "image/jpeg" &&
      image.type !== "image/jpg"
    )
      return {
        error: "unavaible format",
        message: "فرمت مجاز تصویر png , jpeg است",
      };
    if (image.size > 1_048_576)
      return {
        error: "unavaible size",
        message: "حداکثر حجم فایل باید کمتر از 1 مگابایت باشد",
      };
    image.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
    image.name = `${Math.floor(Math.random() * 1000)}-${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const bufferImage = Buffer.from(arrayBuffer);
    const result = await uploadImageFile(image.name, bufferImage);
    return result;
  } catch (error) {
    throw new Error("مشکلی در فرایند آپلود فایل ایجاد شده است مجددا تلاش کنید");
  }
}
// ACTION for POST / New Post
export async function actionCreateBlog(formData) {
  await secureAccess();
  const securedCategories = await formData.getAll("blogCategory").map((cat) => {
    return sanitizeTextOnServer(cat);
  });
  let image = formData.get("blogImage");
  if (image.size > 0) image = await uploadingImage(image);
  const imageURL = image ? await getImageFileURL(image.name) : "";
  // Change | Give image to a function and
  const newBlogFields = {
    author: "امیررضا منفرد",
    categories: securedCategories,
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image: imageURL,
  };
  await serviceCreateBlog(newBlogFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  redirect("/dashboard/blogs/all");
}
// ACTION for PUT / Edit Post
export async function actionUpdateBlog(formData) {
  await secureAccess();
  const blogId = Number(formData.get("id"));
  const blog = await serviceGetBlog(blogId);
  if (!blogId) throw new Error("پست مورد نظر وجود ندارد");
  if (!blog) throw new Error("پست مورد نظر وجود ندارد");
  const categories = formData.getAll("blogCategory");
  const securedCategories = await categories.map((cat) => {
    return sanitizeTextOnServer(cat);
  });
  const updatedFields = {
    id: blogId,
    author: "امیررضا منفرد",
    categories: securedCategories,
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
  };
  await serviceUpdateBlog(blogId, updatedFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  redirect("/dashboard/blogs/all");
}
// ACTION for DELETE / Delete Post

export async function actionDeleteBlog(id) {
  await secureAccess();
  const blog = await serviceGetBlog(Number(id));
  if (!blog) throw new Error("این پست وجود ندارد");
  await serviceDeleteBlog(blog.id);
  revalidatePath("dashboard/blogs");
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
  redirect("/dashboard/blogs/categories");
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
}
