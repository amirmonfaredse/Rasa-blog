"use server";
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
  getPersianDate,
  idRand,
  secureAccess,
  secureAList,
  secureTagList,
  validateUrl,
} from "../utility";
import {
  serviceCreateBlog,
  serviceDeleteBlog,
  serviceGetBlog,
  serviceUpdateBlog,
} from "./blogServices";
import {
  serviceCategorizing,
  serviceDeleteRelationalCategorizeds,
  serviceGetCategory,
} from "./categories/categories.services";
import {
  serviceDeleteRelationalTagged,
  serviceGetTag,
  serviceTagging,
} from "./tags/tags.services";

// ACTION for POST / New Post

export async function actionCreateBlog(
  _: any,
  formData: FormData
): Promise<ActionResult> {
  await secureAccess();
  const blogId = idRand();
  const newBlogFields: BlogFieldProps = {
    id: blogId,
    created_at: getPersianDate(),
    author: "امیررضا منفرد",
    title: sanitizeTextOnServer(formData.get("blogTitle") as string),
    description: sanitizeTextOnServer(
      formData.get("blogDescription") as string
    ),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image:
      (await validateUrl(encodeURI(formData.get("blogImage") as string))) &&
      encodeURI(formData.get("blogImage") as string),
  };
  const createdBlog = await serviceCreateBlog(newBlogFields);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");

  const categories = await secureAList(formData.getAll("blogCategory") as []);
  const tagsString = JSON.parse(formData.get("blogTags") as string);
  const tags = secureTagList(tagsString);
  if (createdBlog) {
    try {
      let tasks = categories.map(async (catId: string) => {
        await serviceGetCategory(catId);
        const newCategorizingField: newCategorizingFieldProps = {
          categoryId: catId,
          blogId,
        };
        return await serviceCategorizing(newCategorizingField);
      });
      // CHANGE : TYPE OF tag MUST CHANGE
      const tagTasks = tags.map(async (tag: any) => {
        await serviceGetTag(tag.id);
        const newTaggingField: TaggingFieldProps = {
          tagId: tag.id,
          blogId,
        };
        return await serviceTagging(newTaggingField);
      });
      tasks = [...tasks, ...tagTasks];
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
export async function actionUpdateBlog(_: any, formData: FormData) {
  await secureAccess();
  const blogId: string = formData.get("id") as string;
  const blog = await serviceGetBlog(blogId);
  if (!blog) throw new Error("پست مورد نظر وجود ندارد");
  const image = encodeURI(formData.get("blogImage") as string);
  await validateUrl(image);

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

  const updatedBlog = await serviceUpdateBlog(blogId, updatedFields);
  const tags = secureTagList(getTags);
  const categories = await secureAList(formData.getAll("blogCategory") as []);
  if (updatedBlog) {
    await serviceDeleteRelationalCategorizeds(blogId);
    await serviceDeleteRelationalTagged(blogId);
    try {
      let tasks = categories.map(async (catId) => {
        await serviceGetCategory(catId);
        const newCategorizingField: newCategorizingFieldProps = {
          categoryId: catId,
          blogId,
        };
        return await serviceCategorizing(newCategorizingField);
      });
      const tagTasks = tags.map(async (tag) => {
        await serviceGetTag(tag.id);
        const newTaggingField: TaggingFieldProps = {
          tagId: tag.id,
          blogId,
        };
        return await serviceTagging(newTaggingField);
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
  const blog = await serviceGetBlog(id);
  if (!blog) throw new Error("این پست وجود ندارد");
  await serviceDeleteBlog(blog.id);
  revalidatePath("dashboard/blogs");
  return {
    status: "success",
    message: "پست با موفقیت حذف شد",
  };
}
