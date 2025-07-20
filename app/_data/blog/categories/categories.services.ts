import { CategorizedProps, CategoryFieldProps } from "@/types/app/data/types";
import { type PostgrestError } from "@supabase/supabase-js";

import { supabase } from "_data/supabase";

export async function createCategory(
  newCategory: CategoryFieldProps
): Promise<PostgrestError | CategoryFieldProps> {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory])
    .select()
    .single();
  return error ?? data!;
}

export async function getCategories(): Promise<
  PostgrestError | CategoryFieldProps[]
> {
  const { data, error } = await supabase.from("categories").select("*");
  return error ?? data!;
}
export async function getCategory(
  catId: string
): Promise<PostgrestError | CategoryFieldProps> {
  const { data, error } = await supabase
    .from("categories")
    .select()
    .eq("id", catId)
    .single();

  return error ?? data!;
}

// PUT / Category
export async function updateCategory(
  updatedFields: CategoryFieldProps,
  id: string
): Promise<PostgrestError | CategoryFieldProps> {
  const { error, data } = await supabase
    .from("categories")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

// DELETE / Category
export async function deleteCategory(
  id: string
): Promise<PostgrestError | CategoryFieldProps> {
  const { error, data } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
export async function categorize(
  newField: CategorizedProps
): Promise<PostgrestError | CategorizedProps> {
  const { error, data } = await supabase
    .from("categorized")
    .insert([newField])
    .select()
    .single();
  return error ?? data!;
}
export async function getCategorizedList(): Promise<
  PostgrestError | CategorizedProps[]
> {
  const { data, error } = await supabase.from("categorized").select("*");
  return error ?? data!;
}
export async function deleteCategorized(
  blogId: string
): Promise<PostgrestError | CategorizedProps> {
  const { error, data } = await supabase
    .from("categorized")
    .delete()
    .eq("blogId", blogId)
    .select()
    .single();
  return error ?? data!;
}
