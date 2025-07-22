import { SlideFieldProps } from "@/types/app/data/types";
import { idRand } from "_data/utility";
import { revalidatePath } from "next/cache";
import { sanitizeTextOnServer } from "utility/jsDOM";

export function extractSlideFields(formData: FormData): SlideFieldProps {
  return {
    id: idRand(),
    title: sanitizeTextOnServer(formData.get("titleSlide") as string),
    image: sanitizeTextOnServer(formData.get("imageSlide") as string),
    bgColor: sanitizeTextOnServer(formData.get("bgColor") as string),
    textColor: sanitizeTextOnServer(formData.get("textColor") as string),
    type: sanitizeTextOnServer(formData.get("typeSlide") as string),
  };
}
export function revalidateSliders() {
  revalidatePath("/");
  revalidatePath("/dashboard/pages");
  revalidatePath("/dashboard/pages/home");
}
