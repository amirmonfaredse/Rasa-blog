"use server";
import persianDate from "persian-date";

import {
  sanitizeHTMLOnServer,
  sanitizeTextOnServer,
} from "@/app/utility/jsDOM";
import { revalidatePath } from "next/cache";
import { secureAccess, secureAList, secureTagList } from "../utility";
import {
  serviceCategorizing,
  serviceCreateBlog,
  serviceCreateCategory,
  serviceCreateTag,
  serviceDeleteBlog,
  serviceDeleteCategory,
  serviceDeleteRelationalCategorizeds,
  serviceDeleteRelationalTagged,
  serviceDeleteTag,
  serviceGetBlog,
  serviceGetCategorizeds,
  serviceGetCategory,
  serviceGetTag,
  serviceTagging,
  serviceUpdateBlog,
  serviceUpdateCategory,
} from "./blogServices";

// return Result
async function validateUrl(image) {
  try {
    new URL(image);
    return true;
  } catch (error) {
    throw new Error("لینک تصویر مجاز نیست");
  }
}

function uuId() {
  return Math.floor(Math.random() * 10000);
}
function getPersianDate() {
  return new persianDate(new Date()).format("MMMM,D");
}
// ACTION for POST / New Post
export async function actionCreateBlog(_, formData) {
  await secureAccess();
  const created_at = await getPersianDate();
  const image = encodeURI(formData.get("blogImage"));
  const getTags = JSON.parse(formData.get("blogTags"));

  const blogId = uuId();
  await validateUrl(image);
  const newBlogFields = {
    id: blogId,
    created_at,
    author: "امیررضا منفرد",
    title: sanitizeTextOnServer(formData.get("blogTitle")).trim(),
    description: sanitizeTextOnServer(formData.get("blogDescription").trim()),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image,
  };
  const createdBlog = await serviceCreateBlog(newBlogFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
  const categories = await secureAList(formData.getAll("blogCategory"));
  const tags = await secureTagList(getTags);
  if (createdBlog) {
    try {
      let tasks = categories.map(async (catId) => {
        await serviceGetCategory(catId);
        const newCategorizingField = {
          categoryId: Number(catId),
          blogId,
        };
        return await serviceCategorizing(newCategorizingField);
      });
      const tagTasks = tags.map(async (tag) => {
        await serviceGetTag(tag.id);
        const newTaggingField = {
          tagId: Number(tag.id),
          blogId,
        };
        return await serviceTagging(newTaggingField);
      });
      tasks = [...tasks, tagTasks];
      await Promise.all(tasks);
    } catch (error) {
      return {
        status: "error",
        message:
          "پست جدید اضافه شد، اضافه کردن دسته بندی با مشکل همراه شده است",
      };
    }
  }

  return {
    status: "success",
    message: "پست جدید با موفقیت ایجاد شد",
  };
}
// ACTION for PUT / Edit Post
export async function actionUpdateBlog(_, formData) {
  await secureAccess();
  const blogId = Number(formData.get("id"));
  const blog = await serviceGetBlog(blogId);
  if (!blogId) throw new Error("پست مورد نظر وجود ندارد");
  if (!blog) throw new Error("پست مورد نظر وجود ندارد");
  const image = encodeURI(formData.get("blogImage"));
  await validateUrl(image);

  const getTags = JSON.parse(formData.get("blogTags"));
  const updatedFields = {
    id: blogId,
    author: "امیررضا منفرد",
    description: sanitizeTextOnServer(formData.get("blogDescription").trim()),
    title: sanitizeTextOnServer(formData.get("blogTitle")),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image,
  };

  const updatedBlog = await serviceUpdateBlog(blogId, updatedFields);
  const tags = await secureTagList(getTags);
  const categories = await secureAList(formData.getAll("blogCategory"));
  if (updatedBlog) {
    await serviceDeleteRelationalCategorizeds(blogId);
    await serviceDeleteRelationalTagged(blogId);
    try {
      let tasks = categories.map(async (catId) => {
        await serviceGetCategory(catId);
        const newCategorizingField = {
          categoryId: Number(catId),
          blogId,
        };
        return await serviceCategorizing(newCategorizingField);
      });
      const tagTasks = tags.map(async (tag) => {
        await serviceGetTag(tag.id);
        const newTaggingField = {
          tagId: Number(tag.id),
          blogId,
        };
        return await serviceTagging(newTaggingField);
      });
      tasks = [...tasks, tagTasks];
      await Promise.all(tasks);
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message:
          "پست جدید اضافه شد، اضافه کردن دسته بندی با مشکل همراه شده است",
      };
    }
  }
  revalidatePath("dashboard/blog");
  revalidatePath("dashboard/blog/new");
  revalidatePath("dashboard/blog/all");
  revalidatePath(`dashboard/blog/${blogId}`);
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
    title: sanitizeTextOnServer(formData.get("categoryTitle").trim()),
    name: sanitizeTextOnServer(formData.get("categoryValue").trim()),
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
    title: sanitizeTextOnServer(formData.get("categoryTitle").trim()),
    name: sanitizeTextOnServer(formData.get("categoryValue").trim()),
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

export async function actionCreateTag(formData) {
  await secureAccess();
  const newField = {
    title: sanitizeHTMLOnServer(formData.get("tagTitle")),
    slug: sanitizeHTMLOnServer(formData.get("tagSlug")),
  };
  await serviceCreateTag(newField);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت ایجاد شد",
  };
}

export async function actionUpdateTag(formData) {
  await secureAccess();
  const tagId = Number(formData.get("id"));
  const tag = serviceGetTag(tagId);
  if (!tag) throw new Error("برچسب مورد نظر وجود ندارد");
  const updatedFields = {
    title: sanitizeTextOnServer(formData.get("tagTitle")),
    slug: sanitizeTextOnServer(formData.get("tagSlug")),
  };
  await serviceUpdateCategory(updatedFields, tagId);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت ویرایش شد",
  };
}

export async function actionDeleteTag(slug) {
  await secureAccess();
  const tag = await serviceGetTag(slug);
  if (!tag) throw new Error("برچسب مورد نظر وجود ندارد");
  await serviceDeleteTag(slug);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت حذف شد ",
  };
}
