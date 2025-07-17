import { revalidatePath } from "next/cache";
import {
  createTag,
  deleteTag,
  getTag,
  updateTag,
} from "./tags.services";
import { secureAccess } from "_data/utility";
import { ActionResult } from "next/dist/server/app-render/types";
import { sanitizeHTMLOnServer, sanitizeTextOnServer } from "utility/jsDOM";
import { TagFieldProps } from "@/types/app/data/types";

export async function actionCreateTag(formData: FormData): ActionResult {
  await secureAccess();

  const newField: TagFieldProps = {
    title: sanitizeHTMLOnServer(formData.get("tagTitle")),
    slug: sanitizeHTMLOnServer(formData.get("tagSlug")),
  };
  await createTag(newField);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت ایجاد شد",
  };
}

export async function actionUpdateTag(formData: FormData): ActionResult {
  await secureAccess();
  const tagId = formData.get("id") as string;
  const tag = getTag(tagId);
  if (!tag) throw new Error("برچسب مورد نظر وجود ندارد");
  const updatedFields: TagFieldProps = {
    title: sanitizeTextOnServer(formData.get("tagTitle") as string),
    slug: sanitizeTextOnServer(formData.get("tagSlug") as string),
  };
  await updateTag(updatedFields, tagId);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت ویرایش شد",
  };
}

export async function actionDeleteTag(slug: string): ActionResult {
  await secureAccess();
  const tag = await getTag(slug);
  if (!tag) throw new Error("برچسب مورد نظر وجود ندارد");
  await deleteTag(slug);
  revalidatePath("dashboard/blogs");
  revalidatePath("dashboard/blogs/all");
  revalidatePath("dashboard/blogs/new");
  revalidatePath("dashboard/blogs/tags");
  return {
    status: "success",
    message: "برچسب با موفقیت حذف شد ",
  };
}
