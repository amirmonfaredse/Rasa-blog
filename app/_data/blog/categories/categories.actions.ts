import { revalidatePath } from "next/cache";
import {
  serviceCreateCategory,
  serviceDeleteCategory,
  serviceGetCategory,
  serviceUpdateCategory,
} from "./categories.services";
import { secureAccess } from "_data/utility";
import { ActionResult } from "next/dist/server/app-render/types";
import { sanitizeTextOnServer } from "utility/jsDOM";
import { CategoryFieldProps } from "@/types/app/data/types";

// ACTION for POST / New Category
export async function actionCreateCategory(formData: FormData): ActionResult {
  await secureAccess();
  const newCategoryFields: CategoryFieldProps = {
    title: sanitizeTextOnServer(formData.get("categoryTitle") as string),
    name: sanitizeTextOnServer(formData.get("categoryValue") as string),
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
export async function actionUpdateCategory(formData: FormData): ActionResult {
  await secureAccess();
  const categoryId = formData.get("id") as string;
  const category = serviceGetCategory(categoryId);
  if (!category) throw new Error("دسته بندی مورد نظر وجود ندارد");

  const updatedFields: CategoryFieldProps = {
    title: sanitizeTextOnServer(formData.get("categoryTitle") as string),
    name: sanitizeTextOnServer(formData.get("categoryValue") as string),
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
export async function actionDeleteCategory(id: string): ActionResult {
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
