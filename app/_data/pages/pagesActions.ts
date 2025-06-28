"use server";

import { revalidatePath } from "next/cache";
import { secureAccess } from "../utility";
import {
  serviceCreateSlide,
  serviceDeleteSlide,
  serviceGetSlider,
} from "./pages.services";
import { sanitizeTextOnServer } from "../../utility/jsDOM";
import { SlideFieldProps } from "../../../types/app/data/types";
import { ActionResult } from "next/dist/server/app-render/types";

export async function actionCreateSlide(formData: FormData): ActionResult {
  await secureAccess();
  const slideFields: SlideFieldProps = {
    title: sanitizeTextOnServer(formData.get("titleSlide")),
    image: sanitizeTextOnServer(formData.get("imageSlide")),
    bgColor: sanitizeTextOnServer(formData.get("bgColor")),
    textColor: sanitizeTextOnServer(formData.get("textColor")),
    type: sanitizeTextOnServer(formData.get("typeSlide")),
  };
  await serviceCreateSlide(slideFields);
  revalidatePath("/dashboard/pages/home");
  return {
    status: "success",
    message: "اسلاید با موفقیت ایجاد شد",
  };
}
export async function actionRemoveSlide(id: string): ActionResult {
  await secureAccess();
  const slide = await serviceGetSlider(id);
  if (!slide) throw new Error("امکان حذف این اسلاید وجود ندارد");
  await serviceDeleteSlide(id);
  revalidatePath("/dashboard/pages/home");
  return {
    status: "success",
    message: "اسلاید با موفقیت حذف شد",
  };
}
