"use server";
import { ToastType } from "@/types/app/admin/store";
import {
  extractBlogFields,
  handleCategorizing,
  handleTagging,
  revalidateBlogs,
} from "_lib/utility/blogs.utils";
import { revalidatePath } from "next/cache";
import { ActionResult } from "next/dist/server/app-render/types";
import {
  BlogFieldProps,
  newCategorizingFieldProps,
  TaggingFieldProps,
  UpdatedFieldsProps,
} from "../../../types/app/data/types";
import {
  sanitizeHTMLOnServer,
  sanitizeTextOnServer,
} from "../../utility/jsDOM";
import {
  idRand,
  secureAccess,
  secureAList,
  secureTagList,
  validateUrl,
} from "../utility";
import {
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "./blogServices";
import {
  categorize,
  deleteCategorized,
  getCategory,
} from "./categories/categories.services";
import {
  deleteTagged,
  getTag,
  tagging,
} from "./tags/tags.services";

// ACTION for POST / New Post

export async function actionCreateBlog(
  _: any,
  formData: FormData
): Promise<ActionResult> {
  await secureAccess();
  const blogId = idRand();
  const blogFields: BlogFieldProps = extractBlogFields(formData, blogId);
  const blogCreated = await createBlog(blogFields);
  revalidateBlogs();
  if (blogCreated) {
    await handleCategorizing(formData, blogId);
    await handleTagging(formData, blogId);
  }

  return {
    type: ToastType.Success,
    message: "پست جدید با موفقیت ایجاد شد",
  };
}
// ACTION for PUT / Edit Post
export async function actionUpdateBlog(_: any, formData: FormData) {
  await secureAccess();
  const blogId: string = formData.get("id") as string;
  const blog = await getBlog(blogId);
  if (!blog) throw new Error("پست مورد نظر وجود ندارد");
  const image = encodeURI(formData.get("blogImage") as string);
  validateUrl(image);
  const getTags = JSON.parse(formData.get("blogTags") as string);

  const updatedFields: UpdatedFieldsProps = {
    id: blogId,
    author: "امیررضا منفرد",
    description: sanitizeTextOnServer(
      formData.get("blogDescription") as string
    ),
    title: sanitizeTextOnServer(formData.get("blogTitle") as string),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image,
  };

  const updatedBlog = await updateBlog(blogId, updatedFields);
  const tags = secureTagList(getTags);
  const categories = await secureAList(formData.getAll("blogCategory") as []);
  if (updatedBlog) {
    await deleteCategorized(blogId);
    await deleteTagged(blogId);
    try {
      let tasks = categories.map(async (catId) => {
        await getCategory(catId);
        const newCategorizingField: newCategorizingFieldProps = {
          categoryId: catId,
          blogId,
        };
        return await categorize(newCategorizingField);
      });
      const tagTasks = tags.map(async (tag) => {
        await getTag(tag.id);
        const newTaggingField: TaggingFieldProps = {
          tagId: tag.id,
          blogId,
        };
        return await tagging(newTaggingField);
      });
      tasks = [...tasks, ...tagTasks];
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

export async function actionDeleteBlog(id: string): Promise<ActionResult> {
  await secureAccess();
  const blog = await getBlog(id);
  if (!blog) throw new Error("این پست وجود ندارد");
  await deleteBlog(blog.id);
  revalidatePath("dashboard/blogs");
  return {
    status: "success",
    message: "پست با موفقیت حذف شد",
  };
}
