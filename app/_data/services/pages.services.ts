import { PostgrestError } from "@supabase/supabase-js";
import { SlideFieldProps } from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function createSlide(
  newSlide: SlideFieldProps
): Promise<PostgrestError | SlideFieldProps> {
  const { error, data } = await supabase
    .from("sliders")
    .insert([newSlide])
    .select()
    .single();

  return error ?? data!;
}

export async function getSliders(): Promise<
  PostgrestError | SlideFieldProps[]
> {
  const { error, data } = await supabase.from("sliders").select("*");
  return error ?? data!;
}
export async function getSlider(
  id: string
): Promise<PostgrestError | SlideFieldProps> {
  const { error, data } = await supabase
    .from("sliders")
    .select()
    .eq("id", id)
    .single();
  return error ?? data!;
}
export async function updateSlide(
  updatedFields: SlideFieldProps,
  id: string
): Promise<PostgrestError | SlideFieldProps> {
  const { data, error } = await supabase
    .from("sliders")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
export async function deleteSlide(
  slideId: string
): Promise<PostgrestError | SlideFieldProps> {
  const { error, data } = await supabase
    .from("sliders")
    .delete()
    .eq("id", slideId)
    .select()
    .single();
  return error ?? data!;
}
