import { ToastType } from "@/types/app/admin/store";
import { ActionResult, SlideFieldProps } from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function serviceCreateSlide(
  newSlide: SlideFieldProps
): Promise<ActionResult> {
  const { error } = await supabase.from("sliders").insert([newSlide]);
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ایجاد اسلاید به وجود آمده است  مجددا تلاش کنید"
    );
  }
  return {
    type: ToastType.Success,
    message: "اسلاید با موفقیت ایجاد شد",
  };
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
  const { error } = await supabase.from("sliders").delete().eq("id", slideId);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
  return {
    type: ToastType.Success,
    message: "اسلاید با موفقیت حذف شد",
  };
}
