import { ToastType } from "@/types/app/admin/store";
import {
  BlogFieldProps,
  newCategorizingFieldProps,
  TagFieldProps,
  TaggingFieldProps,
} from "@/types/app/data/types";
import {
  serviceCategorizing,
  serviceGetCategory,
} from "_data/blog/categories/categories.services";
import { serviceGetTag, serviceTagging } from "_data/blog/tags/tags.services";
import {
  getPersianDate,
  idRand,
  secureAList,
  secureTagList,
  validateUrl,
} from "_data/utility";
import { revalidatePath } from "next/cache";
import { ActionResult } from "next/dist/server/app-render/types";
import { sanitizeHTMLOnServer, sanitizeTextOnServer } from "utility/jsDOM";

export function extractBlogFields(
  formData: FormData,
  blogId: string
): BlogFieldProps {
  return {
    id: blogId,
    created_at: getPersianDate(),
    author: "امیررضا منفرد",
    title: sanitizeTextOnServer(formData.get("blogTitle") as string),
    description: sanitizeTextOnServer(
      formData.get("blogDescription") as string
    ),
    content: sanitizeHTMLOnServer(formData.get("textEditor")),
    image: validateUrl(formData.get("blogImage") as string),
  };
}
export function revalidateBlogs() {
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/all");
}
export function extractCategorizingFields(
  catId: string,
  blogId: string
): newCategorizingFieldProps {
  return {
    categoryId: catId,
    blogId: blogId,
  };
}

export async function handleCategorizing(
  formData: FormData,
  blogId: string
): Promise<ActionResult> {
  try {
    const categories = await secureAList(formData.getAll("blogCategory") as []);
    const categoriesTasks = categories.map(async (catId: string) => {
      try {
        await serviceGetCategory(catId);
        const newFields = extractCategorizingFields(catId, blogId);
        return serviceCategorizing(newFields);
      } catch (error) {
        return {
          type: ToastType.Error,
          message: "دسته بندی کردن پست با مشکل روبه رو شده است",
          error,
        };
      }
    });
    await Promise.all([...categoriesTasks]);
    return {
      type: ToastType.Success,
      message: "دسته بندی با موفقیت تکمیل شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "دسته بندی کردن پست با مشکل روبه رو شده است",
      error,
    };
  }
}
export function extractTaggingFields(
  tagId: string,
  blogId: string
): TaggingFieldProps {
  return { id: idRand(), tagId, blogId };
}
export async function handleTagging(formData: FormData, blogId: string) {
  try {
    const tagsString = JSON.parse(formData.get("blogTags") as string);
    const tags = await secureTagList(tagsString);
    const tagTasks = tags.map(async (tag: TagFieldProps) => {
      await serviceGetTag(tag.id);
      const newField = extractTaggingFields(tag.id, blogId);
      return serviceTagging(newField);
    });
    await Promise.all([...tagTasks]);
    return {
      type: ToastType.Success,
      message: "برچسب گذاری با موفقیت انجام شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "برچسب گذاری با مشکل روبه رو شده است",
    };
  }
}
