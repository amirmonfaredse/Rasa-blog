"use server";

import { revalidatePath } from "next/cache";
import { secureAccess } from "../utility";
import {
  serviceCreateSlide,
  serviceDeleteSlide,
  serviceGetSlider,
} from "./pages.services";

export async function actionCreateSlide(formData) {
  await secureAccess();
  const newSlide = {
    title: formData.get("titleSlide").trim(),
    image: formData.get("imageSlide").trim(),
    bgColor: formData.get("bgColor").trim(),
    textColor: formData.get("textColor").trim(),
    type: formData.get("typeSlide"),
  };
  await serviceCreateSlide(newSlide);
  revalidatePath("/dashboard/pages/home");
}
export async function actionRemoveSlide(id) {
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
