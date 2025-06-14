import { supabase } from "../supabase";

export async function serviceCreateSlide(newSlide) {
  const { data, error } = await supabase
    .from("sliders")
    .insert([newSlide])
    .select();
  if (error) {
    console.log(error);
    throw new Error(
      "مشکلی در فرایند ایجاد اسلاید به وجود آمده است  مجددا تلاش کنید"
    );
  }
  return data;
}
export async function serviceGetSliders() {
  const { data, error } = await supabase.from("sliders").select("*");
  if (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت اطلاعات اسلاید ها ایجاد شده است");
  }
  return data;
}
export async function serviceGetSlider(id) {
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
export async function serviceDeleteSlide(slideId) {
  const { error } = await supabase.from("sliders").delete().eq("id", slideId);
  if (error) {
    console.log(error);
    throw new Error("مشکلی ایجاد شده است  مجددا تلاش کنید");
  }
}
