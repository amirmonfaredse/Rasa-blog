"use server";

import { revalidatePath } from "next/cache";
import {
  serviceCreateBlog,
  serviceCreateCategory,
  serviceDeleteBlog,
  serviceDeleteCategory,
  serviceGetBlog,
  serviceGetCategory,
  serviceUpdateBlog,
  serviceUpdateCategory,
} from "./blogServices";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import {
  sanitizeHTMLOnServer,
  sanitizeTextOnServer,
} from "@/app/utility/jsDOM";

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

// ACTION for POST / New Post
export async function actionCreateBlog(formData) {
  await secureAccess();
  const categories = formData.getAll("blogCategory");
  const securedCategories = await categories.map((cat) => {
    return sanitizeTextOnServer(cat);
  });
  const newBlogFields = {
    author: "امیررضا منفرد",
    categories: securedCategories,
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
  };
  await serviceCreateBlog(newBlogFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  redirect("dashboard/");
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
