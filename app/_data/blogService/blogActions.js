"use server";

import { revalidatePath } from "next/cache";
import {
  createBlogPost,
  deleteBlog,
  getBlog,
  updateBlog,
} from "./blogServices";

export async function actionCreateBlog(formData) {
  const newBlogFields = {
    author: "امیررضا منفرد",
    categories: formData.get("blogCategory"),
    title: formData.get("blogTitle"),
    content: formData.get("textEditor"),
  };
  await createBlogPost(newBlogFields);
  revalidatePath("dashboard/blog");
  revalidatePath("dashboard/blog/new");
  revalidatePath("dashboard/blog/all");
  redirect("/dashboard/blog/all");
}

export async function actionUpdateBlog(formData) {
  const blogId = Number(formData.get("id"));
  const blog = await getBlog(blogId);
  if (!blogId) throw new Error("پست مورد نظر وجود ندارد");
  const updatedFields = {
    id: String(blogId),
    author: "امیررضا منفرد",
    categories: formData.get("blogCategory"),
    title: formData.get("blogTitle"),
    content: formData.get("textEditor"),
  };
  await updateBlog(blogId, updatedFields);
  revalidatePath("dashboard/blog");
  revalidatePath("dashboard/blog/new");
  revalidatePath("dashboard/blog/all");
  redirect("/dashboard/blog/all");
}

export async function actionDeleteBlog(id) {
  const blog = await getBlog(id);
  if (!blog) throw new Error("این پست وجود ندارد");
  await deleteBlog(blog.id);
  revalidatePath("dashboard/blog");
}
