import { TagFieldProps, TaggedProps, TagProps } from "@/types/app/data/types";
import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "_data/supabase";

export async function createTag(
  newTag: TagFieldProps
): Promise<PostgrestError | TagProps> {
  const { error, data } = await supabase
    .from("tags")
    .insert([newTag])
    .select()
    .single();
  return error ?? data!;
}
export async function getTags(): Promise<PostgrestError | TagProps[]> {
  const { data, error } = await supabase.from("tags").select("*");
  return error ?? data!;
}

export async function getTag(
  tagId: string
): Promise<PostgrestError | TagProps> {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("id", tagId)
    .single();
  return error ?? data!;
}

export async function updateTag(
  updatedField: TagFieldProps,
  id: string
): Promise<PostgrestError | TagProps> {
  const { data, error } = await supabase
    .from("tags")
    .update(updatedField)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
export async function deleteTag(
  id: string
): Promise<PostgrestError | TagProps> {
  const { data, error } = await supabase
    .from("tags")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

export async function tagging(
  newField: TaggedProps
): Promise<PostgrestError | TaggedProps> {
  const { data, error } = await supabase
    .from("tagged")
    .insert([newField])
    .select()
    .single();
  return error ?? data!;
}
export async function deleteTagged(
  blogId: string
): Promise<PostgrestError | TaggedProps> {
  const { data, error } = await supabase
    .from("tagged")
    .delete()
    .eq("blogId", blogId)
    .select()
    .single();
  return error ?? data!;
}
export async function getTaggedList(): Promise<PostgrestError | TaggedProps[]> {
  const { data, error } = await supabase.from("tagged").select("*");
  return error ?? data!;
}

export async function getTagBySlug(
  slug: string
): Promise<PostgrestError | TagProps> {
  const { data, error } = await supabase
    .from("tags")
    .select()
    .eq("slug", slug)
    .single();
  return error ?? data!;
}
