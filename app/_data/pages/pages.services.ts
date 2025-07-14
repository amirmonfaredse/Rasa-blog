import { ToastType } from "@/types/app/admin/store";
import { ActionResult, SlideFieldProps } from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function serviceCreateSlide(
  newSlide: SlideFieldProps
): Promise<ActionResult> {
  try {
    await supabase.from("sliders").insert([newSlide]);
    return {
      type: ToastType.Success,
      message: "اسلاید با موفقیت ایجاد شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند ایجاد اسلاید به وجود آمده است  مجددا تلاش کنید",
      error,
    };
  }
}

export async function serviceGetSliders(): Promise<SlideFieldProps[]> {
  const { data, error } = await supabase.from("sliders").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت اطلاعات اسلاید ها ایجاد شده است");
  }
  return data;
}
export async function serviceGetSlider(id: string): Promise<SlideFieldProps> {
  const { data, error } = await supabase
    .from("sliders")
    .select()
    .eq("id", id)
    .single();
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت اطلاعات اسلاید ایجاد شده است");
  }
  return data;
}
export async function serviceDeleteSlide(
  slideId: string
): Promise<ActionResult> {
  try {
    await supabase.from("sliders").delete().eq("id", slideId);

    return {
      type: ToastType.Success,
      message: "اسلاید با موفقیت حذف شد",
    };
  } catch (error) {
    console.log(error);
    return {
      type: ToastType.Error,
      message: "مشکلی در فرایند حذف اسلاید ایجاد شده است",
      error,
    };
  }
}
