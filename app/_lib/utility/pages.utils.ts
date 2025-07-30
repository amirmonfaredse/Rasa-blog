import { SlideFieldProps } from "@/types/app/data/types";
import { idRand, validateUrl } from "_data/utils/server.utils";
import { revalidatePath } from "next/cache";
import { sanitizeTextOnServer } from "utility/jsDOM";

export function extractSlideFields(
  formData: FormData,
  id: string | undefined = undefined
): SlideFieldProps {
  return {
    id: id ?? idRand(),
    title: sanitizeTextOnServer(formData.get("titleSlide") as string),
    image: validateUrl(formData.get("imageSlide") as string),
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
