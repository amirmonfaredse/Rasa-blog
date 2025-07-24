import { CategorizedProps, CategoryFieldsProps } from "@/types/app/data/types";
import { type PostgrestError } from "@supabase/supabase-js";

import { supabase } from "_data/supabase";

export async function createCategory(
  newCategory: CategoryFieldsProps
): Promise<PostgrestError | CategoryFieldsProps> {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory])
    .select()
    .single();
  return error ?? data!;
}

export async function getCategories(): Promise<
  PostgrestError | CategoryFieldsProps[]
> {
  const { data, error } = await supabase.from("categories").select("*");
  return error ?? data!;
}
export async function getCategory(
  catId: string
): Promise<PostgrestError | CategoryFieldsProps> {
  const { data, error } = await supabase
    .from("categories")
    .select()
    .eq("id", catId)
    .single();

  return error ?? data!;
}

export async function updateCategory(
  updatedFields: CategoryFieldsProps,
  id: string
): Promise<PostgrestError | CategoryFieldsProps> {
  const { error, data } = await supabase
    .from("categories")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

export async function deleteCategory(
  id: string
): Promise<PostgrestError | CategoryFieldsProps> {
  const { error, data } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
export async function categorize(
  newFields: CategorizedProps[]
): Promise<PostgrestError | CategorizedProps[]> {
  const { error, data } = await supabase
    .from("categorized")
    .insert([newFields])
    .select();
  return error ?? data!;
}
export async function getCategorizedList(): Promise<
  PostgrestError | CategorizedProps[]
> {
  const { data, error } = await supabase.from("categorized").select("*");
  return error ?? data!;
}
export async function getCategorized(
  blogId: string
): Promise<PostgrestError | CategorizedProps[]> {
  const { data, error } = await supabase
    .from("categorized")
    .select()
    .eq("blogId", blogId);
  return error ?? data!;
}
export async function deleteCategorized(
  blogId: string
): Promise<PostgrestError | CategorizedProps[]> {
  const { error, data } = await supabase
    .from("categorized")
    .delete()
    .eq("blogId", blogId)
    .select();

  return error ?? data!;
}
